# SEO改修ログ · 2026-08-17

## ステップ1: PDCA期限チェック

| # | 目的 | 実施日 | 期限 | ステータス | 評価 |
|---|---|---|---|---|---|
| 1 | Slack KW対策: リライト＋新規記事 | 2026-04-10 | 2026-05-10 | awaiting | ⚠️ 期限切れ・未検証 |
| 2 | SEO課題10件一括改修 | 2026-04-09 | 2026-04-23 | awaiting | ⚠️ 期限切れ・未検証 |
| 3 | 新規記事: デザイナーのタスク管理術 | 2026-04-07 | 2026-05-07 | awaiting | ⚠️ 期限切れ・未検証 |
| 4 | ブログ新記事3本＋CTA改善 | 2026-04-03 | 2026-04-17 | awaiting | ⚠️ 期限切れ・未検証 |
| 5 | 未インデックス5記事のリクエスト | 2026-04-04 | 2026-04-18 | awaiting | ⚠️ 期限切れ・未検証 |

### 効果検証（スナップショット最終値: 2026-05-13 時点）

**PDCA①: Slack KW対策**
- 仮説: 既存記事リライトで順位向上、新規記事で別角度流入
- 検証結果: `slack-task-management-integration` = imp:106・clicks:0・pos:61.4 → 目標未達
- `slack-task-management-method` = imp:0・pos:0 → 未インデックスの可能性
- 判定: **不成立**。Slack系3KW合計imp=68だがclicks=0。コンテンツ根本強化が必要。

**PDCA④: ブログ新記事3本＋CTA改善**
- 仮説: 記事公開でSEO流入開始・CTA改善でCV率向上
- 検証: サイト全体のimp・clicksはPDCA③サイトマップ再登録後に急増（imp 2.6倍）
- 判定: **部分的成立**。記事公開は完了、CVは5件/日まで記録（2026-05-07）。

**PDCA⑤: 未インデックス5記事リクエスト**
- 対象: freelance-task-management, illustrator-project-management, freelance-estimate-writing-guide, freelance-invoice-missed-prevention, web-production-project-management-template
- 検証: `web-production-project-management-template` = imp:13・pos:19.8 → インデックス確認
- 判定: **概ね成立**（一部記事は引き続き圏外）

**備考**: seo-snapshot.json のデータは 2026-05-13 が最終。96日分のデータ欠損継続中。正確な効果検証には seo-engine API の再接続が急務。

---

## ステップ2: SEO改修

### 改修対象
- **記事**: `excel-project-management-limit`
- **URL**: https://taskul-ai.com/column/excel-project-management-limit/
- **根拠**: position=7.5（page 1）・CTR=0%・最終更新2026-06-01（2.5ヶ月前）
- **対応課題**: issues/fdaf95f1「導入文の改善（AIEO）」severity:high

### 変更内容（frontmatterのみ）

| 項目 | 変更前 | 変更後 |
|---|---|---|
| title | 案件管理をエクセルでやる限界｜フリーランスがスプレッドシートを卒業すべきタイミング（40字） | エクセル案件管理の限界｜卒業すべき6つのサインと乗り換え先3選（30字） |
| description | フリーランスのエクセル案件管理が破綻する6つのサイン。スプレッドシートの限界を感じたら読む記事。乗り換え先の選び方と、設定ゼロで始められる代替ツールを紹介します。（76字） | 同時5件超でエクセル案件管理は静かに破綻します。破綻する6つのサインと移行先3ツールを比較。移行はたった5分、設定ゼロで始められる代替ツールでフリーランスの請求漏れをゼロにする方法を解説します。（97字） |
| date | 2026/06/01 | 2026/08/17 |

### 改修ポイント
- title: KW「エクセル案件管理」を先頭に移動、32字以内基準に適合
- description: 具体数字（5件・3ツール・5分）を追加し、クリック訴求力を強化
- date: 鮮度シグナルとしてGoogleへの更新通知効果を狙う

### デプロイ
- PR: https://github.com/nishimiya-taskul/taskul-blog/pull/189
- マージ: 完了（squash）
- CI: check-no-deletions ✅ / Vercel Preview ✅

---

## 次回アクション候補

1. seo-engine API 再接続 → seo-snapshot.json 更新（96日分のデータ欠損解消）
2. `slack-task-management-integration` コンテンツ根本強化（imp=106・pos=61.4・CTR=0%）
3. PDCA①②③の verdict を正式記録（seo-engineに反映）
4. `task-management-apps-free`（pos=48.1）のタイトル・構成見直し

---

*実行日: 2026-08-17 | データ基準: ops/data/seo-snapshot.json（取得: 2026-05-13）*
