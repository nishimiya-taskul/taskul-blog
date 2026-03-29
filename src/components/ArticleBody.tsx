"use client";

import { useEffect, useRef } from "react";

interface ArticleBodyProps {
  contentHtml: string;
}

export default function ArticleBody({ contentHtml }: ArticleBodyProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Convert HTML comments into visible placeholder instructions
    const walker = document.createTreeWalker(
      ref.current,
      NodeFilter.SHOW_COMMENT,
      null
    );
    const comments: { node: Comment; text: string }[] = [];
    let node;
    while ((node = walker.nextNode())) {
      const text = (node as Comment).textContent?.trim() || "";
      if (text.startsWith("画像未設定")) {
        comments.push({ node: node as Comment, text });
      }
    }
    for (const { node, text } of comments) {
      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.innerHTML = `
        <div class="image-placeholder-icon">📷</div>
        <div class="image-placeholder-text">${text.replace("画像未設定: ", "")}</div>
      `;
      node.parentNode?.insertBefore(placeholder, node.nextSibling);
    }

    // Replace broken images with placeholder
    const images = ref.current.querySelectorAll("img");
    images.forEach((img) => {
      img.onerror = () => {
        const placeholder = document.createElement("div");
        placeholder.className = "image-placeholder";
        placeholder.innerHTML = `
          <div class="image-placeholder-icon">📷</div>
          <div class="image-placeholder-text">${img.alt || "画像を挿入"}</div>
          <div class="image-placeholder-path">${img.src.replace(window.location.origin, "")}</div>
        `;
        img.parentNode?.replaceChild(placeholder, img);
      };
    });
  }, [contentHtml]);

  return (
    <div
      ref={ref}
      className="article-body"
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
}
