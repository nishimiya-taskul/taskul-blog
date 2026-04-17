---
title: "Claude 4.7と4.6の違い｜Web制作で効く5つの進化"
description: "Claude Opus 4.7と4.6の違いを公式データで解説。SWE-benchやVisionのベンチマーク、Claude Codeでのサイト制作で効く具体シーンまで、Web制作者向けにまとめました。"
date: "2026/04/17"
category: "ツール比較"
tags: ["AI", "Claude", "Web制作", "ツール比較", "Claude Code"]
thumbnail: "/column/images/articles/claude-opus-4-7-vs-4-6/thumbnail.png"
faq:
  - question: "Claude Opus 4.7と4.6の最大の違いは何ですか？"
    answer: "コーディング精度（SWE-bench Verified 80.8%→87.6%）、Vision精度（54.5%→98.5%）、マルチステップでのツールエラー1/3への削減が公式発表の主な改善点です。料金は据え置きですが、新トークナイザーにより同じ内容で最大35%多くトークンを消費する場合があります。"
  - question: "Web制作者が4.7を使う最大のメリットは？"
    answer: "高解像度画像対応（2576px/3.75MP、約3倍）でデザインカンプやスクショからの実装精度が上がること、複数ファイルにまたがる実装の整合性が改善されることの2点です。"
  - question: "Claude Opus 4.7の料金は4.6と変わりますか？"
    answer: "API料金は同じ（入力$5/出力$25 per million tokens）です。ただし新トークナイザーにより同じテキストで最大1.35倍のトークンを消費するため、実質コストが上がるケースがあります。"
  - question: "xhighエフォートレベルとは何ですか？"
    answer: "4.7で追加された新しいeffortレベルで、highとmaxの間に位置します。Anthropic公式はコーディング・エージェント用途でxhighからの使用を推奨しています。"
  - question: "4.6から4.7に移行すると何が壊れますか？"
    answer: "Extended thinkingのbudget_tokens指定、temperature/top_p/top_kパラメータが400エラーになります。adaptive thinkingへの切り替えとサンプリングパラメータの削除が必要です。"
  - question: "Task budgetsとは何ですか？"
    answer: "エージェント的なループ全体に目安トークン予算を設定する機能です。モデルが残り予算を見ながら優先度を判断し、予算内で仕事をまとめます。ベータ機能で、最低20kトークンから設定可能です。"
writer:
  name: "TASKUL編集部"
  role: "ライター"
  bio: "フリーランス・クリエイター向けのタスク管理・AI活用情報を発信しています。"
---

2026年4月16日、AnthropicがClaude Opus 4.7をリリースしました。「何が変わったのか」「Web制作の現場で実際に効くのか」が気になっている方は多いはずです。

この記事では、**公式発表のベンチマークデータ**と**Claude Codeでサイトを作るときの具体シーン**を軸に、4.6と4.7の違いを整理します。

![Claude Opus 4.7のリリースとWeb制作への影響を解説するイメージ](/column/images/articles/claude-opus-4-7-vs-4-6/01.jpg)

## なぜWeb制作者がClaude 4.7に注目すべきなのか？

Claude Opus 4.7は、Anthropicが「**最も能力の高い一般提供モデル**」と位置づけるフラッグシップです。派手な新機能というより、**コーディング精度・Vision・指示追従の底上げ**が中心の進化です。

Web制作者にとって重要なのは、この「底上げ」が**日常の制作ワークフローで効くタイプの改善**だという点です。

### 公式ベンチマークで見る4.6→4.7の数字

| 指標 | Opus 4.6 | Opus 4.7 | 改善幅 |
|---|---:|---:|---|
| SWE-bench Verified | 80.8% | **87.6%** | +6.8pt |
| SWE-bench Pro | 53.4% | **64.3%** | +10.9pt |
| CursorBench | 58% | **70%** | +12pt |
| MCP-Atlas（ツール使用） | 75.8% | **77.3%** | +1.5pt |
| Vision精度 | 54.5% | **98.5%** | +44pt |
| マルチステップ | 基準 | **+14%** | ツールエラー1/3 |

