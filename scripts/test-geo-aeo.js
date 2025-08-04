#!/usr/bin/env node

/**
 * GEO/AEO Implementation Test Script
 *
 * This script helps validate the GEO and AEO implementation
 * by checking various aspects of the website optimization.
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Testing GEO/AEO Implementation...\n");

// Test 1: Check if sitemap exists
console.log("1. Checking sitemap.xml...");
try {
  const sitemapPath = path.join(__dirname, "../pages/sitemap.xml.tsx");
  if (fs.existsSync(sitemapPath)) {
    console.log("   ✅ sitemap.xml.tsx exists");
  } else {
    console.log("   ❌ sitemap.xml.tsx not found");
  }
} catch (error) {
  console.log("   ❌ Error checking sitemap:", error.message);
}

// Test 2: Check robots.txt
console.log("\n2. Checking robots.txt...");
try {
  const robotsPath = path.join(__dirname, "../public/robots.txt");
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, "utf8");
    if (
      robotsContent.includes("GPTBot") &&
      robotsContent.includes("ChatGPT-User")
    ) {
      console.log("   ✅ robots.txt includes AI bot permissions");
    } else {
      console.log("   ⚠️  robots.txt exists but may need AI bot permissions");
    }
  } else {
    console.log("   ❌ robots.txt not found");
  }
} catch (error) {
  console.log("   ❌ Error checking robots.txt:", error.message);
}

// Test 3: Check manifest.json
console.log("\n3. Checking manifest.json...");
try {
  const manifestPath = path.join(
    __dirname,
    "../public/static/favicons/manifest.json",
  );
  if (fs.existsSync(manifestPath)) {
    const manifestContent = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (manifestContent.name && manifestContent.description) {
      console.log("   ✅ manifest.json is properly configured");
    } else {
      console.log("   ⚠️  manifest.json exists but may need configuration");
    }
  } else {
    console.log("   ❌ manifest.json not found");
  }
} catch (error) {
  console.log("   ❌ Error checking manifest.json:", error.message);
}

// Test 4: Check enhanced SEO component
console.log("\n4. Checking enhanced SEO component...");
try {
  const enhancedSeoPath = path.join(
    __dirname,
    "../components/seo/enhanced-seo.tsx",
  );
  if (fs.existsSync(enhancedSeoPath)) {
    const seoContent = fs.readFileSync(enhancedSeoPath, "utf8");
    if (seoContent.includes("EnhancedSEO") && seoContent.includes("faqData")) {
      console.log("   ✅ Enhanced SEO component exists with FAQ support");
    } else {
      console.log(
        "   ⚠️  Enhanced SEO component exists but may need FAQ implementation",
      );
    }
  } else {
    console.log("   ❌ Enhanced SEO component not found");
  }
} catch (error) {
  console.log("   ❌ Error checking enhanced SEO component:", error.message);
}

// Test 5: Check structured data component
console.log("\n5. Checking structured data component...");
try {
  const structuredDataPath = path.join(
    __dirname,
    "../components/seo/structured-data.tsx",
  );
  if (fs.existsSync(structuredDataPath)) {
    const structuredContent = fs.readFileSync(structuredDataPath, "utf8");
    if (
      structuredContent.includes("schema.org") &&
      structuredContent.includes("FAQPage")
    ) {
      console.log("   ✅ Structured data component with schema.org support");
    } else {
      console.log(
        "   ⚠️  Structured data component exists but may need schema.org implementation",
      );
    }
  } else {
    console.log("   ❌ Structured data component not found");
  }
} catch (error) {
  console.log("   ❌ Error checking structured data component:", error.message);
}

// Test 6: Check enhanced FAQ data
console.log("\n6. Checking enhanced FAQ data...");
try {
  const faqPath = path.join(__dirname, "../data/faq-enhanced.tsx");
  if (fs.existsSync(faqPath)) {
    const faqContent = fs.readFileSync(faqPath, "utf8");
    if (
      faqContent.includes("enhancedFAQData") &&
      faqContent.includes("question")
    ) {
      console.log("   ✅ Enhanced FAQ data exists");
    } else {
      console.log("   ⚠️  Enhanced FAQ data exists but may need content");
    }
  } else {
    console.log("   ❌ Enhanced FAQ data not found");
  }
} catch (error) {
  console.log("   ❌ Error checking enhanced FAQ data:", error.message);
}

// Test 7: Check _document.tsx optimizations
console.log("\n7. Checking _document.tsx optimizations...");
try {
  const documentPath = path.join(__dirname, "../pages/_document.tsx");
  if (fs.existsSync(documentPath)) {
    const documentContent = fs.readFileSync(documentPath, "utf8");
    if (
      documentContent.includes("preconnect") &&
      documentContent.includes("dns-prefetch")
    ) {
      console.log("   ✅ _document.tsx includes performance optimizations");
    } else {
      console.log(
        "   ⚠️  _document.tsx exists but may need performance optimizations",
      );
    }
  } else {
    console.log("   ❌ _document.tsx not found");
  }
} catch (error) {
  console.log("   ❌ Error checking _document.tsx:", error.message);
}

console.log("\n📋 Test Summary:");
console.log("   - Run this script after implementing the GEO/AEO changes");
console.log("   - Check the console output for any ❌ or ⚠️  warnings");
console.log("   - Fix any issues before deploying to production");
console.log("\n🔗 Next Steps:");
console.log("   1. Test the website with Google Rich Results Test");
console.log("   2. Validate schema markup with Schema.org Validator");
console.log("   3. Test AI responses with ChatGPT/Gemini");
console.log("   4. Monitor search console for improvements");
console.log("\n✅ GEO/AEO Implementation Test Complete!");
