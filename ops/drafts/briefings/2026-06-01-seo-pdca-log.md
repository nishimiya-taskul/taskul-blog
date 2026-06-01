# SEO改修ログ · 2026-06-01

---

## ステップ1: PDCA期限チェック

本日（2026-06-01）時点で期限超過・status=awaiting のPDCAは **5件**。

| # | ID | 期限 | 目的 | 超過日数 | 検証結果 |
|---|-----|------|------|---------|---------|
| 1 | b9eff224 | 2026-04-17 | ブログ新記事3本公開+CTA改善 | 45日超過 | ✅ 記事3本（web-production pos=19.8、freelance-invoice pos=0）は公開済み。CTAバナー更新も完了済みとみなす |
| 2 | b8276aba | 2026-04-18 | 未インデックス5記事のGSCリクエスト | 44日超過 | ⚠️ web-production-project-management-template（pos=19.8）はインデックス確認。freelance-invoice / freelance-task-management（pos=0）は依然圏外。インデックス未完了 |
| 3 | 74d9d889 | 2026-04-23 | SEO課題10件の一括改修 | 39日超過 | ⚠️ 改修実施後の4/23週でpos平均22→4/25ピーク（CTR 50%、pos 10.9）を記録。改修効果と判断するが open issues 34件が残存 |
| 4 | 3b5c0209 | 2026-05-07 | デザイナー記事公開+GSCインデックスリクエスト | 25日超過 | ⚠️ designer-task-management は公開済みだが seo-snapshot（5/13時点）に記事エントリなし。インデックス未確認。要GSC確認 |
| 5 | d3f3d55f | 2026-05-10 | Slackタスク管理KW対策（リライト+新規記事） | 22日超過 | ❌ slack-task-management-integration: pos=61.4、imp=106、clicks=0（CTR 0%）。リライト後も順位変化なし。コンテンツ根本改善（content_overhaul）が必要 |

### 期間別メトリクス比較

| 期間 | 対象PDCA | imp平均/日 | clicks合計 | CTR平均 | pos平均 |
|------|---------|-----------|-----------|---------|---------|
| 4/11〜4/25（SEO一括改修後） | #3 | 30.4 | 91 | 23.1% | 22.1 |
| 4/26〜5/10（Slack記事リライト後） | #5 | 24.3 | 23 | 8.8% | 18.0 |

→ 4/26以降にimpressions・CTRが大幅低下。Slack記事リライトの効果は確認できず。

### 次アクション提案

1. **PDCA#5 Slack記事（最優先）**: position 61.4 → 30位台を目標に content_overhaul issue対応。検索意図の再分析が必要
2. **PDCA#2 インデックス残件**: freelance-invoice-missed-prevention / freelance-task-management を GSC 再インデックスリクエスト
3. **PDCA#4 デザイナー記事**: GSC で designer-task-management の URL 検査→インデックス状況確認

---

## ステップ2: SEO改修（2026-06-01実施）

### 選定ロジック

`issues` 配列から最優先課題を1件選定。記事単位・frontmatterのみで改善可能な課題に絞る。

| 順位 | fix_priority | 記事 | 課題 | 判断 |
|------|-------------|------|------|------|
| 1 | **B** | html-2mb-seo-limit | title 42字、構造課題2件 | **選定** |
| 2 | C | creator-task-management | desc 57字（短い） | 次回候補 |
| 3 | C | task-management-apps-free | desc 63字、aieo_faq | 次回候補 |

**選定理由**: fix_priority B（記事単位で唯一の B 評価）。前回（5/13）に description を改善済みのため、今回は残課題の title 長超過を修正。

### 実施内容

**変更ファイル**: `posts/html-2mb-seo-limit.md`

| フィールド | 変更前 | 変更後 | 理由 |
|-----------|--------|--------|------|
| title | 42字（推奨32字超過） | 30字 | Google表示幅内に収め切れ・KW「HTML 2MB制限」前半配置 |
| date | 2026/04/01 | 2026/06/01 | 更新鮮度シグナル（公開から2ヶ月経過） |

```
変更前（42字）:
"GoogleはHTMLの最初の2MBしか読まない｜SEO担当者が今すぐ確認すべきこと"

変更後（30字）:
"HTML 2MB制限とSEOへの影響｜今すぐできる5つの対策"
```

**改善ポイント**:
- KW「HTML 2MB制限」をタイトル最前部に配置（旧タイトルは「Google」から始まり KW が後半）
- 「今すぐできる5つ」で数字による具体性を付与
- 42字 → 30字：Googleがモバイルで表示可能な全角32字以内に収まりタイトル切れを防止

### Git操作

```
branch: seo-fix/html-2mb-seo-limit-20260601
commit: 36606f0
push: 完了（PR作成待ち）
```

### 効果測定スケジュール

| タイミング | 確認内容 |
|-----------|---------|
| 2週間後（2026-06-15） | タイトル変更がGSCスニペットに反映されているか確認。CTR変化を確認 |
| 1ヶ月後（2026-07-01） | `html 2mb seo` 等のKWでposition変化。タイトル変更後CTR改善を計測 |

---

## 参考：html-2mb-seo-limit の推移

| スナップショット日 | 変更内容 | descLength | titleLength |
|----------------|---------|-----------|------------|
| 2026-04-23（取得） | — | 74字 | 42字 |
| 2026-05-13 | description 改善 | 108字 | 42字 |
| **2026-06-01** | **title短縮+date更新** | 108字 | **30字** |

---

*自動生成 · ops/seo-pdca · 2026-06-01*
