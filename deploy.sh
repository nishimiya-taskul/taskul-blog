#!/bin/bash
# TASKUL Blog デプロイスクリプト
# taskul-blog でビルド → taskul-lp にコピー → push
set -e

BLOG_DIR="/Users/nishimiya/Desktop/Github/taskul-blog"
LP_DIR="/Users/nishimiya/Desktop/Github/taskul-lp"

echo "=== Step 1: ブログをビルド ==="
cd "$BLOG_DIR"
npm run build
echo "✓ ビルド完了"

echo ""
echo "=== Step 2: 出力を検証 ==="
# CSS存在確認
CSS_COUNT=$(find out/_next/static/chunks -name "*.css" 2>/dev/null | wc -l | tr -d ' ')
if [ "$CSS_COUNT" -eq "0" ]; then
  echo "❌ CSSファイルが見つかりません。デプロイ中止。"
  exit 1
fi
echo "✓ CSSファイル: ${CSS_COUNT}件"

# HTML存在確認
HTML_COUNT=$(find out -name "*.html" -maxdepth 1 2>/dev/null | wc -l | tr -d ' ')
echo "✓ HTMLファイル: ${HTML_COUNT}件"

# 記事HTML内のCSSパスが /column/_next/ を参照しているか
if grep -q "/column/_next/" out/freelance-task-management.html 2>/dev/null; then
  echo "✓ CSSパス正常（/column/_next/）"
else
  echo "❌ CSSパスが不正。basePath設定を確認。デプロイ中止。"
  exit 1
fi

echo ""
echo "=== Step 3: taskul-lpにコピー ==="
cd "$LP_DIR"
git checkout main
git pull origin main --rebase

# columnディレクトリを完全に削除して新規コピー
rm -rf column
mkdir column

# ビルド出力をコピー
cp -r "$BLOG_DIR/out/"* column/

# 画像をコピー（publicのimagesをcolumn/imagesに）
cp -r "$BLOG_DIR/public/images/" column/images/

echo "✓ コピー完了"

echo ""
echo "=== Step 4: 最終検証 ==="
# _nextがcolumn内に存在するか
if [ -d "column/_next" ]; then
  echo "✓ column/_next/ 存在"
else
  echo "❌ column/_next/ がありません。デプロイ中止。"
  exit 1
fi

# imagesが存在するか
if [ -f "column/images/sidebar-banner.png" ]; then
  echo "✓ images/ 存在"
else
  echo "❌ images/ がありません。デプロイ中止。"
  exit 1
fi

# HTMLのCSS参照が実ファイルに一致するか
FIRST_CSS=$(grep -o '/column/_next/static/chunks/[^"]*\.css' column/freelance-task-management.html | head -1 | sed 's|/column/||')
if [ -f "column/$FIRST_CSS" ]; then
  echo "✓ CSS参照とファイルが一致: $FIRST_CSS"
else
  echo "❌ CSS参照先が存在しません: $FIRST_CSS デプロイ中止。"
  exit 1
fi

echo ""
echo "=== 全検証OK。git push可能 ==="
echo "以下を実行してください:"
echo "  cd $LP_DIR"
echo "  git add -A && git commit -m 'deploy: blog update' && git push"
