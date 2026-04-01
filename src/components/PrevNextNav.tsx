import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface PrevNextNavProps {
  prevPost: PostMeta | null;
  nextPost: PostMeta | null;
}

export default function PrevNextNav({ prevPost, nextPost }: PrevNextNavProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="flex gap-4">
      {prevPost ? (
        <Link
          href={`/${prevPost.slug}`}
          className="flex-1 bg-white rounded-[10px] p-5 flex flex-col gap-2 group hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow"
        >
          <span className="text-xs text-sub-gray font-medium">
            ← 前の記事
          </span>
          <span className="text-sm md:text-base font-bold text-main-black leading-[1.5] group-hover:text-green transition-colors line-clamp-2">
            {prevPost.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {nextPost ? (
        <Link
          href={`/${nextPost.slug}`}
          className="flex-1 bg-white rounded-[10px] p-5 flex flex-col gap-2 items-end text-right group hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow"
        >
          <span className="text-xs text-sub-gray font-medium">
            次の記事 →
          </span>
          <span className="text-sm md:text-base font-bold text-main-black leading-[1.5] group-hover:text-green transition-colors line-clamp-2">
            {nextPost.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
