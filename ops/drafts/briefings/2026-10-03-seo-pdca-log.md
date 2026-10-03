# SEO改修ログ 2026-10-03

## Step 1: PDCA期限チェック

seo-snapshot.json（エクスポート: 2026-05-13）のPDCA配列を確認。全6件 due_date=None のため、期限ベースのトリガーは発動せず。ステータス別確認結果:

| ID | アクション概要 | ステータス | 判定 |
|----|-------------|---------|------|
| d3f3d55f | Slack記事リライト（質問形式H2・Canvas解説強化） | awaiting | 実施済（2026/08/13更新確認） |
| 74d9d889 | taskul-lp H1/alt修正 | awaiting | 未確認（taskul-lpリポジトリ対象、本リポジトリ外） |
| 3b5c0209 | 記事公開+GSCインデックスリクエスト | awaiting | 実施済（複数記事公開確認） |
| 993c9552 | GSCサイトマップ再送信 | measured | verdict: success（過去ログで確認済） |
| b9eff224 | 見積書・請求漏れ・テンプレ記事公開＋CTAバナー統一 | awaiting | 実施済（各記事存在確認済） |
| b8276aba | 5記事GSCインデックスリクエスト | awaiting | 実施済（対象記事のdate更新確認） |

**効果検証**: seo-snapshot が 2026-05-13 のまま更新停止（143日経過）。GSCデータ連携が再開するまで定量的な効果検証は困難。スナップショット以降の記事追加・改善は git履歴で確認。

---

## Step 2: SEO改修

**対象記事**: `posts/ai-task-management-tools.md`

**選定根拠（seo-snapshot issuesより）**:
- issue category: `aieo_direct_answer`（severity: high）
- article_url: `https://taskul-ai.com/column/ai-task-management-tools/`
- snapshotデータ: impressions=6, position=20, aieo_score=90
- 最終frontmatter改修: なし（2026-08-30 dailyブリーフィングでの一括commit以降、個別SEO改修なし）

**変更内容**:

| 項目 | 変更前 | 変更後 |
|------|--------|--------|
| howto スキーマ | なし | 4ステップ追加 |

**追加HowToステップ**:
1. 自動化したいタスク課題を3つ以内に書き出す
2. 必要なAI機能と予算上限を決める
3. 無料プランで2〜3ツールを1週間試す
4. 最もストレスなく続けられたツールに絞る

**PR**: #343 `seo: ai-task-management-tools HowToスキーマ追加`

**期待効果**:
- HowToリッチリザルト対応でCTR改善
- AIEO score 90→95以上（`hasHowToSchema: false → true`）
- AI引用候補として選ばれやすい構造化コンテンツに

**検証予定**: マージ後2週間でGSCのCTR変動を確認（インデックス後）

---

## 作業サマリー

- 改修ファイル: `posts/ai-task-management-tools.md`（frontmatterのみ・9行追加）
- ブランチ: `seo-fix/ai-task-management-tools-20261003`
- PR: #343（マージ待ち）
- 今日の改修件数: 1件（上限: 1件/日）
- 次回推奨改修候補: `slack-task-management-integration`のcontext_overhaul（コンテンツ全面強化・position 61.4位・impressions 106）
