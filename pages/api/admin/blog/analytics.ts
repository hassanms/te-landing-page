import type { NextApiRequest, NextApiResponse } from "next";
import { getSupabaseAdmin } from "lib/supabase/server";
import { getAuthUserFromRequest } from "lib/supabase/auth-helpers";
import {
  eachDayOfInterval,
  eachMonthOfInterval,
  format,
  startOfDay,
  startOfMonth,
} from "date-fns";

type Range = "week" | "month" | "year";

type BucketUnit = "day" | "month";

interface BlogViewsPoint {
  bucket: string;
  label: string;
  totalViews: number;
  topPosts: {
    id: string;
    slug: string;
    title: string;
    views: number;
  }[];
}

interface BlogViewsResponse {
  range: Range;
  bucketUnit: BucketUnit;
  buckets: BlogViewsPoint[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { user, error: authError } = await getAuthUserFromRequest(req, res);

  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const rangeParam = (req.query.range as string) || "week";
    const range: Range =
      rangeParam === "month" || rangeParam === "year" ? rangeParam : "week";

    const now = new Date();
    let bucketUnit: BucketUnit = "day";
    let startDate: Date;

    if (range === "week") {
      // Last 7 days including today
      startDate = startOfDay(new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000));
      bucketUnit = "day";
    } else if (range === "month") {
      // Last 30 days including today
      startDate = startOfDay(
        new Date(now.getTime() - 29 * 24 * 60 * 60 * 1000),
      );
      bucketUnit = "day";
    } else {
      // Current calendar year, bucketed by month
      startDate = startOfMonth(new Date(now.getFullYear(), 0, 1));
      bucketUnit = "month";
    }

    const supabaseAdmin = getSupabaseAdmin();

    const { data: viewRows, error } = await supabaseAdmin
      .from("blog_post_views")
      .select(
        "blog_post_id, viewed_at, blog_posts(id, slug, title, is_published)",
      )
      .gte("viewed_at", startDate.toISOString());

    if (error) {
      console.error("Error fetching blog views:", error);
      return res.status(500).json({ error: "Failed to fetch blog views" });
    }

    type ViewRow = {
      blog_post_id: string;
      viewed_at: string;
      blog_posts: {
        id: string;
        slug: string;
        title: string;
        is_published: boolean;
      }[] | null;
    };

    const rows = (viewRows || []).filter((row: ViewRow) => {
      const post = Array.isArray(row.blog_posts) ? row.blog_posts[0] : row.blog_posts;
      return post && post.is_published;
    }) as ViewRow[];

    const bucketMap = new Map<
      string,
      {
        totalViews: number;
        perPost: Map<
          string,
          {
            id: string;
            slug: string;
            title: string;
            views: number;
          }
        >;
      }
    >();

    const getBucketKeyAndLabel = (date: Date) => {
      if (bucketUnit === "month") {
        const key = format(date, "yyyy-MM");
        const label = format(date, "MMM yyyy");
        return { key, label };
      }
      const key = format(date, "yyyy-MM-dd");
      const label = format(date, "MMM d");
      return { key, label };
    };

    rows.forEach((row) => {
      const post = Array.isArray(row.blog_posts) ? row.blog_posts[0] : row.blog_posts;
      if (!post) return;

      const viewedAt = new Date(row.viewed_at);
      const baseDate =
        bucketUnit === "month" ? startOfMonth(viewedAt) : startOfDay(viewedAt);
      const { key } = getBucketKeyAndLabel(baseDate);

      if (!bucketMap.has(key)) {
        bucketMap.set(key, {
          totalViews: 0,
          perPost: new Map(),
        });
      }

      const bucket = bucketMap.get(key)!;
      bucket.totalViews += 1;

      const existing = bucket.perPost.get(post.id) || {
        id: post.id,
        slug: post.slug,
        title: post.title,
        views: 0,
      };
      existing.views += 1;
      bucket.perPost.set(post.id, existing);
    });

    // Ensure we include buckets with zero views for a smooth line
    const endDate = bucketUnit === "month" ? startOfMonth(now) : startOfDay(now);

    const allBucketDates =
      bucketUnit === "month"
        ? eachMonthOfInterval({ start: startDate, end: endDate })
        : eachDayOfInterval({ start: startDate, end: endDate });

    const buckets: BlogViewsPoint[] = allBucketDates.map((date) => {
      const { key, label } = getBucketKeyAndLabel(date);
      const bucket = bucketMap.get(key);

      if (!bucket) {
        return {
          bucket: key,
          label,
          totalViews: 0,
          topPosts: [],
        };
      }

      const topPosts = Array.from(bucket.perPost.values())
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      return {
        bucket: key,
        label,
        totalViews: bucket.totalViews,
        topPosts,
      };
    });

    const response: BlogViewsResponse = {
      range,
      bucketUnit,
      buckets,
    };

    return res.status(200).json(response);
  } catch (err) {
    console.error("Error generating blog views analytics:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

