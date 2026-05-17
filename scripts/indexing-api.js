const { google } = require('googleapis');

// Google Indexing API を使用して求人ページを即座にインデックス
async function indexJobPages() {
  // サービスアカウントの認証情報を設定
  // JSONキーファイルのパスを環境変数から取得
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS || './service-account-key.json',
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  // インデックスしたい求人ページのURL
  const jobUrls = [
    'https://infinito.yamadafooddev.com/infinito-hiro/recruit',
    'https://infinito.yamadafooddev.com/infinito-hiro/recruit/chef-candidate',
    'https://infinito.yamadafooddev.com/infinito-hiro/recruit/kitchen-staff',
    'https://infinito.yamadafooddev.com/infinito-hiro/recruit/service-staff',
  ];

  for (const url of jobUrls) {
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED', // 新規または更新の場合
        },
      });

      console.log(`✅ ${url} のインデックスリクエスト送信成功`);
      console.log(`   通知時刻: ${response.data.urlNotificationMetadata?.latestUpdate?.notifyTime}`);
    } catch (error) {
      console.error(`❌ ${url} のインデックスリクエスト失敗:`, error.message);
    }
  }
}

// 実行
indexJobPages().catch(console.error);