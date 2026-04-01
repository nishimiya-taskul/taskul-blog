import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  thumbnail?: string;
  writer: {
    name: string;
    role: string;
    bio: string;
  };
}

export interface Post extends PostMeta {
  contentHtml: string;
  headings: { id: string; text: string; level: number }[];
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const headings: Post["headings"] = [];
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^\w\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff]+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ id, text, level: match[1].length });
  }

  let contentWithIds = content;
  for (const h of headings) {
    const hashes = "#".repeat(h.level);
    contentWithIds = contentWithIds.replace(
      `${hashes} ${h.text}`,
      `${hashes} ${h.text} {#${h.id}}`
    );
  }

  const processedContent = remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .processSync(content);

  let htmlContent = processedContent.toString();

  for (const h of headings) {
    const tag = `h${h.level}`;
    const escaped = h.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    htmlContent = htmlContent.replace(
      new RegExp(`<${tag}>(${escaped})</${tag}>`),
      `<${tag} id="${h.id}">$1</${tag}>`
    );
  }

  return {
    slug,
    title: data.title,
    description: data.description || "",
    date: data.date,
    category: data.category || "タスク管理",
    tags: data.tags || [],
    thumbnail: data.thumbnail,
    writer: data.writer || {
      name: "TASKUL編集部",
      role: "ライター",
      bio: "フリーランス・クリエイター向けのタスク管理・業務効率化に関する情報を発信しています。",
    },
    contentHtml: htmlContent,
    headings,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title,
        description: data.description || "",
        date: data.date,
        category: data.category || "タスク管理",
        tags: data.tags || [],
        thumbnail: data.thumbnail,
        writer: data.writer || {
          name: "TASKUL編集部",
          role: "ライター",
          bio: "",
        },
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
