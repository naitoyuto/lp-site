# lp-site
OKINAWA Motor show LP-site

<div id="top"></div>

<!-- シールド一覧 -->
<p style="display: inline">
    <!-- フロントエンドのフレームワーク -->
    <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
    <img src="https://img.shields.io/badge/-Html5-E34F26.svg?logo=html5&style=plastic">
    <!-- バックエンドのフレームワーク -->
    <img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
    <!-- インフラ一覧 -->
    <img src="https://img.shields.io/badge/-Vite-p.svg?logo=Vite&style=plastic">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

<!-- プロジェクト名 -->
## OKINAWA Motor Show LP-site

<!-- プロジェクトについて -->
## プロジェクトについて

JacaScript, HTML, TailwindCSSで構成しています。
大枠はindex.htmlを編集してください。
画像ファイルは/publicに保存してください。
JSはmain.jsに記載してください。

## 環境

| 言語・フレームワーク | バージョン |
| -------------------- | --------- |
| HTML5                |           |
| TailWindCSS          |           |
| JavaScript           |           |
| Vite                 |           |

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載　-->

```
.
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── a.jpg
│   └── hero.jpg
└── src
    ├── counter.js
    ├── main.js
    ├── style.css
    └── vite-env.d.ts

```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

### gitのクローン方法
クローンしてこのファイルをローカルフォルダに導入します。以下を実行します。実行場所は導入したいフォルダ内で行ってください。
```
git clone https://github.com/naitoyuto/lp-site.git
```

### npmをインストールしていない場合
以下を実行して command not found と表示された場合の対処法です。npmがインストールされていなければ、Viteをインストールすることができません。
```
npm -v
```
まず、以下を実行し、npmとnodeをインストールします。
```
brew install node
```
command not found と表示されてしまった場合はbrewもインストールされていない可能性があります。その場合は、Homebrewをインストールします。以下を実行してください。
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
次にbrewコマンドを有効化します。以下を実行してください。
```
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```
```
eval "$(/opt/homebrew/bin/brew shellenv)"
```
以上を実行したら、brewコマンドが使えるはずです。


### Viteをインストール
テンプレートは"Vanilla", スクリプトは"JavaScript"を選択してください

```
npm create vite@latest lp-site --template vanilla
```
```
cd lp-site
```
```
npm install
```

### TailWindCSSをCDN経由で導入します
index.html内に以下を記載してください。(git cloneしていれば、すでに記載されているはずです)

```
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My LP Site</title>

  <!-- ✅ Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- ✅ フォントやカスタム設定（任意） -->
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            noto: ['"Noto Sans JP"', 'sans-serif'],
          },
          colors: {
            primary: '#1e40af',
          }
        }
      }
    }
  </script>
</head>
```

### src/main.jsに以下を記載してください

```
document.getElementById("news-list").innerHTML = `
  <p class="text-gray-700">ここにお知らせが表示されます。</p>
`;
```

### 開発サーバーの起動
以下を実行すると、サーバーのIPアドレスが表示されるので、そのURLを開けばサイトが表示されます

```
npm run dev
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## トラブルシューティング

<p align="right">(<a href="#top">トップへ</a>)</p>
