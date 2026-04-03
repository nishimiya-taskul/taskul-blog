import type { Metadata } from "next";
import { CategoryPageContent } from "@/components/CategoryPageContent";
import "../../article.css";

export const metadata: Metadata = {
  title: "タスク管理の記事一覧",
  description: "タスク管理に関するコラム記事一覧。フリーランス・クリエイター向けのノウハウをお届けします。",
};

export default function Page() {
  return <CategoryPageContent categoryName="タスク管理" />;
}
