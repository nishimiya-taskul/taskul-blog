# SEO改修ログ · 2026-10-06

## ステップ1: PDCA期限チェック

seo-snapshot.json（exported: 2026-05-13）の pdca 配列を確認。

| ID | ステータス | due_date | 内容 |
|---|---|---|---|
| d3f3d55f | awaiting | なし | slack-task-management-integration リライト |
| 74d9d889 | awaiting | なし | taskul-lp H1タグ追加等（別リポジトリ） |
| 3b5c0209 | awaiting | なし | 記事公開+GSCインデックスリクエスト |
| 993c9552 | measured | なし | GSCサイトマップ再送信（完了済み） |
| b9eff224 | awaiting | なし | 複数記事公開・CTAバナー更新 |
| b8276aba | awaiting | なし | freelance-task-management等公開 |

**判定**: due_dateが設定されているPDCAなし。期限到来案件ゼロ。

---

## ステップ2: SEO改修

### 対象記事
`posts/creator-estimate-work-hours.md`

### 選定理由
seo-snapshot.json の issues 配列には「重複したタイトルが22ページ」「description不足」等の課題が記録されている。全記事をスキャンした結果、`creator-estimate-work-hours.md` がタイトル33字（ガイドライン上限32字超過）かつdescription75字（目標80〜120字未満）の2点でfrontmatter課題が最も明確だった。

### 変更内容

**変更前:**
```
title: "クリエイターの工数計算テンプレート｜安請け合いで損しない見積もり術"  # 33字
description: "デザイナー・動画編集者向けの工数計算テンプレート付き。見積もりで安請け合いして損しないための実践ガイド。時間単価の出し方からバッファの取り方まで解説。"  # 75字
```

**変更後:**
```
title: "クリエイター工数計算テンプレート｜安請け合いで損しない見積もり術"  # 32字
description: "デザイナー・動画編集者向けの工数計算テンプレート付き。作業を工程別に細分化し見積もり精度を高める方法を解説。時間単価の算出式・バッファ設定の目安・安請け合いを防ぐチェックリストまで収録しています。"  # 98字
```

### PR
https://github.com/nishimiya-taskul/taskul-blog/pull/354

---

## 補足: スナップショット課題の現状

seo-snapshot.jsonは2026-05-13時点のデータ（約5ヶ月前）。主要課題の現状:

| 課題 | 旧状態 | 現状 |
|---|---|---|
| 重複タイトル22ページ | 問題あり | 解消済み（全39記事にユニークタイトル確認） |
| FAQスキーマ未設定 | 多数 | 主要記事はFAQ追加済み |
| descLength不足 | 複数記事 | 主要記事は改善済み。残課題を本日対応 |

*読了 1 分*
