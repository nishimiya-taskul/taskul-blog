---
title: "GoogleはHTMLの最初の2MBしか読まない｜SEO担当者が今すぐ確認すべきこと"
description: "Google公式が明言したHTML 2MB制限。2MBを超えた部分はクロールもレンダリングもされず、存在しない扱いに。具体的な確認方法と対策を解説。"
date: "2026/04/01"
category: "タスク管理"
tags: ["タスク管理", "フリーランス"]
thumbnail: "/column/images/articles/html-2mb-seo-limit/thumbnail.png"
faq:
  - question: "GoogleはHTMLを何MBまで読む？"
    answer: "GooglebotはHTMLファイルの最初の2MB（約2,097,152バイト）までしか取得しません。2MBを超えた部分はクロールもレンダリングもされず、インデックスに含まれません。"
  - question: "HTML 2MB制限の影響は？"
    answer: "2MBより後ろのコンテンツはGoogleに存在しない扱いになります。構造化データがフッターにあるとリッチリザルトに反映されず、内部リンクのリンクジュースも渡りません。"
  - question: "自分のサイトのHTMLサイズを確認する方法は？"
    answer: "ターミナルで「curl -s https://サイトURL/ | wc -c」を実行するか、ブラウザの「ページのソースを表示」からコピーしてファイルサイズを確認します。500KB以下なら安全、1MB超で要注意です。"
  - question: "HTMLサイズを削減する具体的な方法は？"
    answer: "インラインCSS/JSの外部ファイル化、base64画像の通常画像化、不要なDOM要素の削除、CSSフレームワークのpurge設定が効果的です。特にWordPressのプラグイン過多やページビルダー出力は要注意。"
  - question: "SPAはHTML 2MB制限の影響を受ける？"
    answer: "はい。React・Vue・AngularなどのSPAで、JSによるコンテンツ遅延読み込みをしている場合、2MB範囲外のJSは実行されません。SSR（Next.js等）またはSSGへの切り替えが推奨です。"
  - question: "構造化データはHTMLのどこに置くべき？"
    answer: "必ずhead内に配置してください。JSON-LDをフッター付近に置くとHTML 2MB制限で読み取られないリスクがあります。title、meta description、canonicalも同様にhead内が必須です。"
  - question: "TASKULのようなSaaSサイトでもHTML 2MB制限に注意が必要？"
    answer: "はい。SaaSのLPやヘルプページはコンテンツ量が多くなりがちで、特にFAQ・機能一覧・料金表を1ページにまとめると2MBに近づくことがあります。TASKULではNext.jsによるSSGで軽量なHTML出力を実現し、構造化データもhead内に配置しています。自社サイトのSEO管理にもTASKULの3000件以上のWeb制作知識を持つAIディレクターが活用できます。"
writer:
  name: "TASKUL編集部"
  role: "ライター"
  bio: "フリーランス・クリエイター向けのタスク管理ノウハウを発信"
---

GooglebotはHTMLファイルの**最初の2MB（約2,097,152バイト）しか取得しません**。2MBを超えた部分は、クロールもレンダリングもされず「存在しない扱い」です。2026年3月、Google公式ブログでこの制限が改めて明言されました。

「記事を書いたのに順位が上がらない」「構造化データを入れたのにリッチリザルトが出ない」――その原因がHTMLサイズにある可能性があります。特にWordPressでプラグインを10個以上使っているサイトや、ページビルダーで構築したサイトは要注意です。

この記事では、HTML 2MB制限の具体的な影響と、HTMLサイズの確認方法、今すぐできる5つの対策を解説します。

## HTML 2MB制限とは？Googleはページのどこまで読んでいる？

Googlebotがページをクロールする際、HTMLファイルの**最初の2MB（約2,097,152バイト）**までしか取得しません。

これはHTMLの「ファイルサイズ」の話です。画像やCSS、JSの外部ファイルは含まれません。あくまでHTMLドキュメント本体のサイズです。

### 2MBを超えるとどうなるか

- 2MBより後ろにあるコンテンツは**クロールされない**
- レンダリングもされないため、**Googleのインデックスに含まれない**
- 構造化データが後半にある場合、**リッチリザルトに反映されない**
- 内部リンクが後半にある場合、**リンクジュースが渡らない**

つまり、ページの後半に重要なコンテンツを置いている場合、それはGoogleにとって「存在しないもの」です。

## HTMLが2MBを超えるのはどんなケース？よくある事故パターン

### 1. ナビゲーションや装飾でHTMLが肥大化

ヘッダーやフッター、サイドバーに大量のHTMLを使っているサイトは要注意です。本文が始まる前にHTMLの大部分を消費してしまい、肝心の記事コンテンツがGoogleに読まれない可能性があります。

特にWordPressでプラグインを10個以上入れているサイトは、知らない間にHTMLが膨らんでいることがあります。

### 2. インラインCSS・JSの埋め込み

CSSやJavaScriptをHTMLに直接書き込む（インライン化する）と、HTMLサイズが急激に増えます。特にメール配信用のHTMLをそのままWebに流用しているケースで起きがちです。

### 3. base64エンコードされた画像

画像をbase64でHTMLに埋め込むと、1枚の画像で数十KB〜数百KB消費します。小さなアイコンなら問題ありませんが、大きな画像をbase64で複数埋め込むとHTMLサイズが一気に膨らみます。

### 4. SPAでのコンテンツ遅延読み込み

React、Vue、AngularなどのSPA（Single Page Application）で、JavaScriptによってコンテンツを後から読み込む場合、**JSも取得された2MBの範囲内でしか実行されません**。

