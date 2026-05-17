# SEO改修ログ · 2026-05-17

**実行者**: Claude Code 自律運用  
**データソース**: ops/data/seo-snapshot.json（エクスポート: 2026-05-13T04:09:59Z）

---

## Step 1: PDCA期限チェック（全5件 awaiting → 検証）

### PDCA①：Slackタスク管理KW対策（期限超過 +7日）

| 項目 | 内容 |
|---|---|
| アクション | slack-task-management-integration リライト＋slack-task-management-method 新規公開 |
| 実施日 | 2026-04-10 |
| 計測期限 | 2026-05-10 |
| 超過日数 | +7日 |

**計測結果**（スナップショット: 2026-05-13時点）

| 記事 | 順位 | 表示回数 | クリック | CTR |
|---|---|---|---|---|
| slack-task-management-integration | 61.4位 | 106回 | 0 | 0% |
| slack-task-management-method | 未インデックス | 0 | 0 | - |

**判定: 失敗**

- リライト後37日経過で順位変動なし（61位台）
- 新規記事は未インデックス（GSCリクエスト後40日経過で未クロール）
- 仮説「質問形式H2追加・Lists/Canvas解説強化で順位向上」は不成立

**次アクション**: slack-task-management-integration のコンテンツ根本改善（構成から見直し。上位記事との差分分析が必要）。新規記事はインデックス状況を再確認。

---

### PDCA②：SEO課題10件の一括改修（期限超過 +24日）

| 項目 | 内容 |
|---|---|
| アクション | canonical追加、alt改善、JSON-LDスキーマ追加、カテゴリ別導入文追加等 |
| 実施日 | 2026-04-09 |
| 計測期限 | 2026-04-23 |
| 超過日数 | +24日 |

**計測結果**

- beforeメトリクス未記録のため定量比較不可
- issuesに「canonical未設定」が引き続きopenで残存（トップページ・ツール比較カテゴリ）
- issuesに「構造化データ（JSON-LD）未設定」も残存

**判定: 部分的実施 / 効果不明**

- canonical実装は不完全（または未実装）の可能性
- beforeデータなし → 効果検証不能

**次アクション**: canonical未設定の調査。インフラ系改修はbeforeデータを必ず記録するプロセスを確立する。

---

### PDCA③：デザイナーのタスク管理術 新規公開（期限超過 +10日）

| 項目 | 内容 |
|---|---|
| アクション | designer-task-management 記事公開＋GSCインデックスリクエスト |
| 実施日 | 2026-04-07 |
| 計測期限 | 2026-05-07 |
| 超過日数 | +10日 |

**計測結果**

| 記事 | 順位 | 表示回数 | クリック |
|---|---|---|---|
| designer-task-management | 未インデックス | 0 | 0 |

**判定: 失敗（未インデックス）**

- 公開から40日経過でも未インデックス
- 「デザイナー タスク管理」は競合が強く、インデックス自体が遅延している可能性
- 内部リンク不足・サイトのクロールバジェット問題の可能性もあり

**次アクション**: GSCで「URL検査」を実施しクロール状況を確認。インデックスされていない場合は、既存インデックス済み記事からの内部リンク追加を検討。

---

### PDCA④：ブログ新記事3本公開（期限超過 +30日）

| 項目 | 内容 |
|---|---|
| アクション | freelance-estimate-writing-guide / freelance-invoice-missed-prevention / web-production-project-management-template 公開 |
| 実施日 | 2026-04-03 |
| 計測期限 | 2026-04-17 |
| 超過日数 | +30日 |

**計測結果**

| 記事 | 順位 | 表示回数 | クリック |
|---|---|---|---|
| web-production-project-management-template | 19.8位 | 13回 | 0 |
| freelance-invoice-missed-prevention | 未インデックス | 0 | 0 |
| freelance-estimate-writing-guide | 未インデックス | 0 | 0 |

**判定: 部分的成功（1/3インデックス）**

- web-production-project-management-templateは2ページ目（19.8位）でインデックス済み ✓
- CTR=0%なのでタイトル/description改善余地あり（次回改修候補）
- 2記事は未インデックス（公開から44日経過）

**次アクション**: 未インデックス2記事のGSC再確認。web-production記事は2ページ目確保できているのでtitle/descriptionのCTR改善を検討。

