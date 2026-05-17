# Google Indexing API Setup

求人ページを即座にGoogle for Jobsにインデックスするためのスクリプトです。

## セットアップ手順

### 1. Google Cloud Consoleでの設定

1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス
2. 新規プロジェクトを作成または既存プロジェクトを選択
3. 「APIとサービス」→「ライブラリ」→「Indexing API」を検索して有効化
4. 「認証情報」→「認証情報を作成」→「サービスアカウント」を作成
5. JSONキーをダウンロードして`service-account-key.json`として保存

### 2. Search Consoleでの権限設定

1. [Google Search Console](https://search.google.com/search-console)にアクセス
2. `https://infinito.yamadafooddev.com`のプロパティを選択
3. 「設定」→「ユーザーと権限」→「ユーザーを追加」
4. サービスアカウントのメール（例：`indexing-api@project-id.iam.gserviceaccount.com`）を追加
5. 権限レベルを「所有者」に設定

### 3. スクリプトの実行

```bash
# scriptsディレクトリに移動
cd scripts

# 依存関係をインストール
npm install

# サービスアカウントキーを配置
# service-account-key.json をこのディレクトリに配置

# インデックスリクエストを送信
npm run index
```

## 実行タイミング

以下のタイミングで実行することを推奨します：

- 新規求人情報を追加した時
- 求人情報を更新した時
- 週に1回の定期実行（GitHub Actionsで自動化可能）

## 注意事項

- **1日のリクエスト上限**: 200リクエスト/日
- **効果**: 通常48時間以内にインデックスされます（Search Consoleより高速）
- **セキュリティ**: `service-account-key.json`は絶対にGitにコミットしないでください

## GitHub Actionsでの自動化例

`.github/workflows/indexing.yml`:

```yaml
name: Google Indexing API

on:
  push:
    branches: [main]
    paths:
      - 'app/infinito-hiro/recruit/**'
  schedule:
    - cron: '0 9 * * MON' # 毎週月曜日9時（JST）

jobs:
  index:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: cd scripts && npm install
      - run: cd scripts && npm run index
        env:
          GOOGLE_APPLICATION_CREDENTIALS: ${{ secrets.GOOGLE_CREDENTIALS }}
```

## トラブルシューティング

### エラー: Permission denied

→ Search Consoleでサービスアカウントに「所有者」権限が付与されているか確認

### エラー: API not enabled

→ Google Cloud ConsoleでIndexing APIが有効になっているか確認

### エラー: Invalid URL

→ URLが実際にアクセス可能で、robots.txtでブロックされていないか確認