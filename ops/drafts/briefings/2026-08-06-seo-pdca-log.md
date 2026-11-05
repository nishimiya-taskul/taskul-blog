# SEO改修・PDCAログ · 2026-08-06

**実行モード**: 自動運用（スケジュール実行）
**データソース**: ops/data/seo-snapshot.json（エクスポート日: 2026-05-13）

---

## ステップ1: PDCA期限チェック

seo-snapshot.json の pdca 配列を確認。`status: "awaiting"` かつ期限到来の件数: **5件**
（すべて2026-04-13〜2026-05-10が期限。本日2026-08-06時点で87〜111日超過）

| PDCA ID | 目的 | measure_due_date | 超過日数 | 所感 |
|---------|------|-----------------|---------|------|
| d3f3d55f | Slackタスク管理KW対策（リライト＋新規記事） | 2026-05-10 | +87日 | slack-task-management-integrationの順位は61.4位（snapshots時点）で未改善。新規記事slack-task-management-methodはposition 0で未インデックス状態 |
| 74d9d889 | SEO課題10件の一括改修 | 2026-04-23 | +105日 | canonical追加・FAQSchema等の施策後、各記事SEOスコアは96〜98点台に改善。効果は一定あり |
| 3b5c0209 | 新規記事「デザイナーのタスク管理術」公開 | 2026-05-07 | +91日 | designer-task-management.md確認済み。インデックス状況は不明（スナップショット時点ではposition 0）|
| b9eff224 | 新記事3本公開＋CTA・フッター改善 | 2026-04-17 | +111日 | 対象3記事（freelance-invoice-missed-prevention, web-production-project-management-template等）はSEOスコア96点で公開済み確認 |
| b8276aba | 未インデックス5記事のGSCリクエスト | 2026-04-18 | +110日 | web-production-project-management-templateはposition 19.8でインデックス確認。freelance-task-managementはposition 0でインデックス未確認 |

**備考**: seo-engine APIへのアクセスなし。スナップショットはエクスポートから84日経過しており、現在の順位は計測不可。
GSCでの手動確認を推奨。

---

## ステップ2: SEO改修実施

### 対象issue選定

issues配列から最優先課題を1件選定。

**選定理由**:
- impressions 25 / position 48.1 の `task-management-apps-free/` に対する AIEO診断 issue `8a4a8e6c`
- severity: high / category: aieo / 「導入文に端的な回答がない」
- 他の上位issue（fix_priority B以上）は直近で更新済み（html-2mb-seo-limit: 2026/08/02、web-production-project-management-template: 2026/08/03）
- task-management-apps-free の date は2026/04/07のまま未更新 → 対応余地あり

### 変更内容（frontmatterのみ）

**ファイル**: `posts/task-management-apps-free.md`

| フィールド | 変更前 | 変更後 |
|-----------|-------|-------|
| description | 個人で使える無料のタスク管理アプリ7つを徹底比較。iPhone・Androidで使える定番アプリの選び方、機能差、続けやすさを実体験ベースで解説。あなたに合う1つが見つかります。（89字） | 個人向け無料タスク管理アプリは、Todoist・Notion・Google ToDoなど7種が定番です。機能差・続けやすさをiPhone・Android両対応で徹底比較し、あなたに合う1つを解説します。（101字） |
| date | 2026/04/07 | 2026/08/06 |

**改善根拠**:
- AIEOのfix指示「冒頭で『〇〇は、△△です。』と端的に結論を述べてから詳細を補足」に対応
- 具体的なアプリ名（Todoist・Notion・Google ToDo）を先頭に配置し、AI引用適性を向上
- 文字数: 89字→101字（120字上限内）

### Git操作

```
branch: seo-fix/task-management-apps-free-20260806
PR: https://github.com/nishimiya-taskul/taskul-blog/pull/153
Vercel: Ready（プレビューデプロイ成功確認済み）
```

---

## 次回アクション推奨

1. **PDCA計測**: seo-engine APIまたはGSCで現在の順位を確認し、5件のawaitingPDCAを計測・クローズする
2. **Slack記事の強化**: slack-task-management-integration（impressions 106、position 61.4）はコンテンツ根本改善が必要（issue: 02925054）
3. **インデックス確認**: freelance-task-management, slack-task-management-method のGSCインデックス状況確認
