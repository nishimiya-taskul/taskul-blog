import type { Metadata } from "next";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import "../../article.css";

export const metadata: Metadata = {
  title: "働き方の記事一覧",
  description: "働き方に関するコラム記事一覧。フリーランス・クリエイター向けのノウハウをお届けします。",
};

export default function Page() {
  return <CategoryPageContent categoryName="働き方" />;
}
