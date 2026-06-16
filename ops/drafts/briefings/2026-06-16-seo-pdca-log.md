# SEO改修・PDCAログ · 2026-06-16

## 実施サマリー

- **PDCA検証**: 期限切れ5件を seo-snapshot.json データで効果測定
- **SEO改修**: `html-2mb-seo-limit` のタイトル・description改善
- **ブランチ**: `seo-fix/html-2mb-seo-limit-20260616`（PRマージ待ち）

---

## ステップ1: PDCA 効果検証

> データソース: `ops/data/seo-snapshot.json`（エクスポート日 2026-05-13）

### PDCA① Slackタスク管理KW対策（due: 2026-05-10）

| 指標 | slack-task-management-integration | slack-task-management-method |
|---|---:|---:|
| impressions | 106 | 0 |
| clicks | 0 | 0 |
| CTR | 0% | 0% |
| position | 61.4 | 0（未インデックス） |

**verdict: 不十分**  
リライトによりimpressionsは106回に増えているが、position=61.4と圏外のためclicks=0。新規記事は未インデックスのまま。

**learning**: AIEO対応リライト（質問形式H2・Lists/Canvas解説）だけでは順位改善不十分。コンテンツ量・被リンク・内部リンク強化が必要。

**next_action**: slack-task-management-integrationに上位記事との差分情報追加（ステップバイステップ手順・スクリーンショット）でコンテンツ強化。期限: 2026-07-01

---

### PDCA② SEO課題10件の一括改修（due: 2026-04-23）

**action**: コラムトップcanonical追加、カテゴリ別導入文追加など

**検証結果**:
- `https://taskul-ai.com/column/`: スナップショットで `hasCanonical=false` のまま → canonical未反映
- `https://taskul-ai.com/column/category/ツール比較`: 同上

**verdict: 部分達成**  
taskul-lp側の改修（H1タグ・alt・JSON-LD）は実施済みと推測されるが、taskul-blog側のcanonical追加は反映されていない可能性。

**next_action**: コラムトップとカテゴリページのcanonical設定を再確認・再適用

---

### PDCA③ デザイナー記事公開（due: 2026-05-07）

**action**: `designer-task-management.md` 公開 + GSCリクエスト

**検証結果**:
- `posts/designer-task-management.md` はリポジトリに存在
- seo-snapshot の articles 一覧に不在 → インデックス未確認（スナップショット後にインデックスされた可能性あり）

**verdict: 保留**  
スナップショットデータが古いため判断不可。GSCで現在のインデックス状況を確認する必要あり。

**next_action**: GSC でインデックス確認。未インデックスなら再リクエスト

---

### PDCA④ ブログ3本公開+CTA改善（due: 2026-04-17）

**action**: 見積書・請求漏れ・案件管理テンプレート記事公開

**検証結果（スナップショット時点）**:

| 記事 | imp | clicks | pos |
|---|---:|---:|---:|
| web-production-project-management-template | 13 | 0 | 19.8 |
| freelance-invoice-missed-prevention | 0 | 0 | 0 |
| freelance-estimate-writing-guide | — | — | — |

**verdict: 部分達成**  
テンプレート記事はインデックスされ19.8位。請求漏れ記事はまだ圏外。CTAバナー改善の効果はデータなし。

**next_action**: 請求漏れ記事のGSC再確認・インデックスリクエスト。テンプレート記事は20位→10位以内を目指し内容強化。

---

### PDCA⑤ 未インデックス5記事リクエスト（due: 2026-04-18）

**action**: 5記事へのGSCインデックスリクエスト

**検証結果（スナップショット時点）**:

| 記事 | imp | clicks | pos |
|---|---:|---:|---:|
| freelance-task-management | 0 | 0 | 0 |
| illustrator-project-management | 0 | 0 | 0 |
| freelance-invoice-missed-prevention | 0 | 0 | 0 |
| freelance-estimate-writing-guide | ※確認不可 | | |
| web-production-project-management-template | 13 | 0 | 19.8 |

**verdict: 部分達成（1/5〜2/5）**  
テンプレート記事のみインデックス確認。残り4記事は未インデックスか低順位。

**next_action**: 残り4記事のGSCインデックス状況確認 → 再リクエスト

---

## ステップ2: SEO改修

**対象**: `posts/html-2mb-seo-limit.md`  
**選定理由**:
- impressions=42（ブログ記事中最多）
- position=7（1ページ目）
- fix_priority=B（最優先カテゴリ）
- タイトル42文字 → CLAUDE.mdの32文字目安を大きく超過

**変更内容**:

| 項目 | 変更前 | 変更後 |
|---|---|---|
| title | GoogleはHTMLの最初の2MBしか読まない｜SEO担当者が今すぐ確認すべきこと（42文字） | Google HTML 2MB制限｜SEO影響と5つの削減対策（31文字） |
| description | 既存（74文字） | Googleに無視されるリスクを明示・緊急性を強調した表現に改訂 |

**PR**: `seo-fix/html-2mb-seo-limit-20260616` ブランチ（マージ待ち）

**期待効果**: CTR=11.9%（現状） → +2〜3pt改善（position=7で月間クリック数+1〜2件）

---

## 次回アクション優先リスト

1. **PRマージ**: `seo-fix/html-2mb-seo-limit-20260616` をGitHubでマージ
2. **GSC確認**: インデックス未確認の3〜4記事の状況確認 → 再リクエスト
3. **Slack統合記事のコンテンツ強化**: position=61.4 → まず30位以内を目標
4. **canonical再設定**: コラムトップ（/column/）のcanonical適用確認
5. **seo-snapshot更新**: データが5週間以上古い。seo-engine APIから再取得を推奨

---

*実行日: 2026-06-16 · データ基準: seo-snapshot 2026-05-13 時点*
