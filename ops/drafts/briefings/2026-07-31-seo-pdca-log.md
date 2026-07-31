# SEO改修ログ · 2026-07-31

---

## ステップ1: PDCA期限チェック

本日（2026-07-31）時点。2026-07-30ログからの差分のみ記録。

| # | PDCA ID | 期限 | 目的 | 評価 |
|---|---------|------|------|------|
| 1 | b9eff224 | 2026-04-17 | 新記事3本公開+CTA改善 | ✅ 完了確認済み |
| 2 | b8276aba | 2026-04-18 | 未インデックス5記事GSCリクエスト | ✅ 完了確認済み |
| 3 | 74d9d889 | 2026-04-23 | SEO課題10件の一括改修 | ⚠️ open issues 18件残存（99日超過） |
| 4 | 3b5c0209 | 2026-05-07 | デザイナー記事公開 | ✅ 完了確認済み |
| 5 | d3f3d55f | 2026-05-10 | Slackタスク管理KW対策 | ⚠️ pos=61.4 改善未確認（82日超過） |
| 6 | 993c9552 | 2026-04-13 | サイトマップ再登録 | ✅ 効果あり（imp 2.6倍確認済み） |

**本日の変化なし**。7/30ログの評価を継続適用。

### 継続課題

- **#3**: column/ および category/ツール比較 の canonical・JSON-LD設定が未対応
- **#5**: `slack-task-management-integration`（pos=61.4）はfrontmatterのみでは改善困難。コンテンツ根本改修が必要（上位5記事分析 → 情報追加）

---

## ステップ2: SEO改修（2026-07-31実施）

### 選定ロジック

直近改修との重複を避け、朝ブリーフィングおよび `issues` 配列の priority・記事のポテンシャルから選定。

| 日付 | 記事 | 実施内容 |
|------|------|---------|
| 07-26 | notion-task-management-alternative | description改善 |
| 07-27 | html-2mb-seo-limit | description改善（PR #119）|
| 07-29 | task-management-tools-recommended | description改善（PR #126）|
| 07-30 | ai-task-management-tools | description改善（PR #129）|
| **07-31** | **multiple-projects-management** | **title/description/date改善（PR #132）** |

**選定記事**: `multiple-projects-management`

**選定理由**:
- スナップショット基準で position=7.1（1ページ目）にもかかわらず CTR=0%（impressions=8）
- 朝ブリーフィング（2026-07-31.md）で「要CTR改善（タイトル見直し候補）」として明示
- issues配列に「導入文の改善（AIEO）」severity:high が該当
- 直近5日間の改修対象と重複なし

### 実施内容

**変更ファイル**: `posts/multiple-projects-management.md`
**PR**: [#132](https://github.com/nishimiya-taskul/taskul-blog/pull/132)

```
title変更前（35字）:
"複数案件を同時に回すフリーランスの案件管理術｜抱えすぎてパンクする前に"

title変更後（32字）:
"フリーランスの複数案件管理｜パンクしない優先順位と受注判断の基準"

description変更前（91字）:
"フリーランスが複数案件を同時進行で回すための案件管理方法を解説。案件の優先順位づけ、スケジュール管理、クライアント対応の効率化まで、パンクを防ぐ具体的なノウハウを紹介します。"

description変更後（96字）:
"同時3〜5案件を抱えるフリーランスのための案件管理術。週40時間を基準にしたキャパ計算、案件断りのテンプレート、確認待ち管理の仕組みまで。抱えすぎてパンクする前に見直す3つの鉄則を解説します。"

date: 2026/03/26 → 2026/07/31
```

**改善ポイント**:
- **title**: 35字→32字（目安内）。主要KW「複数案件管理」を前半に配置。「優先順位と受注判断の基準」で具体性を明示
- **description**: 抽象表現を具体的数字・コンテンツ要素に置換。「3〜5案件」「週40時間」などFAQの情報を活用
- **date**: フレッシュネス信号更新（約4ヶ月ぶり）

### 効果測定スケジュール

| タイミング | 確認内容 |
|-----------|---------|
| 2週間後（2026-08-14） | Googleスニペットへの title/description 反映確認 |
| 1ヶ月後（2026-08-31） | CTR変化。目標: 0% → 3%以上（position 7.1基準の正常CTR） |

---

## 直近改修トラッキング（2026-07-31更新）

| 日付 | 記事 | 施策 | 測定日 |
|------|------|------|--------|
| 07-26 | notion-task-management-alternative | description改善（PR #117）| 8/9 スニペット / 8/26 CTR |
| 07-27 | html-2mb-seo-limit | description改善（PR #119）| **8/10 スニペット** / 8/27 CTR |
| 07-29 | task-management-tools-recommended | description改善（PR #126）| 8/12 スニペット / 8/29 CTR |
| 07-30 | ai-task-management-tools | description改善（PR #129）| 8/13 スニペット / 8/30 CTR |
| **07-31** | **multiple-projects-management** | **title+description改善（PR #132）** | **8/14 スニペット / 8/31 CTR** |

---

*自動生成 · ops/seo-pdca · 2026-07-31*