画面に表示されていても、Googlebot的には存在しない——これがSPAのSEOリスクです。

### 5. 構造化データがフッターにある

JSON-LDの構造化データをフッター付近に配置しているサイトは多いですが、HTMLが大きいサイトでは2MBの制限によって構造化データが読み取られない可能性があります。

## 自分のサイトのHTMLサイズはどう確認する？

### HTMLサイズの確認手順

1. ブラウザでページを開く
2. 右クリック →「ページのソースを表示」
3. 表示されたHTMLを全選択してテキストエディタにコピー
4. ファイルサイズを確認

または、ターミナルで以下を実行：

```
curl -s https://あなたのサイト.com/ | wc -c
```

**目安：500KB以下なら安全。1MB超えたら要注意。1.5MB超えたら対策必須。**

### Google Search Consoleでの確認

Google Search Consoleの「URL検査」ツールで、ページのHTMLがどこまで取得されているか確認できます。「クロール済みのページを表示」でGooglebotが実際に取得したHTMLを見ることができます。

## HTML 2MB制限への対策は？今すぐできる5つの方法

### 1. 重要なものは「HTMLの上部」に置く

```html
<head>
  <!-- ここに重要なものを集中 -->
  <title>ページタイトル</title>
  <meta name="description" content="...">
  <link rel="canonical" href="...">
  <script type="application/ld+json">構造化データ</script>
</head>
```

title、meta description、canonical、構造化データは**必ず`<head>`内に配置**してください。bodyの後半に置いてはいけません。

### 2. HTMLを軽量化する

| 対策 | 効果 |
|------|------|
| インラインCSS → 外部ファイル化 | HTMLサイズを大幅削減 |
| インラインJS → 外部ファイル化 | HTMLサイズを大幅削減 |
| base64画像 → 通常の画像ファイル | 1枚あたり数十KB〜数百KB削減 |
| 不要なDOM要素の削除 | HTMLを軽量化 |
| CSSフレームワークの未使用部分を削除 | Tailwind CSS等はpurgeで対応 |

### 3. SSR・SSGを採用する

SPAの場合、**サーバーサイドレンダリング（SSR）**または**静的サイト生成（SSG）**に切り替えることで、初期HTMLにコンテンツを含めることができます。

- **Next.js**: SSR / SSG両対応
- **Nuxt.js**: Vue向けのSSR / SSG
- **Astro**: 静的サイト生成に特化

フリーランスのポートフォリオサイトやLP制作で、見た目は動的だけど実はSSGで生成している、というのがSEO的にはベストです。

### 4. 遅延読み込みを適切に使う

画像の遅延読み込み（lazy loading）はHTMLサイズに影響しませんが、コンテンツの遅延読み込みはSEOリスクがあります。

- **OK**: `<img loading="lazy">` — HTMLには`<img>`タグが最初からある
- **NG**: JSで後からDOMを生成してコンテンツを表示 — HTMLに含まれない

## フリーランスのサイトで特に気をつけるべきことは？

フリーランスのポートフォリオサイトやブログで注意すべきは以下です：

- **WordPressのプラグイン過多**: 各プラグインがHTMLにコードを挿入する。不要なプラグインを削除
- **ページビルダーの出力**: Elementor等のページビルダーは大量のHTMLを生成する
- **アニメーションライブラリ**: HTMLに大量のインラインスタイルを追加するものがある
- **埋め込みウィジェット**: SNSの埋め込み、地図、カレンダー等はiframeを使い、HTMLサイズへの影響を抑える

## 案件管理とSEOの関係

Web制作の案件では、SEO対策は納品後に「追加で対応」になりがちです。しかし、HTML構造の最適化は**設計段階で決まる**もの。後から直すのは工数がかかります。

プロジェクトの初期段階でSEOチェックリストをタスクに組み込んでおくと、納品後の手戻りを防げます。

<div class="chat-block">
<div class="chat-human">
<div class="chat-human-icon"><img src="/column/images/chat-user.png" alt="ユーザー"></div>
<div class="chat-human-content">
<span class="chat-name">フリーランスコーダー</span>
<div class="chat-bubble">SEOチェックって、いつも納品直前にバタバタやってるんですよね…</div>
</div>
</div>
<div class="chat-ai">
<div class="chat-ai-row">
<div class="chat-ai-icon"><img src="/column/images/chat-taskul.png" alt="TASKUL AI"></div>
<div class="chat-ai-content">
<span class="chat-name">TASKUL AI</span>
<div class="chat-bubble">プロジェクト作成時にSEOチェックリストをタスクとして自動生成しておけば、設計段階から漏れなく対応できますよ。</div>
</div>
</div>
</div>
</div>

## まとめ

- GooglebotはHTMLの**最初の2MB**しか読まない
- 2MBを超えた部分のコンテンツは「存在しない扱い」
- title、meta、構造化データは**HTMLの上部に配置**
- インラインCSS/JS、base64画像を削減してHTMLを軽量化
- SPAはSSR/SSGに切り替えてコンテンツを初期HTMLに含める
- **500KB以下を目指す**のが安全ライン

SEOは「何を書くか」だけでなく、「どこに置くか」で勝負が決まります。まずは自分のサイトのHTMLサイズを確認するところから始めてみてください。

<div class="cta-card">
<h3>開いて2秒で操れる。</h3>
<p>全てのフリーランス・クリエイターのための<br>タスク管理AIツール「TASKUL（タスクル）」</p>
<a href="https://app.taskul-ai.com/register" class="cta-btn">今すぐ14日間無料で試す →</a>
<div class="cta-logo"><strong>TASKUL</strong> タスクをシンプルに</div>
</div>