数字だけ見ても「で、何が変わるの？」と思うかもしれません。次のセクションで、Web制作の具体シーンに落とし込みます。

## コーディング精度はどれくらい上がったのか？

### SWE-bench Verified: 80.8%→87.6%の意味

SWE-bench Verifiedは、**500件の実際のGitHub issueをエンドツーエンドで解決する**ベンチマークです。単にコードを生成するのではなく、「issueを読み、コードベースを理解し、修正を完成させる」能力を測ります。

80.8%→87.6%の改善は、**10回に1回失敗していたタスクが、15回に1回程度に減った**ことを意味します。

### CursorBenchとマルチステップの改善

CursorBench（58%→70%）は、AIエディタ上での実コーディングタスクのベンチマークです。Claude Codeで作業するときの体感に近い指標です。

Anthropicはまた、**複雑なマルチステップワークフローで14%改善、ツールエラーは1/3に減った**と発表しています。ファイルの読み書きやgrep検索を何十回も繰り返す長い作業で、「間違ったファイルを編集する」「存在しないパスを参照する」といったエラーが減ります。

<div class="chat-block">
<div class="chat-human">
<div class="chat-human-icon"><img src="/column/images/chat-user.png" alt="ユーザー"></div>
<div class="chat-human-content">
<span class="chat-name">フロントエンドエンジニア</span>
<div class="chat-bubble">ベンチマークの数字はわかったけど、実際のサイト制作でどう効くのか知りたいです。</div>
</div>
</div>
<div class="chat-ai">
<div class="chat-ai-row">
<div class="chat-ai-icon"><img src="/column/images/chat-taskul.png" alt="TASKUL AI"></div>
<div class="chat-ai-content">
<span class="chat-name">TASKUL AI</span>
<div class="chat-bubble">次のセクションで、Claude Codeでサイトを作るときの具体シーンを見ていきましょう。ベンチマークの数字がどの作業に対応しているかも併記しています。</div>
</div>
</div>
</div>
</div>

![Claude CodeでのWebサイト実装作業のイメージ](/column/images/articles/claude-opus-4-7-vs-4-6/02.jpg)

## スクショからの実装はどう変わる？

### 解像度が3倍に：1568px→2576px

Opus 4.7は**Claudeシリーズ初の高解像度画像対応モデル**です。

| | Opus 4.6 | Opus 4.7 |
|---|---|---|
| 最大解像度 | 1568px / 1.15MP | **2576px / 3.75MP** |
| 倍率 | 基準 | **約3.3倍** |

Figmaのスクショやデザインカンプを高解像度で読み込めるようになったため、**細かいUIコンポーネント**（フォームの装飾、カード内のレイアウト、アイコンの配置など）の再現精度が上がります。

### 座標が1:1マッピングで何が楽になる？

4.7では**モデルが返す座標が、実際のピクセルと1:1で対応**します。4.6まではスケール計算が必要でしたが、「画像のこの部分」という指示が直接的に通るようになりました。

- Figmaスクショ → HTML/CSS実装
- 既存サイトのスクショ → リニューアル実装
- クライアントの手書きワイヤーフレーム → プロトタイプ

こうした**「見た目を読んで実装する」作業**で、Vision精度54.5%→98.5%の進化が直接効きます。

![デザインカンプからの実装精度が向上するイメージ](/column/images/articles/claude-opus-4-7-vs-4-6/03.jpg)

## Claude Codeでサイトを作るとき何が変わるのか？

ベンチマークの数字を、Claude Codeでの具体的な作業に対応させます。

### LP一気作成で整合性はどう変わる？

**対応するベンチマーク: SWE-bench Verified 87.6%**

