import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "コラム | TASKUL - フリーランス専用AIタスク管理",
    template: "%s | TASKUL",
  },
  description:
    "フリーランス・クリエイターのためのタスク管理・案件管理ノウハウをお届け。TASKUL編集部が現場目線で解説します。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="https://taskul-ai.com/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="https://taskul-ai.com/images/logo-taskul.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W694HXC93R" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-W694HXC93R');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","w25jkykpji");`,
          }}
        />
      </head>
      <body className="bg-bg antialiased">{children}</body>
    </html>
  );
}
