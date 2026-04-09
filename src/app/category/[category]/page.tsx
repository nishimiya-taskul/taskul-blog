import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { getAllPosts } from "@/lib/posts";
import "../../article.css";

const CATEGORIES = [
  "タスク管理",
  "案件管理",
  "フリーランス",
  "ツール比較",
  "働き方",
];

const CATEGORY_INTRO: Record<string, string> = {
  "ツール比較": "タスク管理ツールを選ぶなら、「AI自動化機能」「フリーランス向け案件管理」「価格帯」の3軸で比較するのが最も効果的です。Notion・Asana・Todoist・TASKULなど主要ツールを機能・料金・使いやすさの観点から徹底比較し、職種・規模・予算別におすすめを解説します。",
  "タスク管理": "フリーランス・クリエイターのタスク管理は、案件単位での進捗管理と納期管理が核心です。個人の生産性を最大化するタスク管理術から、複数案件を同時進行するための実践テクニックまで解説します。",
  "案件管理": "案件管理の最大の課題は、依頼内容・進捗・請求情報の一元化です。受注から納品・請求まで、案件をもれなく管理する方法を実践的に解説します。",
  "フリーランス": "フリーランスとして安定した収入を得るには、案件管理・時間管理・営業の仕組み化が欠かせません。独立1年目から使える実践的なノウハウをお届けします。",
  "働き方": "クリエイター・フリーランスが長く活躍し続けるための働き方設計を解説します。時間の使い方・生産性向上・メンタル管理まで、現場目線で解説します。",
};

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: encodeURIComponent(cat),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  return {
    title: `${decoded}の記事一覧`,
    description: `${decoded}に関するコラム記事一覧。フリーランス・クリエイター向けのノウハウをお届けします。`,
    alternates: {
      canonical: `https://taskul-ai.com/column/category/${decoded}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const allPosts = getAllPosts();
  const posts = allPosts.filter(
    (p) => p.tags.includes(decoded) || p.category === decoded
  );

  return (
    <>
      <Header />
      <main className="pt-[72px] md:pt-[90px] pb-16 md:pb-32 bg-bg min-h-screen">
        <div className="max-w-[1210px] mx-auto px-4 mb-4 md:mb-10">
          <div className="flex items-center gap-[11px] text-[13px] md:text-base text-gray">
            <a href="https://taskul-ai.com/" className="font-['DM_Sans'] hover:text-green">
              TASKUL
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
            <span>{decoded}</span>
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
                  {decoded}
                </h1>
                {CATEGORY_INTRO[decoded] && (
                  <p className="text-[15px] md:text-base text-sub-gray leading-[1.8] max-w-[640px]">
                    {CATEGORY_INTRO[decoded]}
                  </p>
                )}
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
