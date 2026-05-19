# SEO改修ログ · 2026-05-19

---

## ステップ1: PDCA期限チェック

本日（2026-05-19）時点で期限到来・statusがawaitingのPDCAは**5件**。
スナップショット（exported_at: 2026-05-13）から定性評価を実施。

| # | 期限 | 目的 | 超過日数 | 評価 |
|---|------|------|---------|------|
| 1 | 2026-04-17 | ブログ新記事3本公開+CTA改善 | 32日超過 | ✅ 記事は公開済み（freelance-estimate / invoice / web-production）。効果計測期間終了 |
| 2 | 2026-04-18 | 未インデックス5記事のGSCリクエスト | 31日超過 | ⚠️ web-production pos=5.2（大幅改善）。freelance-estimate / illustrator-project は引き続きposデータなし |
| 3 | 2026-04-23 | SEO課題10件の一括改修 | 26日超過 | ⚠️ issuesが34件残存。canonical・JSON-LD未対応のopen issueが継続 |
| 4 | 2026-05-07 | デザイナー記事公開 | 12日超過 | ⚠️ designer-task-management は公開済み。GSCデータには未登場（インデックス待ちの可能性） |
| 5 | 2026-05-10 | Slackタスク管理KW対策（リライト+新規記事） | 9日超過 | ❌ slack関連KW pos=60-70台（impr=29+25+24=78、clicks=0）。リライト効果未確認。content_overhaul 対応が必要 |

### 評価サマリー

- **成果あり**: PDCA#2 → web-production pos=5.2（top5入り。PDCA目標を達成）
- **部分成果**: PDCA#1（記事公開完了、CTA改善は定量効果不明）
- **効果不明**: PDCA#3（サイト全体canonical課題は継続中）
- **インデックス待ち**: PDCA#4（デザイナー記事 / illustrator記事）
- **効果なし**: PDCA#5（Slack記事 pos=60-70、GSCクリック=0のまま）

### 特記事項

- PDCA#2の web-production-project-management-template が「web 制作 案件 管理」KWでpos=5.2を達成。ただしCTR=0%（impr=5、clicks=0）という状態が発生。本日のSEO改修でtitle/description改善を実施（後述）。
- Slack系の課題（PDCA#5）は frontmatterの改善だけでは解決困難。コンテンツ根本改善（content_overhaul）が必要。次サイクルで検討。

---

## ステップ2: SEO改修（2026-05-19実施）

### 選定ロジック

`issues` 配列 impact_score 順 → 記事単位で対応可能かつ frontmatter のみで改善できる最優先課題を選定。

| 順位 | score | issue | 判断 |
|------|-------|-------|------|
| 1 | 65 | 平均順位が10位以下（サイト全体） | テンプレ/コンテンツ対応が必要 → スキップ |
| 2 | 60 | 重複タイトル22ページ | カテゴリ・ページネーションのテンプレ問題 → スキップ |
| 3 | 0 | aieo_direct_answer（web-production-project-management-template） | **frontmatter改善可能 + GSCデータが根拠あり → 選定** |

**選定記事**: `web-production-project-management-template`  
**選定理由**: 
- 「web 制作 案件 管理」KWでpos=5.2（top5！）にもかかわらずCTR=0%（impr=5 / clicks=0）
- CLAUDE.md「表示回数多い + CTR低い（2%以下）→ タイトルとdescriptionを変更」に該当
- PDCA#2の成果記事であり、フォローアップとして最適
- aieo_direct_answer（高重要度）issue がある → description改善でAIEO対応も同時達成

### 実施内容

**変更ファイル**: `posts/web-production-project-management-template.md`  
**変更フィールド**: `title` / `description` / `date`

```
変更前:
title: "Web制作の案件管理テンプレート｜抜け漏れゼロの項目設計と運用術"
description: "Web制作の案件管理に必要なテンプレート項目と運用方法を解説。エクセル・スプレッドシートの限界を超え、AIで依頼文からタスクを自動生成する方法まで紹介します。"
date: "2026/04/03"

変更後:
title: "Web制作の案件管理テンプレート｜必須8項目と抜け漏れゼロの運用術"
description: "Web制作の案件管理に必要なテンプレート項目は最低8つ。企画〜納品を抜け漏れゼロで管理する運用フローと、Excel・スプレッドシートから専用ツールへの移行タイミングも解説。"
date: "2026/05/19"
```

**改善ポイント**:
- title に「必須8項目」を追加 → 具体的数字でクリック意欲向上
- description を「必要なテンプレート項目は最低8つ」と直接回答形式に変更（AIEO対応）
- 「Excel・スプレッドシートから専用ツールへの移行タイミング」を明記 → 比較検討層にリーチ
- date を 2026/05/19 に更新（鮮度シグナル）

### Git操作

```
branch: seo-fix/web-production-project-management-template-20260519
commit: ca07197
PR: 作成済み（マージ待ち）
```

### 効果測定スケジュール

| タイミング | 確認内容 |
|-----------|---------|
| 2週間後（2026-06-02） | Googleスニペットの変更反映確認。CTR変化（0% → 目標5%以上） |
| 1ヶ月後（2026-06-19） | 「web 制作 案件 管理」KW の clicks・CTR変化。pos 5.2維持＋clicks獲得を確認 |

---

*自動生成 · ops/seo-pdca · 2026-05-19*
