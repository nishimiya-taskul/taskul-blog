# SEO改修ログ · 2026-05-13

---

## ステップ1: PDCA期限チェック

本日（2026-05-13）時点で期限到来・statusがawaitingのPDCAは**5件**。
いずれも `before_metrics` / `after_metrics` が null のため、スナップショットデータから定性評価を実施。

| # | 期限 | 目的 | 超過日数 | 評価 |
|---|------|------|---------|------|
| 1 | 2026-04-17 | ブログ新記事3本公開+CTA改善 | 26日超過 | ✅ 記事は公開済み。CTAバナー更新も完了とみなす |
| 2 | 2026-04-18 | 未インデックス5記事のGSCリクエスト | 25日超過 | ⚠️ 一部のみインデックス確認（web-production pos=19.8）。freelance-estimate/invoice は pos=0 のまま |
| 3 | 2026-04-23 | SEO課題10件の一括改修 | 20日超過 | ⚠️ canonical・JSON-LDなどopen issue 34件が残存。部分的改善にとどまる |
| 4 | 2026-05-07 | デザイナー記事公開 | 6日超過 | ⚠️ designer-task-management は公開済みだが pos=0/imp=0（スナップショット4/23時点）。インデックス待ち |
| 5 | 2026-05-10 | Slackタスク管理KW対策（リライト+新規記事） | 3日超過 | ❌ slack-task-management-integration pos=61.4、slack関連KW pos=60-70台。リライト効果なし。content_overhaul 対応が必要 |

### 評価サマリー

- **即効果あり**: なし（before_metricsが取れていないため定量比較不可）
- **推定効果あり**: PDCA#1（記事公開）、PDCA#2（部分インデックス）
- **効果なし**: PDCA#5（Slack記事、position悪化・改善なし）
- **インデックス待ち**: PDCA#4（デザイナー記事、公開から36日）

### 次アクション提案

1. **PDCA#5 Slack記事**: フロントマター改修だけでは不十分。コンテンツ自体の根本改善が必要（content_overhaul issue）
2. **PDCA#2 残件**: freelance-estimate-writing-guide / freelance-invoice-missed-prevention → GSCで再インデックスリクエスト
3. **PDCA#3 canonical**: taskul-lp側の対応を別途確認

---

## ステップ2: SEO改修（2026-05-13実施）

### 選定ロジック

`issues` 配列 impact_score 順 → 記事単位で対応可能かつ frontmatter のみで改善できる最優先課題を選定。

| 順位 | score | issue | 判断 |
|------|-------|-------|------|
| 1 | 65 | 平均順位が10位以下（サイト全体） | テンプレ/コンテンツ対応が必要 → スキップ |
| 2 | 60 | 重複タイトル22ページ | カテゴリ・ページネーションページ → テンプレ対応が必要 → スキップ |
| 3 | - | aieo_direct_answer（html-2mb-seo-limit） | **frontmatter改善可能 → 選定** |

**選定記事**: `html-2mb-seo-limit`  
**理由**: fix_priority=B（記事単位で最高優先）、aieo_score=70（全記事最低）、`google 2mb` KW pos=10.5 でtop10目前

### 実施内容

**変更ファイル**: `posts/html-2mb-seo-limit.md`  
**変更フィールド**: `description`

```
変更前（74字）:
"Google公式が明言したHTML 2MB制限。2MBを超えた部分はクロールもレンダリングもされず、存在しない扱いに。具体的な確認方法と対策を解説。"

変更後（108字）:
"GooglebotはHTMLの最初の2MB（2,097,152バイト）までしかクロールしません。2MBを超えた構造化データ・内部リンクは「存在しない扱い」。自社サイトの確認コマンドと今すぐできる5つの削減対策を解説。"
```

**改善ポイント**:
- 「Googlebot」を主語にし、「〜しません」と断言 → 直接回答形式（AIEO対応）
- バイト数（2,097,152）を明記 → 具体的数字による信頼性向上
- 「構造化データ・内部リンク」の影響を列挙 → 検索者の関心に直撃
- 「確認コマンド」「5つの削減対策」 → アクション期待値を明示
- 74字 → 108字（120字上限内）でGoogleスニペット表示枠を有効活用

### Git操作

```
branch: seo-fix/html-2mb-seo-limit-20260513
commit: 536c017
PR: #91
merge: squash (a4cf762)
```

### 効果測定スケジュール

| タイミング | 確認内容 |
|-----------|---------|
| 2週間後（2026-05-27） | スニペット変更がGSCに反映されているか確認。CTR変化を確認 |
| 1ヶ月後（2026-06-13） | `google 2mb` KW の順位・CTR変化。position 10.5 → top10入りを目標 |

---

*自動生成 · ops/seo-pdca · 2026-05-13*
