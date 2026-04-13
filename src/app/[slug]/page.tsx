import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ArticleBody from "@/components/ArticleBody";
import TableOfContents from "@/components/TableOfContents";
import ChatAnimator from "@/components/ChatAnimator";
import ShareButtons from "@/components/ShareButtons";
import PrevNextNav from "@/components/PrevNextNav";
import FAQ from "@/components/FAQ";
import { getPostBySlug, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import "../article.css";

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
  const url = `https://taskul-ai.com/column/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url,
      siteName: "TASKUL コラム",
      images: [
        {
          url: post.thumbnail
            ? `https://taskul-ai.com${post.thumbnail}`
            : "https://taskul-ai.com/column/images/sidebar-banner.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        post.thumbnail
          ? `https://taskul-ai.com${post.thumbnail}`
          : "https://taskul-ai.com/column/images/sidebar-banner.png",
      ],
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

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.writer.name,
    },
    publisher: {
      "@type": "Organization",
      name: "TASKUL",
      logo: {
        "@type": "ImageObject",
        url: "https://taskul-ai.com/favicon.svg",
      },
    },
    mainEntityOfPage: `https://taskul-ai.com/column/${slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "TASKUL", item: "https://taskul-ai.com/" },
      { "@type": "ListItem", position: 2, name: "コラム", item: "https://taskul-ai.com/column/" },
      { "@type": "ListItem", position: 3, name: post.category, item: `https://taskul-ai.com/column/category/${{"タスク管理":"task-management","案件管理":"project-management","フリーランス":"freelance","ツール比較":"tool-comparison","働き方":"workstyle"}[post.category] || encodeURIComponent(post.category)}` },
      { "@type": "ListItem", position: 4, name: post.title },
    ],
  };

  const howtoJsonLd = post.howto && post.howto.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    step: post.howto.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {howtoJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoJsonLd) }}
        />
      )}
      <Header />
      <main className="pt-[72px] md:pt-[90px] pb-16 md:pb-32 bg-bg min-h-screen">
        {/* Breadcrumb */}
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
            <Link href={`/category/${{"タスク管理":"task-management","案件管理":"project-management","フリーランス":"freelance","ツール比較":"tool-comparison","働き方":"workstyle"}[post.category] || encodeURIComponent(post.category)}`} className="hover:text-green">
              {post.category}
            </Link>
            <svg width="4" height="8" viewBox="0 0 4 8" fill="none">
              <path d="M0.5 0.5L3.5 4L0.5 7.5" stroke="currentColor" />
            </svg>
            <span className="truncate max-w-[200px] md:max-w-[400px]">{post.title}</span>
          </div>
        </div>

        {/* Main Layout */}
        <div className="max-w-[1210px] mx-auto px-4 flex flex-col lg:flex-row gap-[70px] items-start">
          {/* Article */}
          <article className="w-full lg:w-[800px] shrink-0 flex flex-col gap-[86px]">
            {/* Header Section */}
            <div className="flex flex-col gap-[30px]">
              {/* Thumbnail */}
              {post.thumbnail ? (
                <div className="bg-white rounded-[10px] aspect-video md:h-[450px] w-full overflow-hidden">
                  <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="bg-white rounded-[10px] aspect-video md:h-[450px] w-full flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="border-[6px] border-green rounded-[6px] w-9 h-9" />
                    <span className="font-black text-[44px] tracking-[2px] text-black font-['DM_Sans']">
                      TASKUL
                    </span>
                  </div>
                </div>
              )}

              {/* Title + Meta */}
              <div className="flex flex-col gap-4">
                <h1 className="text-[26px] md:text-[38px] font-bold leading-[1.5] text-main-black">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 md:gap-[26px]">
                  <time className="text-sm md:text-base text-gray font-['DM_Sans']">
                    {post.date}
                  </time>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white rounded-[5px] shadow-[2px_2px_8px_rgba(0,0,0,0.08)] px-[10px] md:px-[13px] py-[3px] h-7 flex items-center gap-[7px] text-xs md:text-sm text-[#161616] whitespace-nowrap"
                      >
                        <span className="w-[5px] h-[5px] bg-green rounded-full" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ShareButtons title={post.title} slug={slug} />
                </div>
              </div>

              {/* Writer */}
              <div className="bg-white rounded-[5px] px-2.5 py-5 md:p-3 flex flex-col md:flex-row items-center md:items-start gap-2.5 md:gap-4">
                <div className="flex items-center gap-2.5 md:block w-full md:w-auto">
                  <div className="w-[70px] h-[70px] md:w-[84px] md:h-[84px] rounded-full border border-light-gray flex items-center justify-center shrink-0">
                    <div className="border-[7px] md:border-[8px] border-green rounded-[7px] md:rounded-[8px] w-10 md:w-12 h-10 md:h-12" />
                  </div>
                  <div className="flex flex-col gap-1 md:hidden">
                    <p className="text-sm font-bold text-main-black">{post.writer.role}</p>
                    <p className="text-xl font-bold text-main-black">{post.writer.name}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1 w-full">
                  <p className="hidden md:block text-sm font-bold text-main-black">
                    {post.writer.role}
                  </p>
                  <p className="hidden md:block text-xl font-bold text-main-black">
                    {post.writer.name}
                  </p>
                  <p className="text-sm text-gray">{post.writer.bio}</p>
                  <div className="flex items-center justify-between">
                    <a
                      href="https://app.taskul-ai.com/login?from=blog"
                      className="text-sm font-bold text-main-black"
                    >
                      ツールを試してみる
                    </a>
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

              {/* Table of Contents */}
              <TableOfContents headings={post.headings} />

              {/* Article Content */}
              <ArticleBody contentHtml={post.contentHtml} />
              <ChatAnimator />
            </div>

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <FAQ items={post.faq} />
            )}

            {/* CTA Banner */}
            <a
              href="https://app.taskul-ai.com/register"
              className="block rounded-[10px] overflow-hidden transition-transform hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
            >
              <img
                src="/column/images/cta-banner.png"
                alt="TASKUL - フリーランス向けAIタスク管理ツール 14日間無料"
                className="w-full h-auto"
              />
            </a>

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
                  <h2 className="text-[38px] md:text-[54px] font-bold text-main-black leading-[1.28]">
                    関連記事
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px_10px] md:gap-5">
                  {relatedPosts.map((rp) => (
                    <Link
                      key={rp.slug}
                      href={`/${rp.slug}`}
                      className="flex flex-col gap-[14px] group"
                    >
                      {rp.thumbnail ? (
                        <div className="bg-white rounded-[5px] md:rounded-[7px] aspect-video w-full overflow-hidden">
                          <img src={rp.thumbnail} alt={rp.title} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="bg-white rounded-[5px] md:rounded-[7px] aspect-video w-full flex items-center justify-center">
                          <div className="flex items-center gap-1">
                            <div className="border-[3px] border-green rounded-[3px] w-[18px] h-[18px]" />
                            <span className="font-black text-[22px] tracking-[1px] text-black font-['DM_Sans']">
                              TASKUL
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="flex flex-col gap-1 leading-[1.6]">
                        <p className="text-base md:text-lg font-bold text-main-black line-clamp-3 group-hover:text-green transition-colors">
                          {rp.title}
                        </p>
                        <p className="hidden md:block text-sm font-medium text-sub-gray">
                          {rp.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Prev/Next Navigation */}
            <PrevNextNav prevPost={prevPost} nextPost={nextPost} />

            {/* Navigation */}
            <div className="flex justify-center gap-[18px]">
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
                  一覧へ戻る
                </span>
              </Link>
              <a
                href="https://taskul-ai.com/"
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
              </a>
            </div>
          </article>

          {/* Sidebar - PC only on the right, SP below article */}
          <div className="hidden lg:block">
            <Sidebar
              headings={post.headings}
              popularPosts={allPosts.slice(0, 5)}
            />
          </div>
          <div className="lg:hidden w-full">
            <Sidebar
              headings={[]}
              popularPosts={allPosts.slice(0, 5)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
