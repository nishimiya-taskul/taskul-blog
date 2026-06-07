# SEO改修ログ · 2026-06-07

---

## ステップ1: PDCA期限チェック

本日（2026-06-07）時点で期限到来・status=awaitingのPDCAは**5件**（前回5/13ログから変化なし）。
スナップショットデータ（2026-05-13取得、有効期間: ～2026-05-09）をもとに追加評価。

| # | PDCA ID | 期限 | 目的 | 超過日数 | 前回評価 | 今回評価 |
|---|---------|------|------|---------|---------|---------|
| 1 | b9eff224 | 2026-04-17 | ブログ新記事3本公開+CTA改善 | 51日 | ✅ 公開済み | 変化なし（記事は公開済み） |
| 2 | b8276aba | 2026-04-18 | 未インデックス5記事のGSCリクエスト | 50日 | ⚠️ 1/5のみ | 変化なし（pos=0継続） |
| 3 | 74d9d889 | 2026-04-23 | SEO課題10件の一括改修 | 45日 | ⚠️ 部分対応 | open issues 34件が残存 |
| 4 | 3b5c0209 | 2026-05-07 | デザイナー記事公開 | 31日 | ⚠️ インデックス待ち | スナップショット外（チェック未実施） |
| 5 | d3f3d55f | 2026-05-10 | Slackタスク管理KW対策 | 28日 | ❌ 効果なし | pos=61.4継続・クリック0 |

### PDCA別評価詳細

#### PDCA#2: 未インデックス5記事（b8276aba）
- `web-production-project-management-template`: pos 19.8 → インデックス済み ✅
- `freelance-task-management`: pos 0 → **未インデックス継続** ❌
- `freelance-invoice-missed-prevention`: pos 0 → **未インデックス継続** ❌
- `freelance-estimate-writing-guide`: スナップショット外 → 確認不可
- `illustrator-project-management`: pos 0 → **未インデックス継続** ❌
- **評価**: 1/5のみ成功。残4記事はGSC再リクエストが必要

#### PDCA#5: Slackタスク管理KW対策（d3f3d55f）
- `slack-task-management-integration`: pos 61.4、impressions 106、clicks 0 → **全く改善なし**
- `slack-task-management-method`: pos 0 → **未インデックス**
- **評価**: リライト効果なし。content_overhaulが必要（テクニカル改修だけでは不十分）
- **次アクション**: コンテンツ根本改善（検索意図の再分析から）

### 総合評価

- **成功**: PDCA#1（記事公開）、PDCA#2の一部（1記事インデックス化）
- **失敗**: PDCA#5（Slack記事リライト、順位改善なし）
- **未確認**: PDCA#4（デザイナー記事）、PDCA#3の残件
- **before_metrics** が全PDCAでnullのため、定量比較は不可（定性評価のみ）

---

## ステップ2: SEO改修（2026-06-07実施）

### 選定ロジック

前回（2026-05-13）に `html-2mb-seo-limit` を対応済みのため、次優先issueを選定。

| 順位 | score | issue | 対象記事 | 判断 |
|------|-------|-------|---------|------|
| 1 | 65 | 平均順位が10位以下 | サイト全体 | テンプレ対応 → スキップ |
| 2 | 60 | 重複タイトル22ページ | サイト全体 | Next.jsページネーション → スキップ |
| 3 | 0 | aieo_direct_answer (severity:high) | ai-task-management-tools | **選定** |

**選定記事**: `ai-task-management-tools`  
**理由**:
- issues配列の `aieo_direct_answer`（severity: high）
- position 20（page2底 = page1まで最短距離）
- description が 75字と短く、改善余地あり
- html-2mb-seo-limit（前回対応）に次ぐ改善優先度

### 実施内容

**変更ファイル**: `posts/ai-task-management-tools.md`  
**変更フィールド**: `description`、`date`

```
変更前（75字）:
"AI搭載のタスク管理ツールを5つ比較。自動化できる作業とできない作業を正直に整理し、導入判断に必要な情報をまとめました。"

変更後（81字）:
"AI搭載タスク管理ツール5選を正直に比較。自動化できる4つの作業（分類・優先度提案・リマインド・スケジュール調整）と、まだAIにできないことを具体的に解説します。"

date: 2026/04/07 → 2026/06/07（コンテンツ鮮度シグナル更新）
```

**改善ポイント**:
- 「4つの作業」と具体列挙 → AIEO対応の直接回答形式
- 「まだAIにできないこと」 → 検索者の疑問を直撃する表現
- 75字 → 81字（120字上限内）でGoogleスニペット枠を活用
- date更新 → コンテンツ鮮度シグナルをGoogleに送信

### Git操作

```
branch: seo-fix/ai-task-management-tools-20260607
commit: f39d4d8
PR: 作成試みるも GitHub MCP 403エラー（権限制限）
  → PR作成URL: https://github.com/nishimiya-taskul/taskul-blog/compare/seo-fix/ai-task-management-tools-20260607
  → 手動でPR作成・マージが必要
```

### 効果測定スケジュール

| タイミング | 確認内容 |
|-----------|---------|
| 2026-06-21（2週間後） | GSCスニペット変更反映・CTR変化確認 |
| 2026-07-07（1ヶ月後） | `AIタスク管理ツール` KW 順位・CTR（pos 20→10圏内を目標） |

---

## 次回アクション（優先順）

1. **Slack記事のコンテンツ根本改善** — content_overhaulが必要。検索意図再分析からやり直し
2. **未インデックス記事のGSC再リクエスト** — freelance-task-management / freelance-invoice / illustrator の3記事
3. **重複タイトル22ページの調査** — カテゴリ・ページネーションページのNext.jsテンプレ確認（postsフォルダ外）
4. **canonical設定** — /column/ と /column/category/ツール比較 の2ページ（テンプレ対応）

---

*自動生成 · ops/seo-pdca · 2026-06-07*
