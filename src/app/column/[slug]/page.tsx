import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ArticleBody from "@/components/ArticleBody";
import ChatAnimator from "@/components/ChatAnimator";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import "../../article.css";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-[155px] pb-32 bg-bg min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-[1210px] mx-auto px-4 mb-10">
          <div className="flex items-center gap-[11px] text-base text-gray">
            <Link href="/" className="font-['DM_Sans'] hover:text-green">
              TOP
            </Link>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="currentColor" />
            </svg>
            <Link href="/column" className="hover:text-green">
              コラム
            </Link>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="currentColor" />
            </svg>
            <span>{post.category}</span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-[1210px] mx-auto px-4 flex gap-[70px] items-start">
          {/* Article */}
          <article className="w-[800px] shrink-0 flex flex-col gap-[86px]">
            {/* Header Section */}
            <div className="flex flex-col gap-[30px]">
              {/* Thumbnail */}
              <div className="bg-white rounded-[10px] h-[450px] w-full flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="border-[6px] border-green rounded-[6px] w-9 h-9" />
                  <span className="font-black text-[44px] tracking-[2px] text-black font-['DM_Sans']">
                    TASKUL
                  </span>
                </div>
              </div>

              {/* Title + Meta */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[38px] font-bold leading-[1.5] text-main-black">
                  {post.title}
                </h1>
                <div className="flex items-center gap-[26px]">
                  <time className="text-base text-gray font-['DM_Sans']">
                    {post.date}
                  </time>
                  <div className="flex gap-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white rounded-[5px] shadow-[2px_2px_8px_rgba(0,0,0,0.08)] px-[13px] py-[3px] h-7 flex items-center gap-[7px] text-sm text-[#161616]"
                      >
                        <span className="w-[5px] h-[5px] bg-green rounded-full" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Writer */}
              <div className="bg-white rounded-[5px] p-3 flex items-start gap-4">
                <div className="w-[84px] h-[84px] rounded-full border border-light-gray flex items-center justify-center shrink-0">
                  <div className="border-[8px] border-green rounded-[8px] w-12 h-12" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <p className="text-sm font-bold text-main-black">
                    {post.writer.role}
                  </p>
                  <p className="text-xl font-bold text-main-black">
                    {post.writer.name}
                  </p>
                  <p className="text-sm text-gray">{post.writer.bio}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/#register"
                      className="text-sm font-bold text-main-black"
                    >
                      ツールを試してみる
                    </Link>
                    <svg
                      width="5"
                      height="10"
                      viewBox="0 0 5 10"
                      fill="none"
                    >
                      <path
                        d="M0.5 0.5L4.5 5L0.5 9.5"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slightly-gray w-full" />

              {/* Article Content */}
              <ArticleBody contentHtml={post.contentHtml} />
              <ChatAnimator />
            </div>

            {/* CTA Banner */}
            <div className="flex flex-col gap-[23px]">
              <p className="text-base font-medium text-sub-gray text-center">
                ＼ 今なら7,980円の最上プランが1.5ヶ月無料！ ／
              </p>
              <div className="relative bg-white border-4 border-green rounded-[10px] h-[300px] shadow-[0_4px_24px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="absolute top-1/2 -translate-y-1/2 left-[44px] flex flex-col gap-4">
                  <h3 className="text-[34px] font-bold text-main-black leading-[1.3] tracking-[0.68px]">
                    タスクをシンプルに。
                  </h3>
                  <p className="text-base text-[#161616] w-[432px] leading-[1.6]">
                    フリーランスのためのAIタスク管理。開いて2秒で操れる、依頼貼るだけで自動タスク化。
                  </p>
                  <Link
                    href="/#register"
                    className="bg-green text-white text-[17px] font-bold px-8 py-3 rounded-full w-[272px] h-[50px] flex items-center justify-center tracking-[0.68px]"
                  >
                    今すぐ試してみる
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-[13px]">
                    <span className="w-[7px] h-[7px] bg-green rounded-[1px]" />
                    <span className="text-lg font-medium text-sub-gray font-['DM_Sans']">
                      Column
                    </span>
                  </div>
                  <h2 className="text-[54px] font-bold text-main-black leading-[1.28]">
                    関連記事
                  </h2>
                </div>
                <div className="flex flex-wrap gap-5">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/column/${rp.slug}`}
                      className="w-[253px] flex flex-col gap-[14px]"
                    >
                      <div className="bg-white rounded-[7px] h-[142px] w-full flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          <div className="border-[3px] border-green rounded-[3px] w-[18px] h-[18px]" />
                          <span className="font-black text-[22px] tracking-[1px] text-black font-['DM_Sans']">
                            TASKUL
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 leading-[1.6]">
                        <p className="text-lg font-bold text-main-black">
                          {rp.title}
                        </p>
                        <p className="text-sm font-medium text-sub-gray">
                          {rp.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-center gap-[18px]">
              <Link
                href="/column"
                className="bg-white rounded-full px-8 py-4 flex items-center gap-2.5"
              >
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M0.5 0.5L7 7L13.5 0.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[15px] font-semibold text-main-black">
                  一覧へ戻る
                </span>
              </Link>
              <Link
                href="/"
                className="bg-white rounded-full px-8 py-4 flex items-center gap-2.5"
              >
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  className="rotate-180"
                >
                  <path
                    d="M0.5 0.5L7 7L13.5 0.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[15px] font-semibold text-main-black">
                  TOPへ戻る
                </span>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <Sidebar
            headings={post.headings}
            popularPosts={allPosts.slice(0, 5)}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
