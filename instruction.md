# 目的

Claude Design が作成した以下ファイルを既存プロジェクトに統合し、
GitHubへpushし、
Vercel CLIで本番デプロイする。

---

# 対象プロジェクト

/Users/soutayamada/Documents/replit_projects/infinito_hiro_original_linktree_project_20260501

---

# 新規成果物一覧

uploads/
5A0A3ED8-56A2-4873-A8CF-A23A07F8B1B1.jpeg
スクリーンショット 2026-05-01 16.57.49.png
スクリーンショット 2026-05-01 17.04.29.png

card.css
card.jsx
ios-frame.jsx
Infinito Hiro Card.html

---

# 最重要原則

既存構成を破壊しないこと。
全面リプレイス禁止。
既存ファイル削除禁止。

---

# Step 1
プロジェクト構造確認

必ず最初に以下を実行

pwd
ls
git status
cat package.json

---

# Step 2
ページ配置方針

以下のいずれかを選択

優先：

/infinito-hiro

つまり：

pages/infinito-hiro.jsx

または：

app/infinito-hiro/page.jsx

既存構成に従うこと。

---

# Step 3
card.jsx をページとして統合

必要なら：

export default function InfinitoHiroCard()

に変更

---

# Step 4
CSS配置

card.css を以下へ

styles/
or
app/globals.css に統合

Tailwind使用時：

classNameベースに変換可能なら変換

---

# Step 5
画像配置

uploads フォルダを

/public/uploads

へ移動

URL例：

/uploads/5A0A3ED8-56A2-4873-A8CF-A23A07F8B1B1.jpeg

---

# Step 6
リンク確認

以下URLが正確に設定されていること

OMAKASE
https://omakase.in/r/rp424507

Instagram
https://www.instagram.com/hiroinfinito/

Google Map
https://maps.app.goo.gl/SM9z8k958HDCJvp88

Tabelog
https://tabelog.com/tokyo/A1308/A130801/13253595/

Facebook
https://www.facebook.com/infinitohiro/

---

# Step 7
電話リンク

tel:0357977610

---

# Step 8
Meta設定

title:

Infinito Hiro | Akasaka Italian Restaurant

description:

Infinito Hiro is an Italian restaurant in Akasaka, Tokyo.

---

# Step 9
ローカルビルド確認

必ず実行

npm install

npm run build

ビルド失敗したら修正してから進む

---

# Step 10
Git確認

git add .
git commit -m "Deploy Infinito Hiro digital card"
git push origin main

---

# Step 11
Vercel デプロイ

vercel --prod

---

# Step 12
デプロイ完了後

以下を出力

1.
本番URL

2.
QRコードに使う正式URL

---

# 完了条件

スマホ表示で

- レイアウト崩れなし
- ボタン押下正常
- リンク遷移正常
- 読み込み高速

---

# 禁止

- 全面作り直し
- Tailwind強制導入
- 新規フレームワーク導入
- 不要な依存追加
- SEO過剰設定
- アニメーション追加