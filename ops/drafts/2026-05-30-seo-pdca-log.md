# SEO改修ログ · 2026-05-30

**ステータス**: 実施済み（PR作成待ち）

---

## ステップ1: PDCA期限チェック

seo-snapshot.json（exported_at: 2026-05-13）の pdca 配列を確認。6件中5件が `status: awaiting` で期限超過。

| PDCA ID | purpose | measure_due_date | 期限超過日数 | 判定 |
|---------|---------|-----------------|-------------|------|
| d3f3d55f | Slackタスク管理KW対策：既存記事リライト＋新規公開 | 2026-05-10 | 20日 | ⚠️ 効果不十分 |
| 74d9d889 | SEO課題10件の一括改修 | 2026-04-23 | 37日 | ❓ 測定データなし |
| 3b5c0209 | デザイナーのタスク管理術 新規公開 | 2026-05-07 | 23日 | ❓ 測定データなし |
| b9eff224 | ブログ新記事3本公開＋CTA改善 | 2026-04-17 | 43日 | ❓ 測定データなし |
| b8276aba | 未インデックス5記事のインデックスリクエスト | 2026-04-18 | 42日 | ❓ 測定データなし |
| 993c9552 | サイトマップ再登録 | 2026-04-13 | — | ✅ measured（成功） |

### d3f3d55f 詳細検証（Slack記事PDCA）

- **仮説**: 既存記事リライト＋新規記事公開でSlack系クエリの順位向上
- **アクション日**: 2026-04-10
- **計測期限**: 2026-05-10（20日超過）
- **現状（snapshot時点）**:
  - `slack-task-management-integration`: impressions 106、clicks 0、CTR 0%、position 61.4
  - `slack-task-management-method`: impressions 0、clicks 0（未表示）
- **判定**: 効果不十分。position 61.4は大幅改善が必要。
- **次のアクション**: title/description改修でCTR改善を試みる（今回の改修対象）

### b8276aba 詳細（未インデックス5記事）

対象記事の最新状況（snapshot）:
- `freelance-task-management`: impressions 0、position 0 → **未インデックス継続**
- `illustrator-project-management`: impressions 0、position 0 → **未インデックス継続**

→ GSCで再確認とインデックスリクエスト再送信を推奨

---

## ステップ2: SEO改修

**対象記事**: `posts/slack-task-management-integration.md`

### 改修根拠

| 指標 | 数値 |
|------|------|
| impressions | 106（全記事中最多） |
| clicks | 0 |
| CTR | 0% |
| position | 61.4 |
| 適用ルール | OPS.md「表示回数多い + CTR低い(2%以下) → タイトルとdescriptionを変更」 |

### 変更内容

| 項目 | 変更前 | 変更後 |
|------|--------|--------|
| title | Slackのタスク管理方法3選｜限界と連携ツールを徹底比較（29字） | Slackのタスク管理に限界を感じたら｜外部ツール連携4選比較（31字） |
| description | Slackのリマインダー・Lists・Canvasで3案件まで管理する方法と…（95字） | Slackのリマインダー・Lists・Canvasで管理できるのは3案件が限界…（101字） |

### 変更の狙い

- **title**: CLAUDE.md「不満キャッチ型」フォーマット（〇〇と感じたら｜△△な選択肢）を採用。ネガティブワード「限界を感じたら」でクリック欲を刺激
- **description**: 「3案件が限界」という具体数字を先頭に配置し pain point を明示 → 検索者の共感を即座に獲得

### Gitオペレーション

```
branch: seo-fix/slack-task-management-integration-20260530
commit: c3f3a9e  seo: slack-task-management-integration frontmatter改善
push: 完了
PR作成: GitHub MCP 403エラー・gh CLI未インストールのため手動マージ必要
```

### 検証スケジュール

| タイミング | アクション |
|-----------|----------|
| 2026-06-13（2週間後） | CTR改善確認（目標: 1%以上） |
| 2026-06-30（1ヶ月後） | position・impressionsの変化計測 |

---

## 未対応課題（次回推奨）

1. **freelance-task-management / illustrator-project-management**: 未インデックスが継続。GSCでインデックスリクエスト再送信
2. **Slack記事の構造的問題**: slack-task-management-integration と slack-task-management-method でKWカニバリゼーションの懸念。両記事のtarget KWを明確に分離する対応を検討
3. **期限超過PDCAの計測**: `74d9d889`（SEO課題10件）、`3b5c0209`（デザイナー記事）の効果計測が未実施
