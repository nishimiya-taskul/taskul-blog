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

## 5. 記事作成で絶対に守ること（過去の失敗から）

### 画像は実ファイルを必ず配置する
- Pexels APIで実画像をダウンロードして `public/images/articles/{slug}/` に保存
- プレースホルダーだけ残して終わるな
- `orientation=landscape` 必須（縦長禁止）
- 1記事4-6枚

```bash
# 画像検索（APIキーは環境変数 PEXELS_API_KEY を使う）
curl -s "https://api.pexels.com/v1/search?query=KEYWORD&per_page=5&orientation=landscape&locale=ja-JP" \
  -H "Authorization: $PEXELS_API_KEY"

# ダウンロード（レスポンスの photos[].src.large を使う）
curl -sL "IMAGE_URL" -o "public/images/articles/{slug}/01.jpg"
```

### チャットブロックはHTMLテンプレート厳守
```html
<div class="chat-block">
<div class="chat-human">
<div class="chat-human-icon"><img src="/column/images/chat-user.png" alt="ユーザー"></div>
<div class="chat-human-content">
<span class="chat-name">フリーランスデザイナー</span>
<div class="chat-bubble">質問</div>
</div>
</div>
<div class="chat-ai">
<div class="chat-ai-row">
<div class="chat-ai-icon"><img src="/column/images/chat-taskul.png" alt="TASKUL AI"></div>
<div class="chat-ai-content">
<span class="chat-name">TASKUL AI</span>
<div class="chat-bubble">回答</div>
</div>
</div>
</div>
</div>
```
- アイコンパス `/column/images/chat-user.png` と `/column/images/chat-taskul.png` を絶対に変えるな
- 1記事2-3箇所、H2セクションの切れ目に配置
- chat-nameは記事ターゲットに合わせる

### frontmatter
- faq: 5問以上（AIEO対応必須）
- writer: name/role/bio を入れる
- H2/H3の30%以上を質問形式に

### git操作
- mainに直接push禁止。ブランチ→PR→（人間が）マージ
- ブランチ名: `article/[slug]` または `seo-fix/[slug]-[date]`

---

## 変更履歴

- 2026-04-16 v2: 記事作成ルール・APIキー・チャットブロックテンプレート追加
- 2026-04-16 v1: 初版
