# SEO改修ログ · 2026-08-08

## ステップ1: PDCA期限チェック（効果検証）

今日（2026-08-08）時点で期限超過のPDCA一覧（status = "awaiting"）：

| PDCA目的 | 期限 | 超過日数 | 状態 |
|----------|------|---------|------|
| ブログ新記事3本公開+CTA改善 | 2026-04-17 | 113日超過 | awaiting |
| 未インデックス5記事のインデックスリクエスト | 2026-04-18 | 112日超過 | awaiting |
| SEO課題10件の一括改修 | 2026-04-23 | 107日超過 | awaiting |
| 新規記事公開: デザイナーのタスク管理術 | 2026-05-07 | 93日超過 | awaiting |
| Slackタスク管理KW対策 | 2026-05-10 | 90日超過 | awaiting |

### 効果検証（スナップショット 2026-05-13 基準）

| PDCA | 仮説 | スナップショット時点の結果 | 判定 |
|------|------|--------------------------|------|
| ブログ新記事3本公開 | CTA改善でCV率向上 | 対象記事掲載確認済み。impressions=0 のまま | 記事公開は完了。CV測定は GSC 更新待ち |
| 未インデックス5記事 | 2週間でインデックス完了 | 一部記事の impressions=0 継続 | 一部成功。全件検証不可（データ不足） |
| SEO課題10件の一括改修 | canonical・FAQ追加で順位・CTR改善 | カテゴリ・トップページ側の canonical は issues に open 残存 | 部分成功。継続課題あり |
| デザイナー記事公開 | 30日以内にインデックス→3ヶ月で20位以内 | スナップショット時点で articles 配列に未掲載 | インデックス状況不明（データ不足） |
| Slackタスク管理KW対策 | AIEO対応リライトで順位向上 | slack-task-management-integration: 61.4位・imp 106・clicks 0。目標未達 | 未達。コンテンツ強化が急務 |

**共通課題**: seo-snapshot.json が 2026-05-13 以降未更新（約87日ラグ）。正確な効果測定には seo-engine API からのデータ再取得が必要。

---

## ステップ2: SEO改修実施

**対象記事**: `task-management-apps-free`（個人向けタスク管理アプリ無料7選｜選び方とおすすめ徹底比較）

**選定根拠**:
- seo-snapshot issues より: fix_priority C、position 48.1、impressions 25、CTR 0%
- 前日（08-07）まで追跡リストに未掲載の未改修記事
- description が「〜を解説します。あなたに合う1つが見つかります。」という予告・受け身型で断定性が低い

**変更内容**:

| 項目 | 変更前 | 変更後 |
|------|--------|--------|
| description | 個人で使える無料のタスク管理アプリ7つを徹底比較。iPhone・Androidで使える定番アプリの選び方、機能差、続けやすさを実体験ベースで解説。あなたに合う1つが見つかります。（89字） | 無料タスク管理アプリを選び間違えると続きません。iPhone・Android両対応の7アプリを機能差・続けやすさで実体験比較し、あなたのタスク量と使い方に合う1本が決まります。（88字） |
| date | 2026/04/07 | 2026/08/08 |

**改善ポイント**:
- 「〜を解説します」（説明予告型）→ 「選び間違えると続きません。1本が決まります」（断定型）に変更
- 読者の問題意識（選び間違い→続かない）を冒頭で提示し、解決を示す
- 日付更新でコンテンツ鮮度をGoogleに伝える

**PR**: [#159](https://github.com/nishimiya-taskul/taskul-blog/pull/159)
**ステータス**: CI グリーン（check-no-deletions: success / Vercel: DEPLOYED）。マージ待ち。
**コミット**: bfed348

**測定スケジュール**:
- **2026-08-18**: Googleスニペット更新確認（descriptionが新版に切り替わっているか）
- **2026-09-08**: CTR・impressions比較（改修前ベースライン: CTR 0%、pos 48.1）

---

## 直近改修トラッキング（更新）

| 日付 | 記事 | 施策 | 測定日 |
|------|------|------|--------|
| 07-26 | notion-task-management-alternative | description改善（PR #117）| **8/9 スニペット** / 8/26 CTR |
| 07-27 | html-2mb-seo-limit | description改善（PR #119）| **8/10 スニペット** / 8/27 CTR |
| 07-29 | task-management-tools-recommended | description改善（PR #126）| **8/12 スニペット** / 8/29 CTR |
| 07-30 | ai-task-management-tools | description改善（PR #129）| **8/13 スニペット** / 8/30 CTR |
| 08-01 | creator-task-management | description改善（PR #136）| **8/15 スニペット** / 9/1 CTR |
| 08-02 | html-2mb-seo-limit | description再改善・断定文化（PR #139）| **8/16 スニペット** / 9/2 CTR |
| 08-03 | web-production-project-management-template | description断定文化・107文字（PR #143）| **8/17 スニペット** / 9/3 CTR |
| 08-07 | multiple-projects-management | description断定文化・90文字（PR #156）| **8/17 スニペット** / 9/7 CTR |
| **08-08** | **task-management-apps-free** | **description断定文化・88文字（PR #159）** | **8/18 スニペット / 9/8 CTR** |

---

## 次のアクション候補

1. **slack-task-management-integration コンテンツ刷新** — 61.4位・imp最多（106）・clicks 0。PDCA 90日超過。frontmatterより本文強化（上位5記事分析→独自情報追加）が必要。次の大型タスク。
2. **seo-snapshot.json 更新** — 87日超ラグ継続中。seo-engine API から最新データ取得が急務。PDCAの正確な効果測定が不可能な状態。
3. **重複タイトル解消（impact_score: 60）** — 22ページに重複タイトル。各記事タイトルを固有化してカニバリを防ぐ。

---

*生成日: 2026-08-08 · スナップショット基準日: 2026-05-13*