---

### PDCA⑤：未インデックス5記事のインデックス登録リクエスト（期限超過 +29日）

| 項目 | 内容 |
|---|---|
| アクション | freelance-task-management / illustrator-project-management / freelance-estimate-writing-guide / freelance-invoice-missed-prevention / web-production-project-management-template にGSCリクエスト |
| 実施日 | 2026-04-04 |
| 計測期限 | 2026-04-18 |
| 超過日数 | +29日 |

**計測結果**

| 記事 | インデックス状況 |
|---|---|
| web-production-project-management-template | ✓ インデックス済み（pos=19.8） |
| freelance-task-management | ✗ 未インデックス |
| illustrator-project-management | ✗ 未インデックス |
| freelance-estimate-writing-guide | ✗ 未インデックス |
| freelance-invoice-missed-prevention | ✗ 未インデックス |

**判定: 部分的成功（1/5）**

- 5件中1件のみインデックス。GSCリクエスト後43日で4件が未インデックスは異常
- クロールバジェットの問題、または内部リンク不足でGooglebotがたどり着けていない可能性

**次アクション**: 未インデックス4記事に対して、インデックス済み記事からの内部リンク設置を優先的に実施。サイトマップ再登録も検討。

---

## PDCA総評

| # | 目的 | 判定 | 主因 |
|---|---|---|---|
| ① | Slack記事リライト | 失敗 | コンテンツ品質不足。質問形式H2だけでは不十分 |
| ② | SEO課題10件一括改修 | 不明 | beforeデータ未記録。canonical残存 |
| ③ | デザイナー記事インデックス | 失敗 | 未インデックス |
| ④ | 新記事3本公開 | 部分的 | 1/3インデックス |
| ⑤ | 5記事インデックスリクエスト | 部分的 | 1/5インデックス |

**学習事項**: 多数の記事が未インデックス状態。インデックス化が最優先課題。コンテンツ改善より先に「Googleにクロールさせる仕組み」が必要。

---

## Step 2: SEO改修実施

### 対象: slack-task-management-integration

**選定根拠**:
- issues: 重複タイトル22ページ（impact_score=60）に対応
- `slack-task-management-integration` と `slack-task-management-method` のタイトル類似が重複タイトル問題の一因
- メトリクス: imp=106, clicks=0, ctr=0%（最多表示・最低CTR）→ CLAUDE.md「表示回数多い＋CTR低い→タイトル変更」に該当

**変更内容（frontmatterのみ）**:

```diff
- title: "Slackのタスク管理方法3選｜限界と連携ツールを徹底比較"
+ title: "Slackのタスク管理ツール連携4選｜Trello・Asana・TASKUL比較"

- description: "Slackのリマインダー・Lists・Canvasで3案件まで管理する方法と、4案件以上で必要な連携ツール4選を比較。Trello・Asana・Todoist・TASKUL比較表付きで解説。"
+ description: "Slackのリマインダー・Lists・Canvasだけでは4案件以上が限界。Trello・Asana・Todoist・TASKULのSlack連携4ツールを機能・価格・使いやすさで徹底比較。比較表と案件数別おすすめ選びガイド付き。"

- date: "2026/04/10"
+ date: "2026/05/17"
```

**差別化ポイント**:
- 旧: 「管理方法3選」→ `slack-task-management-method` と意図が重複
- 新: 「ツール連携4選｜Trello・Asana・TASKUL比較」→ 連携ツール比較特化。具体的ツール名をタイトルに入れてロングテールKWを獲得

**PDCA登録**:
- 仮説: タイトル差別化でカニバリ解消。descriptionの具体性向上でCTR 0% → 2%以上に改善
- 計測期限: 2026-06-17（30日後）
- 監視指標: ctr・clicks（現状: 0%・0 → 目標: 2%以上）

**ブランチ**: `seo-fix/slack-task-management-integration-20260517`（push済み、PR作成待ち）

---

## 次回優先アクション（参考）

1. **未インデックス4記事に内部リンク設置**（freelance-task-management, illustrator, estimate, invoice）
2. **web-production-project-management-template のタイトル改善**（pos=19.8, CTR=0%）
3. **canonical問題の調査・実装確認**（impact_score=45）
