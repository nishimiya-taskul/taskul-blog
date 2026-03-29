import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "コラム | TASKUL - フリーランス専用AIタスク管理",
    template: "%s | TASKUL コラム",
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
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg antialiased">{children}</body>
    </html>
  );
}
