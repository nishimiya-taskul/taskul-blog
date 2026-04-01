import type { Metadata } from "next";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import "../../article.css";

export const metadata: Metadata = {
  title: "ツール比較の記事一覧",
  description: "ツール比較に関するコラム記事一覧。フリーランス・クリエイター向けのノウハウをお届けします。",
};

export default function Page() {
  return <CategoryPageContent categoryName="ツール比較" />;
}
