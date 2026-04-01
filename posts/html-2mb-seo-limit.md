---
title: "GoogleはHTMLの最初の2MBしか読まない｜SEO担当者が今すぐ確認すべきこと"
description: "Google公式が明言したHTML 2MB制限。2MBを超えた部分はクロールもレンダリングもされず、存在しない扱いに。具体的な確認方法と対策を解説。"
date: "2026/04/01"
category: "タスク管理"
tags: ["タスク管理", "フリーランス"]
thumbnail: "/column/images/articles/html-2mb-seo-limit/thumbnail.png"
writer:
  name: "TASKUL編集部"
  role: "ライター"
  bio: "フリーランス・クリエイター向けのタスク管理ノウハウを発信"
---

「記事を書いたのに順位が上がらない」「構造化データを入れたのにリッチリザルトが出ない」——その原因、HTMLのサイズかもしれません。

2026年3月、Google公式ブログで改めて明言されました。**GooglebotはHTMLを最大2MBまでしか取得しない**。2MBを超えた部分は、クロールもレンダリングもされません。つまり「存在しない扱い」です。

この記事では、HTML 2MB制限の具体的な影響と、今すぐできる対策を解説します。

## HTML 2MB制限とは？Googleが見ている範囲

Googlebotがページをクロールする際、HTMLファイルの**最初の2MB（約2,097,152バイト）**までしか取得しません。

これはHTMLの「ファイルサイズ」の話です。画像やCSS、JSの外部ファイルは含まれません。あくまでHTMLドキュメント本体のサイズです。

### 2MBを超えるとどうなるか

- 2MBより後ろにあるコンテンツは**クロールされない**
- レンダリングもされないため、**Googleのインデックスに含まれない**
- 構造化データが後半にある場合、**リッチリザルトに反映されない**
- 内部リンクが後半にある場合、**リンクジュースが渡らない**

つまり、ページの後半に重要なコンテンツを置いている場合、それはGoogleにとって「存在しないもの」です。

## よくある事故パターン

### 1. ナビゲーションや装飾でHTMLが肥大化

ヘッダーやフッター、サイドバーに大量のHTMLを使っているサイトは要注意です。本文が始まる前にHTMLの大部分を消費してしまい、肝心の記事コンテンツがGoogleに読まれない可能性があります。

特にWordPressでプラグインを多用しているサイトは、知らない間にHTMLが膨らんでいることがあります。

### 2. インラインCSS・JSの埋め込み

CSSやJavaScriptをHTMLに直接書き込む（インライン化する）と、HTMLサイズが急激に増えます。特にメール配信用のHTMLをそのままWebに流用しているケースで起きがちです。

### 3. base64エンコードされた画像

画像をbase64でHTMLに埋め込むと、1枚の画像で数十KB〜数百KB消費します。小さなアイコンなら問題ありませんが、大きな画像をbase64で複数埋め込むとHTMLサイズが一気に膨らみます。

### 4. SPAでのコンテンツ遅延読み込み

React、Vue、AngularなどのSPA（Single Page Application）で、JavaScriptによってコンテンツを後から読み込む場合、**JSも取得された2MBの範囲内でしか実行されません**。

画面に表示されていても、Googlebot的には存在しない——これがSPAのSEOリスクです。

### 5. 構造化データがフッターにある

JSON-LDの構造化データをフッター付近に配置しているサイトは多いですが、HTMLが大きいサイトでは2MBの制限によって構造化データが読み取られない可能性があります。

## 自分のサイトは大丈夫？確認方法

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

## 今すぐできるSEO対策

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

## フリーランスのサイトで特に注意すべきポイント

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
