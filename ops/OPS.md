# TASKUL Blog Ops — 自律運用ガイド

このファイルは TASKUL Blog の自動運用タスクが参照する共通コンテキスト。

---

## 0. 役割

TASKUL Blog（taskul-ai.com/column/）の SEO パフォーマンスを自動監視し、ブリーフィング・レビュー・レポートを自動生成する。

- **サイト**: https://taskul-ai.com/column/
- **目的**: SEO集客 → TASKUL無料登録CV
- **ターゲット**: フリーランス・クリエイター（Webデザイナー、イラストレーター、動画クリエイター）
- **サブターゲット**: 制作会社、広告代理店

---

## 1. 自動運用サイクル

### 毎朝（平日）
1. seo-engine API からデータ取得・異常検知
2. ブリーフィング生成 → `ops/drafts/briefings/YYYY-MM-DD.md`
3. 完了後 git push

### 毎週金曜
1. 週次KPIトレンド分析
2. 週次ブリーフ生成 → `ops/drafts/reports/weekly-YYYY-WW.md`
3. 次の記事候補・改善候補を提案
4. 完了後 git push

### 毎月初
1. 月次レポート生成 → `ops/drafts/reports/YYYY-MM.md`
2. 記事パフォーマンスランキング
3. 次月の記事戦略提案
4. 完了後 git push

---

## 2. データアクセス

### seo-engine API
- siteId: `29f632b8-dde4-415e-94da-0f6df802d549`
- 本番URL: `https://seo-engine-nishimiya-7712s-projects.vercel.app`

| 用途 | エンドポイント |
| --- | --- |
| ブリーフィング | `GET /api/briefing?siteId=29f632b8-...` |
| 異常検知 | `GET /api/anomaly?siteId=...` |
| 優先行動 | `GET /api/opportunity?siteId=...` |
| ページ一覧 | `GET /api/pages?siteId=...&days=30` |
| 日次メトリクス | `GET /api/metrics?siteId=...&days=30` |
| PDCA | `GET /api/pdca?siteId=...&due=true` |
| 課題 | `GET /api/issues?siteId=...&status=open` |
| 期間比較 | `GET /api/compare?siteId=...&startA=...&endA=...&startB=...&endB=...` |

---

## 3. ブリーフィングフォーマット

```markdown
# 朝ブリーフィング · YYYY-MM-DD

**ステータス**: 平常 / 注意 / 要対応

## 今日のアクション
1. [最優先]
2. [次]

## 数値サマリー（昨日 vs 前日）
| 指標 | 昨日 | 前日比 |
| --- | ---: | --- |
| クリック | ... | ... |
| 表示 | ... | ... |
| CTR | ... | ... |
| 平均順位 | ... | ... |

## 異常検知
（なし or 異常項目）

## 注目記事
（上昇・下降が顕著な記事）

*読了 2 分*
```

---

## 4. 品質ルール

- 数字は seo-engine の一次データからのみ引く
- 推測と事実を明確に分ける
- アクションアイテムは最大5件
- A4半ページ以内に収める

---

## 変更履歴

- 2026-04-16 v1: 初版
