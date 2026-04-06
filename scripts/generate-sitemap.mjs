import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://taskul-ai.com";
const postsDir = path.join(process.cwd(), "posts");

// LP固定ページ
const staticPages = [
  { loc: "/", lastmod: "2026-03-28", changefreq: "weekly", priority: "1.0" },
  { loc: "/column/", lastmod: new Date().toISOString().split("T")[0], changefreq: "daily", priority: "0.8" },
  { loc: "/terms.html", lastmod: "2026-03-27", changefreq: "monthly", priority: "0.3" },
  { loc: "/privacy.html", lastmod: "2026-03-15", changefreq: "monthly", priority: "0.3" },
];

// 記事ページを自動取得
const posts = fs
  .readdirSync(postsDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => {
    const content = fs.readFileSync(path.join(postsDir, f), "utf8");
    const { data } = matter(content);
    const slug = f.replace(/\.md$/, "");
    return {
      loc: `/column/${slug}/`,
      lastmod: data.date ? data.date.replace(/\//g, "-") : new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.9",
    };
  });

const allUrls = [...staticPages, ...posts];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// outディレクトリとtaskul-lpの両方に出力
const outDir = path.join(process.cwd(), "out");
if (fs.existsSync(outDir)) {
  fs.writeFileSync(path.join(outDir, "sitemap.xml"), xml);
}

console.log(`Generated sitemap.xml with ${allUrls.length} URLs`);
console.log(xml);
