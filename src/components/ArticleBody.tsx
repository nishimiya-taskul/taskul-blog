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
    // and hide the broken img tag above it
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
      // Hide the broken img before this comment
      const prev = node.previousSibling as HTMLElement | null;
      if (prev?.tagName === "IMG") {
        prev.style.display = "none";
      }
      // Also check the previous element sibling (might have whitespace text nodes in between)
      const prevEl = (node as unknown as { previousElementSibling?: HTMLElement }).previousElementSibling
        ?? node.parentElement?.querySelector(`img[alt]`);
      if (prevEl?.tagName === "IMG" && prevEl.closest("p")?.contains(node)) {
        prevEl.style.display = "none";
      }

      const placeholder = document.createElement("div");
      placeholder.className = "image-placeholder";
      placeholder.innerHTML = `
        <div class="image-placeholder-icon">📷</div>
        <div class="image-placeholder-text">${text.replace("画像未設定: ", "")}</div>
      `;
      node.parentNode?.insertBefore(placeholder, node.nextSibling);
      node.parentNode?.removeChild(node);
    }

    // Also hide any remaining broken images (without comments)
    const images = ref.current.querySelectorAll("img");
    images.forEach((img) => {
      img.onerror = () => {
        img.style.display = "none";
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
