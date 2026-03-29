import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/components/Header";

const logDir = path.join(process.cwd(), "seo-log");

function getLogEntries() {
  const files = fs.readdirSync(logDir).filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f));
  return files
    .sort((a, b) => (a > b ? -1 : 1))
    .map((file) => {
      const content = fs.readFileSync(path.join(logDir, file), "utf8");
      const date = file.replace(".md", "");

      const summaryMatch = content.match(/## 今日の作業サマリー\n([\s\S]*?)(?=\n## )/);
      const summary = summaryMatch ? summaryMatch[1].trim() : "";

      const tasks: string[] = [];
      const taskRegex = /### (.+)/g;
      let match;
      while ((match = taskRegex.exec(content)) !== null) {
        if (!match[1].startsWith("[") || match[1].includes("作業名")) continue;
        tasks.push(match[1]);
      }

      const statusRows: { article: string; kw: string; rank: string; action: string }[] = [];
      const tableRegex = /\| (.+?) \| .+? \| .+? \| (.+?) \| (.+?) \| .+? \| (.+?) \|/g;
      let row;
      while ((row = tableRegex.exec(content)) !== null) {
        if (row[1].includes("記事") || row[1].includes("---")) continue;
        statusRows.push({
          article: row[1].trim(),
          kw: row[2].trim(),
          rank: row[3].trim(),
          action: row[4].trim(),
        });
      }

      return { date, summary, tasks, statusRows };
    });
}

export default function SeoLogPage() {
  const entries = getLogEntries();

  return (
    <>
      <Header />
      <main className="pt-[100px] pb-32 bg-bg min-h-screen">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[7px] h-[7px] bg-green rounded-[1px]" />
              <span className="text-lg font-medium text-sub-gray font-['DM_Sans']">
                SEO Operation Log
              </span>
            </div>
            <h1 className="text-[42px] font-bold text-main-black leading-[1.28]">
              SEO運用ログ
            </h1>
            <p className="text-sub-gray mt-2">
              Claudeが実行した分析・判断・行動・結果の記録
            </p>
          </div>

          {/* Article Status Table */}
          {entries[0]?.statusRows.length > 0 && (
            <div className="bg-white rounded-[10px] p-6 mb-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <h2 className="text-xl font-bold text-main-black mb-4">
                記事ステータス
              </h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slightly-gray">
                    <th className="text-left py-3 px-2 font-semibold text-main-black">記事</th>
                    <th className="text-left py-3 px-2 font-semibold text-main-black">ターゲットKW</th>
                    <th className="text-center py-3 px-2 font-semibold text-main-black">順位</th>
                    <th className="text-left py-3 px-2 font-semibold text-main-black">次のアクション</th>
                  </tr>
                </thead>
                <tbody>
                  {entries[0].statusRows.map((row, i) => (
                    <tr key={i} className="border-b border-slightly-gray last:border-0">
                      <td className="py-3 px-2 text-main-black font-medium">{row.article}</td>
                      <td className="py-3 px-2 text-sub-gray">{row.kw}</td>
                      <td className="py-3 px-2 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                          row.rank === "未計測"
                            ? "bg-gray/10 text-gray"
                            : "bg-green/10 text-green"
                        }`}>
                          {row.rank}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-sub-gray text-xs">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Daily Logs */}
          <div className="flex flex-col gap-6">
            {entries.map((entry) => (
              <div
                key={entry.date}
                className="bg-white rounded-[10px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-green font-bold font-['DM_Sans'] text-lg">
                    {entry.date}
                  </span>
                </div>
                {entry.summary && (
                  <p className="text-main-black mb-4 leading-[1.6]">
                    {entry.summary}
                  </p>
                )}
                {entry.tasks.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tasks.map((task, i) => (
                      <span
                        key={i}
                        className="bg-bg text-sub-gray text-xs px-3 py-1.5 rounded-full"
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
