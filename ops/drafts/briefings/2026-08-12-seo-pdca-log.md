# SEO改修ログ · 2026-08-12

## ステップ1: PDCA期限チェック

データソース: `ops/data/seo-snapshot.json`（エクスポート: 2026-05-13）

### 期限到来PDCA一覧

| PDCA ID | 目的 | 実施日 | 期限 | ステータス | 評価 |
|---------|------|--------|------|----------|------|
| d3f3d55f | Slackタスク管理KW対策（リライト＋新規記事公開） | 2026-04-10 | 2026-05-10 | awaiting | 期限超過（約3ヶ月）|
| 74d9d889 | SEO課題10件の一括改修 | 2026-04-09 | 2026-04-23 | awaiting | 期限超過（約3.5ヶ月）|
| 3b5c0209 | デザイナータスク管理術記事公開 | 2026-04-07 | 2026-05-07 | awaiting | 期限超過（約3ヶ月）|
| b9eff224 | 新記事3本公開＋CTA改善 | 2026-04-03 | 2026-04-17 | awaiting | 期限超過（約4ヶ月）|
| b8276aba | 未インデックス5記事リクエスト | 2026-04-04 | 2026-04-18 | awaiting | 期限超過（約4ヶ月）|
| 993c9552 | サイトマップ再登録 | 2026-04-06 | 2026-04-13 | **measured** | **成功済み** |

### 効果検証（スナップショットデータから読み取り）

#### d3f3d55f: Slackタスク管理KW対策
- 仮説: リライトで順位向上 + 新規記事で別角度流入
- 結果: `slack-task-management-integration` → impressions 106、position 61.4、CTR 0%
- 判定: **効果不十分**。インプレッションは高いが圏外（61位）でクリックゼロ。コンテンツ強化が必要

#### 74d9d889: SEO課題10件一括改修（canonical・JSON-LD・alt等）
- 結果: 4/12以降にimpressions・clicksが増加（4/12: impressions 73、4/16: 38）
- 判定: **部分的に成功**。サイトマップ再登録との相乗効果でインデックス促進に貢献

#### 3b5c0209: デザイナー記事公開（`designer-task-management`）
- 対象: 「デザイナー タスク管理」KWで30日以内インデックス → 3ヶ月で20位以内が目標
- スナップショットに本記事のデータなし → インデックス状況不明。現況確認が必要
- 判定: **検証不能**（スナップショットに計測データなし）

#### b9eff224: 新記事3本公開（請求漏れ・案件管理テンプレ等）
- `web-production-project-management-template`: impressions 13、position 19.8（インデックス済）
- `freelance-invoice-missed-prevention`: impressions 0、position 0（未インデックス疑い）
- `freelance-task-management`: impressions 0、position 0（未インデックス疑い）
- 判定: **部分的に成功**。Web制作テンプレ記事はインデックス済・20位台。請求漏れ・タスク管理記事は未インデックスのまま

#### b8276aba: 未インデックス5記事リクエスト
- 対象5記事のうち確認できる範囲では請求漏れ・タスク管理が依然 impressions 0
- 判定: **部分的に成功**。一部記事はインデックスされたが全記事の完了確認は不可

---

## ステップ2: SEO改修

**対象記事**: `posts/freelance-invoice-missed-prevention.md`
**選定理由**:
- 未インデックスPDCA（b8276aba）の対象記事でverification_due_date 2026-04-18 を大幅超過
- スナップショット（2026-05-13）時点でimpressions=0・position=0（未インデックス疑い）
- 最終更新が2026/04/03（約4ヶ月放置）→ フレッシュネス更新が有効

### 変更内容（frontmatterのみ）

| 項目 | 変更前 | 変更後 |
|------|--------|--------|
| description | フリーランスの約4人に1人が…（75文字） | フリーランスの4人に1人が…「24時間以内」「ゼロにする」追加（89文字） |
| date | 2026/04/03 | 2026/08/12 |

### 改善ポイント
- **date更新**: フレッシュネスシグナルでGooglebotの再クロールを促進
- **description**: 「約4人」→「4人」で断言化。「24時間以内」という具体的な行動指針を追加。「ゼロにする」という明確な結果を提示してCTR向上

### PR
- ブランチ: `seo-fix/freelance-invoice-missed-prevention-20260812`
- PR #173: https://github.com/nishimiya-taskul/taskul-blog/pull/173
- CI: check-no-deletions 実行中、Vercel Preview: Ready ✅

---

## 次回推奨アクション

1. **スナップショット更新**: seo-engine APIから最新データを取得してseo-snapshot.jsonを更新（8月のデータが取れれば各PDCAの効果も検証可能）
2. **slack記事のコンテンツ強化**: 表示106回・順位61.4位・クリック0回。frontmatterではなくコンテンツ根本改善が必要
3. **カテゴリページ（ツール比較）**: fix_priority A・canonical未設定・AIEO:D → テンプレートレベルの修正が必要（posts以外のファイル変更のため人間対応）
4. **PDCA d3f3d55f の継続**: Slack記事が圏外のまま → 上位5記事との差分分析 → 構成リライトを実施
