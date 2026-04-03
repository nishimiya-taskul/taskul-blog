import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface SidebarProps {
  headings: { id: string; text: string; level: number }[];
  popularPosts?: PostMeta[];
  categories?: string[];
}

const CATEGORY_TO_SLUG: Record<string, string> = {
  "タスク管理": "task-management",
  "案件管理": "project-management",
  "フリーランス": "freelance",
  "ツール比較": "tool-comparison",
  "働き方": "workstyle",
};

const CATEGORIES = [
  "タスク管理",
  "案件管理",
  "フリーランス",
  "ツール比較",
  "働き方",
];

export default function Sidebar({
  headings,
  popularPosts = [],
  categories = CATEGORIES,
}: SidebarProps) {
  return (
    <aside className="w-full lg:w-[340px] shrink-0 flex flex-col gap-14">
      {/* CTA Banner */}
      <Link href="https://app.taskul-ai.com/login?from=blog" className="block w-full lg:w-[340px] shrink-0">
        <img
          src="/column/images/sidebar-banner.png"
          alt="TASKUL - 全機能14日間無料"
          width={340}
          height={340}
          className="w-full h-auto rounded-[10px]"
        />
      </Link>

      {/* Popular Posts */}
      {popularPosts.length > 0 && (
        <div className="flex flex-col gap-[22px]">
          <h3 className="text-xl font-bold text-main-black">人気記事</h3>
          <div className="flex flex-col gap-[23px]">
            {popularPosts.slice(0, 5).map((post, i) => {
              const rankColors = [
                "bg-[#cb9d20]",
                "bg-[#8f8f8f]",
                "bg-[#ad5a1b]",
                "bg-[#161616]",
                "bg-[#161616]",
              ];
              if (i === 0) {
                return (
                  <Link
                    key={post.slug}
                    href={`/${post.slug}`}
                    className="flex flex-col gap-[18px]"
                  >
                    <div className="relative bg-white rounded-[10px] h-[191px] w-full overflow-hidden flex items-center justify-center">
                      {post.thumbnail ? (
                        <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="flex items-center gap-1">
                          <div className="border-[4px] border-green rounded-[4px] w-6 h-6" />
                          <span className="font-black text-[30px] tracking-[1.5px] text-black font-['DM_Sans']">
                            TASKUL
                          </span>
                        </div>
                      )}
                      <div
                        className={`absolute top-0 left-0 ${rankColors[i]} rounded-tl-[5px] rounded-br-[5px] w-[46px] h-[46px] flex items-center justify-center`}
                      >
                        <span className="text-white text-xl font-bold font-['DM_Sans']">
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-main-black leading-[1.5]">
                      {post.title}
                    </p>
                  </Link>
                );
              }
              return (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="flex gap-2.5"
                >
                  <div className="relative bg-white rounded-[5px] w-[180px] h-[101px] shrink-0 overflow-hidden flex items-center justify-center">
                    {post.thumbnail ? (
                      <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center gap-1">
                        <div className="border-[2.7px] border-green rounded-[2.7px] w-4 h-4" />
                        <span className="font-black text-[20px] tracking-[1px] text-black font-['DM_Sans']">
                          TASKUL
                        </span>
                      </div>
                    )}
                    <div
                      className={`absolute top-0 left-0 ${rankColors[i]} rounded-tl-[2.6px] rounded-br-[2.6px] w-6 h-6 flex items-center justify-center`}
                    >
                      <span className="text-white text-[11px] font-bold font-['DM_Sans']">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  <p className="text-base font-bold text-main-black leading-[1.5]">
                    {post.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="flex flex-col gap-[22px]">
        <h3 className="text-xl font-bold text-main-black">カテゴリ</h3>
        <div className="flex flex-col gap-[18px]">
          {categories.map((cat) => (
            <div key={cat}>
              <div className="h-px bg-slightly-gray w-full" />
              <Link
                href={`/category/${CATEGORY_TO_SLUG[cat] || encodeURIComponent(cat)}`}
                className="flex items-center justify-between px-2.5 py-3 hover:bg-bg transition-colors rounded"
              >
                <span className="text-base font-semibold text-main-black tracking-[-0.32px]">
                  {cat}
                </span>
                <svg
                  width="4"
                  height="8"
                  viewBox="0 0 4 8"
                  fill="none"
                  className="text-main-black"
                >
                  <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="currentColor" />
                </svg>
              </Link>
            </div>
          ))}
          <div className="h-px bg-slightly-gray w-full" />
        </div>
      </div>

      {/* TASKUL Logo */}
      <div className="bg-white rounded-[5px] h-[126px] w-full flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          <div className="border-[4px] border-green rounded-[4px] w-6 h-6" />
          <span className="font-black text-[30px] tracking-[1.5px] text-black font-['DM_Sans']">
            TASKUL
          </span>
        </div>
      </div>

      {/* TOC */}
      {headings.length > 0 && (
        <div className="flex flex-col gap-[22px] sticky top-20">
          <h3 className="text-xl font-bold text-main-black font-['DM_Sans']">
            Index
          </h3>
          <nav className="bg-white rounded-[5px] p-6 flex flex-col gap-3">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={`text-sm text-sub-gray hover:text-green transition-colors ${
                  h.level === 3 ? "pl-4" : h.level === 4 ? "pl-8" : ""
                }`}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </aside>
  );
}