「Next.js + Tailwindで4セクションのLP作って」と指示したとき、**SWE-bench Verifiedの改善は「複数ファイルにまたがる実装の完遂率」**に対応します。

4つのコンポーネントファイル、共通のスタイル設定、レイアウトファイルを一度に生成するとき、最後のファイルまで整合性を保つ確率が上がります。

### 大規模リファクタでツールエラーが1/3に

**対応するベンチマーク: マルチステップ+14%、ツールエラー1/3**

Pages Router→App Router移行、jQuery→React移行など、**何十回もファイルを読み書きする作業**で効きます。4.6では起きていた「途中で辻褄が合わなくなる」「存在しないパスをimportする」といったエラーが減ります。

### デザインカンプ→実装の精度

**対応するベンチマーク: Vision 98.5%、解像度3.3倍**

デザインカンプのスクリーンショットをClaude Codeに渡して「これを再現して」と指示する場合、**高解像度で読み取れる**ため、微妙な余白・角丸・フォントサイズの再現度が上がります。

<div class="chat-block">
<div class="chat-human">
<div class="chat-human-icon"><img src="/column/images/chat-user.png" alt="ユーザー"></div>
<div class="chat-human-content">
<span class="chat-name">Webデザイナー</span>
<div class="chat-bubble">デザインカンプをそのまま渡せるのは助かる。今まで「ここ、ちょっと違う」って何回もやり直してたから…。</div>
</div>
</div>
<div class="chat-ai">
<div class="chat-ai-row">
<div class="chat-ai-icon"><img src="/column/images/chat-taskul.png" alt="TASKUL AI"></div>
<div class="chat-ai-content">
<span class="chat-name">TASKUL AI</span>
<div class="chat-bubble">画像解像度が3倍になった影響は大きいですね。その分、高解像度画像はトークン消費も増えるので、次のセクションで紹介する新機能で上手にコストを管理しましょう。</div>
</div>
</div>
</div>
</div>

## 新機能：xhigh・task budget・adaptive thinkingとは？

4.7では、モデルの「考え方」を制御する仕組みが整理されました。

![AI開発ツールの新機能を解説するイメージ](/column/images/articles/claude-opus-4-7-vs-4-6/04.jpg)

### xhighエフォートレベル

`effort` パラメータに新しい段階が追加されました。

| レベル | 用途 |
|---|---|
| low / medium | 軽い作業（文言修正、フォーマット整形） |
| high | 一般的な知的作業（公式の最低推奨ライン） |
| **xhigh（新）** | **コーディング・エージェント用途の推奨** |
| max | 最高精度（トークン消費大） |

Claude Codeでサイトを作るなら、**xhighが実質的な推奨設定**です。

### Task budgets（ベータ）

エージェント的なループ全体に「このくらいのトークン量で仕上げて」と目安を伝える仕組みです。

モデルは**残りトークンのカウントダウンを見ながら優先度を判断**し、予算内で仕事をまとめます。長いリファクタやサイト全体の修正で、「いつまで経っても終わらない」を防ぐのに有効です。最低20kトークンから設定できます。

### Adaptive thinkingへの移行

4.6まであった `extended thinking`（`budget_tokens` で思考量を指定）は**4.7で廃止**されました。代わりに `adaptive thinking` が唯一のモードになり、**モデルが自分でタスクの複雑度を判断して思考量を調整**します。

APIを直接呼んでいる場合は、`thinking: {"type": "adaptive"}` への書き換えが必要です。Claude Code経由で使う分には意識する必要はありません。

## 移行するとき何に注意すべき？

### 新トークナイザーでコストはどうなる？

4.7は新しいトークナイザーを使っています。**同じテキストでも最大1.35倍のトークンを消費**する場合があります。

API料金は据え置き（入力$5 / 出力$25 per million tokens）ですが、**実質コストは上がる可能性**があります。`max_tokens` の設定には余裕を持たせることが推奨されています。

