# SEO改修ログ · 2026-08-31

**実行日**: 2026-08-31
**データソース**: ops/data/seo-snapshot.json（エクスポート: 2026-05-13）

---

## Step 1: PDCA期限チェック

全6件が `measure_due_date` 超過。以下の通り効果を検証する。

### PDCA一覧・検証結果

| ID | 目的 | 実施日 | 期限 | スナップショット時点の結果 | 判定 |
|----|------|--------|------|--------------------------|------|
| 993c9552 | サイトマップ再登録 | 2026-04-06 | 2026-04-13 | imp 2.6倍・clicks 5倍 | ✅ 成功 |
| b8276aba | 未インデックス5記事のGSCリクエスト | 2026-04-04 | 2026-04-18 | 対象記事が依然0imp（5/13時点） | ⚠️ 効果不明 |
| b9eff224 | 新規記事3本公開＋CTA改善 | 2026-04-03 | 2026-04-17 | web-production記事が13imp/19.8位 | ⚠️ 一部インデックス |
| 74d9d889 | SEO課題10件一括修正 | 2026-04-09 | 2026-04-23 | column/canonical未設定が残存 | ❌ 一部未適用 |
| 3b5c0209 | デザイナー記事公開 | 2026-04-07 | 2026-05-07 | スナップショットに未追跡 | ⚠️ 計測待ち |
| d3f3d55f | Slack記事リライト＋新規記事公開 | 2026-04-10 | 2026-05-10 | integration: 106imp/0clicks/61.4位 | ❌ CTR改善要 |

### 詳細メモ

#### 993c9552（サイトマップ再登録）— 成功
- before: 平均12.2 imp/日、0.8 clicks/日（4/1〜4/5）
- after: 平均32.2 imp/日、4.0 clicks/日（4/6〜4/11）
- サイトマップ再登録のみでインデックス急回復。今後も定期確認を推奨。

#### b8276aba（未インデックス5記事）— 効果不明
- 対象: freelance-task-management / illustrator-project-management / freelance-estimate-writing-guide / freelance-invoice-missed-prevention / web-production-project-management-template
- 5/13スナップ時点で freelance-task-management・illustrator-project-management は0imp
- その後 2026/08 に両記事をリライト → 状況改善中の可能性

#### b9eff224（新規記事3本＋CTA改善）— 一部インデックス
- web-production-project-management-template: 13imp/19.8位（スナップ時）→ 2026/08/03 リライト済み
- freelance-invoice-missed-prevention: 0imp → 2026/08/21 リライト済み
- CTAバナー改善の効果は計測できず（CVデータが不明）

#### 74d9d889（SEO課題10件修正）— 一部未適用
- issuesにcanonical未設定が依然残存（column/トップ・ツール比較カテゴリ）
- taskul-lp側の修正が対象だった可能性もあり、要確認

#### 3b5c0209（デザイナー記事公開）— 計測待ち
- スナップショット期間中にインデックスされていなかった
- designer-task-management.md は 2026/08/16 更新済み → 今後のGSCデータ確認が必要

#### d3f3d55f（Slack記事戦略）— CTR改善要
- slack-task-management-integration: 106 imp（高）・0 clicks・61.4位
- Slack KWは検索ボリュームあり、順位が深すぎてCTRゼロ
- その後 2026/08/13 に記事を大幅リライト → 効果は今後確認
- slack-task-management-method: 5/13時点0imp → 2026/06/01 更新済み

---

## Step 2: SEO改修（本日実施）

**対象記事**: `task-management-apps-free`
**対応issue**: 「重複したタイトルが22ページ（impact_score: 60）」+「導入文に端的な回答がない（AIEO）」

### 変更内容（frontmatterのみ）

```diff
- title: "タスク管理アプリ無料7選｜個人・フリーランス向け比較と選び方"
+ title: "無料タスク管理アプリ7選｜スマホ対応・続けやすさで厳選比較"

- description: "無料タスク管理アプリ7選を比較。「選んでも続かない」失敗を防ぐ選び方から..."
+ description: "個人・フリーランスの無料タスク管理アプリはTodoist・Google ToDo・TickTick・TASKUL等7選がおすすめ..."

- tags: ["タスク管理", "無料", "アプリ", "個人"]
+ tags: ["タスク管理", "無料", "アプリ", "個人", "フリーランス"]

- date: "2026/08/10"
+ date: "2026/08/31"
```

**改善意図**:
1. タイトル前半に「無料タスク管理アプリ」を配置 → 「タスク管理ツールおすすめ8選」との重複回避
2. descriptionを直接回答型に変更（具体的ツール名を先頭に → AIEO対応）
3. フリーランスtagを追加

**PR**: https://github.com/nishimiya-taskul/taskul-blog/pull/235

---

## 次回アクション候補

1. PR #235 をマージ後、GSCでのCTR・順位変化を2週間後に確認
2. `column/` トップページの canonical 未設定を修正（taskul-lp側の設定確認が必要）
3. Slack KW クラスターの順位改善状況をGSCで確認（slack-task-management-integrationの61.4位改善）
4. seo-snapshot.json の再取得を推奨（現スナップが3.5ヶ月前のデータ）
