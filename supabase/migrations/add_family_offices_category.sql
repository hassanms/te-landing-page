-- Add "Family Offices" category to blog_categories
INSERT INTO blog_categories (name, slug, description, color, sort_order)
VALUES 
  ('Family Offices', 'family-offices', 'Insights and solutions for family offices', '#0d9488', 10)
ON CONFLICT (slug) DO NOTHING;
