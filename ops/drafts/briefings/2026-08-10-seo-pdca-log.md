# SEO改修ログ · 2026-08-10

## ステップ1: PDCA期限チェック（効果検証）

今日（2026-08-10）時点で期限超過のPDCA一覧（status = "awaiting"）：

| PDCA目的 | 期限 | 超過日数 | 状態 |
|----------|------|---------|------|
| ブログ新記事3本公開+CTA改善 | 2026-04-17 | 115日超過 | awaiting |
| 未インデックス5記事のインデックスリクエスト | 2026-04-18 | 114日超過 | awaiting |
| SEO課題10件の一括改修 | 2026-04-23 | 109日超過 | awaiting |
| 新規記事公開: デザイナーのタスク管理術 | 2026-05-07 | 95日超過 | awaiting |
| Slackタスク管理KW対策 | 2026-05-10 | 92日超過 | awaiting |

### 効果検証（スナップショット 2026-05-13 基準 · 前日ログと変化なし）

| PDCA | 仮説 | スナップショット時点の結果 | 判定 |
|------|------|--------------------------|------|
| ブログ新記事3本公開 | CTA改善でCV率向上 | 対象記事は公開確認済み。impressions=0 のまま | 記事公開は完了。CV測定は GSC 更新待ち |
| 未インデックス5記事 | 2週間でインデックス完了 | 一部記事の impressions=0 継続 | 一部成功。全件検証不可（データ不足） |
| SEO課題10件の一括改修 | canonical・FAQ追加で順位・CTR改善 | カテゴリ・トップページ側の canonical は issues に open 残存 | 部分成功。継続課題あり |
| デザイナー記事公開 | 30日以内にインデックス→3ヶ月で20位以内 | スナップショット時点で articles 配列に未掲載 | インデックス状況不明（データ不足） |
| Slackタスク管理KW対策 | AIEO対応リライトで順位向上 | slack-task-management-integration: 61.4位・imp 106・clicks 0。目標未達 | 未達。コンテンツ強化が急務 |

**共通課題**: seo-snapshot.json が 2026-05-13 以降未更新（約89日ラグ）。正確な効果測定には seo-engine API からのデータ再取得が必要。

---

## ステップ2: SEO改修実施

**対象記事**: `task-management-apps-free`（タスク管理アプリ無料7選）

**選定根拠**:
- seo-snapshot.json の issues 配列から最優先記事課題として選定（fix_started_at=null、未着手）
- 順位 48.1位・impressions 25・clicks 0（CTR 0%）
- タイトルが修飾語「個人向け」始まりで主要KW「タスク管理アプリ無料」が4文字目以降に後退
- CLAUDE.md 判断基準: 表示あり・CTR 低い（2%以下）→ タイトルとdescription変更

**変更内容**:

| 項目 | 変更前 | 変更後 |
|------|--------|--------|
| title | 個人向けタスク管理アプリ無料7選｜選び方とおすすめ徹底比較（30文字） | タスク管理アプリ無料7選｜個人・フリーランス向け比較と選び方（31文字） |
| description | 個人で使える無料のタスク管理アプリ7つを徹底比較。…（78文字） | 無料タスク管理アプリ7選を比較。「選んでも続かない」失敗を防ぐ選び方から…（76文字） |
| date | 2026/04/07 | 2026/08/10 |

**改善ポイント**:
- 「個人向け（修飾語）」始まり → 主要KW「タスク管理アプリ無料」を先頭に移動（CLAUDE.md準拠）
- 「個人で使える〜」（説明型）→「「続かない」失敗を防ぐ」（課題フック）+ 断定型に変更
- KW「無料タスク管理アプリ7選」をdescription冒頭に配置（AIEO引用適性向上）

**PR**: [#166](https://github.com/nishimiya-taskul/taskul-blog/pull/166)
**ステータス**: マージ待ち（CI確認中）

**測定スケジュール**:
- **2026-08-19**: Googleスニペット更新確認（titleが新版に切り替わっているか）
- **2026-09-10**: CTR・impressions比較（改修前ベースライン: CTR 0%、pos 48.1位）

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
| 08-03 | web-production-project-management-template | description断定文化（PR #143）| **8/17 スニペット** / 9/3 CTR |
| 08-07 | multiple-projects-management | description断定文化・90文字（PR #156）| **8/17 スニペット** / 9/7 CTR |
| **08-10** | **task-management-apps-free** | **titleKW前出し・description改善・76文字（PR #166）** | **8/19 スニペット / 9/10 CTR** |

---

## 次のアクション候補

1. **slack-task-management-integration コンテンツ刷新** — 61.4位・imp最多（106）・clicks 0。PDCA 92日超過。frontmatterより本文の構成見直しが必要（上位5記事分析→独自情報追加）。
2. **seo-snapshot.json 更新** — 89日超ラグ継続中。seo-engine API からの最新データ取得が急務。PDCAの正確な効果測定が不可能な状態。
3. **重複タイトル解消（impact_score: 60）** — 22ページに重複タイトル検出。各記事タイトルを固有化してカニバリを防ぐ。

---

*生成日: 2026-08-10 · スナップショット基準日: 2026-05-13*