### 破壊的変更3つ

APIを直接利用している方は注意が必要です。

| 変更 | 内容 |
|---|---|
| Extended thinking廃止 | `budget_tokens` 指定で400エラー |
| Sampling params廃止 | `temperature` / `top_p` / `top_k` の非デフォルト値で400エラー |
| Thinking非表示化 | 思考内容がデフォルトで非表示。`display: "summarized"` で復活 |

### 挙動の変化：指示追従がより厳密に

4.7はより**字義通りに指示を守る**傾向が強くなりました。4.6では「この見出しのスタイルを直して」と言うと他の見出しも揃えてくれることがありましたが、**4.7は言われたことだけやる**。良く言えば正確、悪く言えば「気を利かせてくれない」。

また、**デフォルトのトーンが直截的**になり、4.6の「温かい肯定表現」が減っています。

既存プロンプトに「ダブルチェックして」「途中経過を報告して」といった指示を入れている場合、**外して再テストすることが公式に推奨**されています。

![プロジェクト管理とAIツールの連携イメージ](/column/images/articles/claude-opus-4-7-vs-4-6/05.jpg)

<div class="chat-block">
<div class="chat-human">
<div class="chat-human-icon"><img src="/column/images/chat-user.png" alt="ユーザー"></div>
<div class="chat-human-content">
<span class="chat-name">Webディレクター</span>
<div class="chat-bubble">AIツールの進化はいいんだけど、案件ごとにどのモデルで何をやったか管理するのが大変になりそう…。</div>
</div>
</div>
<div class="chat-ai">
<div class="chat-ai-row">
<div class="chat-ai-icon"><img src="/column/images/chat-taskul.png" alt="TASKUL AI"></div>
<div class="chat-ai-content">
<span class="chat-name">TASKUL AI</span>
<div class="chat-bubble">AIに実装を任せる場面が増えるほど、案件の全体管理は人間がしっかり握る必要がありますね。タスク管理を仕組み化しておくと、AIへの指示出しも整理しやすくなります。</div>
</div>
</div>
</div>
</div>

## まとめ

Claude Opus 4.7は、4.6からの**「精度と一貫性の底上げ」**がWeb制作の実務に効くアップデートです。

| 進化ポイント | 公式データ | Web制作で効くシーン |
|---|---|---|
| コーディング精度 | SWE-bench +6.8pt、CursorBench +12pt | LP一気作成、大規模リファクタ |
| Vision | 54.5%→98.5%、解像度3.3倍 | デザインカンプ→実装 |
| ツール使用 | エラー1/3、MCP-Atlas 77.3% | ファイル横断の修正作業 |
| マルチステップ | +14% | Pages→App Router移行 |
| 新機能 | xhigh、task budget | コスト管理・長時間タスク制御 |

料金は据え置きですが、新トークナイザーで**実質コストが最大35%上がる場合がある**点は注意が必要です。

AIに実装を任せる機会が増えるほど、案件全体の進捗管理が重要になります。[AIを活用したタスク管理ツール](https://taskul-ai.com/column/articles/ai-task-management-tools)や[Web制作の案件管理テンプレート](https://taskul-ai.com/column/articles/web-production-project-management-template)も参考に、制作ワークフロー全体を最適化していきましょう。

**出典:**

- [Introducing Claude Opus 4.7 - Anthropic公式](https://www.anthropic.com/news/claude-opus-4-7)
- [What's new in Claude Opus 4.7 - Claude API Docs](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-7)
- [Claude Opus 4.7 benchmarks - Vellum AI](https://www.vellum.ai/blog/claude-opus-4-7-benchmarks-explained)
- [Claude Opus 4.7 on Amazon Bedrock - AWS](https://aws.amazon.com/blogs/aws/introducing-anthropics-claude-opus-4-7-model-in-amazon-bedrock/)
