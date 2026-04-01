import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getAllPosts } from "@/lib/posts";

export function CategoryPageContent({ categoryName }: { categoryName: string }) {
  const allPosts = getAllPosts();
  const posts = allPosts.filter(
    (p) => p.tags.includes(categoryName) || p.category === categoryName
  );

  return (
    <>
      <Header />
      <main className="pt-[72px] md:pt-[90px] pb-16 md:pb-32 bg-bg min-h-screen">
        <div className="max-w-[1210px] mx-auto px-4 mb-4 md:mb-10">
          <div className="flex items-center gap-[11px] text-[13px] md:text-base text-gray">
            <a href="https://taskul-ai.com/" className="font-['DM_Sans'] hover:text-green">
              TOP
            </a>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="currentColor" />
            </svg>
            <Link href="/" className="hover:text-green">
              コラム
            </Link>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="currentColor" />
            </svg>
            <span>{categoryName}</span>
          </div>
        </div>

        <div className="max-w-[1210px] mx-auto px-4 flex flex-col lg:flex-row gap-[70px] items-start">
          <div className="w-full lg:w-[800px] shrink-0 flex flex-col gap-[86px]">
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-[13px]">
                  <span className="w-[7px] h-[7px] bg-green rounded-[1px]" />
                  <span className="text-lg font-medium text-sub-gray">
                    カテゴリ
                  </span>
                </div>
                <h1 className="text-[38px] md:text-[54px] font-bold text-main-black leading-[1.28]">
                  {categoryName}
                </h1>
              </div>

              {posts.length === 0 ? (
                <p className="text-sub-gray">
                  このカテゴリの記事はまだありません。
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-[26px_10px] md:gap-[60px_20px]">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/${post.slug}`}
                      className="flex flex-col gap-[14px] md:gap-[18px] group"
                    >
                      {post.thumbnail ? (
                        <div className="bg-white rounded-[5px] md:rounded-[10px] aspect-video w-full overflow-hidden">
                          <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="bg-white rounded-[5px] md:rounded-[10px] aspect-video w-full flex items-center justify-center">
                          <div className="flex items-center gap-1.5">
                            <div className="border-[4px] border-green rounded-[4px] w-6 h-6" />
                            <span className="font-black text-[30px] tracking-[1.5px] text-black font-['DM_Sans']">
                              TASKUL
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col gap-2.5">
                        <p className="text-base md:text-xl font-bold text-main-black leading-[1.5] group-hover:text-green transition-colors line-clamp-3">
                          {post.title}
                        </p>
                        <div className="hidden md:flex items-center gap-2.5">
                          <time className="text-sm text-sub-gray font-['DM_Sans'] leading-[1.5]">
                            {post.date}
                          </time>
                        </div>
                        <p className="hidden md:block text-[13px] md:text-[15px] font-medium text-sub-gray leading-[1.5] line-clamp-3">
                          {post.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center gap-[18px]">
              <Link
                href="/"
                className="bg-white rounded-full px-8 py-4 flex items-center gap-2.5"
              >
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="rotate-180">
                  <path d="M0.5 0.5L7 7L13.5 0.5" stroke="currentColor" strokeLinecap="round" />
                </svg>
                <span className="text-[15px] font-semibold text-main-black">
                  一覧へ戻る
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <Sidebar headings={[]} popularPosts={allPosts.slice(0, 5)} />
          </div>
          <div className="lg:hidden w-full">
            <Sidebar headings={[]} popularPosts={allPosts.slice(0, 5)} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
