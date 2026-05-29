# SEO改修ログ · 2026-05-29

---

## ステップ1: PDCA期限チェック

本日（2026-05-29）時点で期限到来・statusがawaitingのPDCAは**5件**。
前回ログ（2026-05-13）からの追加変化として、`d3f3d55f`（Slack記事KW対策）の期限超過が19日に拡大。

| # | ID | 期限 | 目的 | 超過日数 | 評価 |
|---|---|------|------|---------|------|
| 1 | b9eff224 | 2026-04-17 | ブログ新記事3本公開+CTA改善 | 42日超過 | ✅ 記事公開・CTA更新完了。スナップショット内で対象記事は確認済み |
| 2 | b8276aba | 2026-04-18 | 未インデックス5記事のGSCリクエスト | 41日超過 | ⚠️ web-production pos=19.8（インデックス済み）。freelance-estimate/invoice は pos=0 継続。再リクエスト推奨 |
| 3 | 74d9d889 | 2026-04-23 | SEO課題10件の一括改修 | 36日超過 | ⚠️ canonical・JSON-LD等のopen issueが残存。コンポーネント側の対応が必要でブログ記事単体では解消不可 |
| 4 | 3b5c0209 | 2026-05-07 | デザイナー記事公開（designer-task-management） | 22日超過 | ⚠️ 記事ファイルはpostsに存在。スナップショット（4/23時点）ではpos=0。インデックス待ち可能性あり |
| 5 | d3f3d55f | 2026-05-10 | Slackタスク管理KW対策（リライト+新規記事） | 19日超過 | ❌ slack-task-management-integration pos=61.4（変化なし）。slack関連KW全て65位前後。content_overhaulレベルの対応が必要 |

### 評価サマリー

- **完了確認**: PDCA#1（記事公開）
- **部分達成**: PDCA#2（一部インデックス）、PDCA#3（部分的改修）
- **インデックス待ち**: PDCA#4（デザイナー記事）
- **効果なし（根本改善要）**: PDCA#5（Slack記事 pos=61.4、CTR=0%継続）

### 前回（2026-05-13）からの変化

- `html-2mb-seo-limit/` のdescription改修（5/13 PR#91マージ）の効果検証期間中（2週間後確認=5/27、1ヶ月後確認=6/13）
- スナップショットが5/13以降更新されていないため、定量比較は次回更新後に実施

### 次アクション提案

1. **PDCA#5 Slack記事**: コンテンツ根本改善（content_overhaul issue）が必要。タイトル・description変更では不十分。上位5記事の分析→不足コンテンツ追加が次のステップ
2. **PDCA#4 デザイナー記事**: 公開から約52日（4/7公開）。GSCでインデックス状況を直接確認推奨
3. **PDCA#2 残件**: `freelance-estimate-writing-guide`・`freelance-invoice-missed-prevention` のGSC再インデックスリクエスト

---

## ステップ2: SEO改修（2026-05-29実施）

### 選定ロジック

`issues`配列 impact_score順→ブログ記事単位・frontmatterのみで対応可能な最優先課題を選定。
前回（2026-05-13）で `html-2mb-seo-limit`（fix_priority=B）は改修済みのため除外。

| 順位 | score | issue | 判断 |
|------|-------|-------|------|
| 1 | 65 | 平均順位が10位以下（サイト全体） | テンプレ対応が必要 → スキップ |
| 2 | 60 | 重複タイトル22ページ | カテゴリ等テンプレ対応 → スキップ |
| 3 | 55 | 構造化データ未設定（コラムトップ/カテゴリ） | テンプレ対応 → スキップ |
| 4 | 45 | canonical未設定 | テンプレ対応 → スキップ |
| - | - | CLAUDE.mdリライト基準「表示多+CTR低」→ web-production-project-management-template | **frontmatter改善可能 → 選定** |

**選定記事**: `web-production-project-management-template`
**理由**:
- position=19.8（1ページ目目前、20位）
- CTR=0%（13回表示あるがクリックゼロ）
- descriptionが79文字（120文字上限まで41文字の余裕）
- aieo_grade=S・seo_grade=A（コンテンツ質は高く、スニペット改善でCTR改善が見込める）

### 実施内容

**変更ファイル**: `posts/web-production-project-management-template.md`
**変更フィールド**: `description`

```
変更前（79文字）:
"Web制作の案件管理に必要なテンプレート項目と運用方法を解説。エクセル・スプレッドシートの限界を超え、AIで依頼文からタスクを自動生成する方法まで紹介します。"

変更後（96文字）:
"Web制作の案件管理テンプレートに必要な8項目を解説。エクセルで管理している人が見落としがちな項目とは？フリーランスWebデザイナーが抜け漏れゼロにする運用術とAI活用法も紹介。"
```

**改善ポイント**:
- 主要KW「Web制作 案件管理 テンプレート」を文頭に配置（SEO基本）
- 「8項目」という具体的な数字を追加 → クリック期待感を向上
- 「見落としがちな項目とは？」という疑問形 → ユーザーの不安に直接訴求
- 「フリーランスWebデザイナー」でターゲット明確化 → 離脱を防ぐ
- 79字 → 96字（120字上限内）でGoogleスニペット表示枠を有効活用

### Git操作

```
branch: seo-fix/web-production-project-management-template-2026-05-29
commit: 41df2ef
PR: 作成待ち（MCPエラーのためGitHub画面から作成してください）
  URL: https://github.com/nishimiya-taskul/taskul-blog/pull/new/seo-fix/web-production-project-management-template-2026-05-29
```

### 効果測定スケジュール

| タイミング | 確認内容 |
|-----------|---------|
| 2週間後（2026-06-12） | GSCでスニペット変更の反映を確認。CTRに変化があるか |
| 1ヶ月後（2026-06-29） | position・CTR変化。CTR 0% → 2%以上を目標 |

---

*自動生成 · ops/seo-pdca · 2026-05-29*
