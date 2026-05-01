const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Infinito Hiroページの本番URL
const url = 'https://infinito-hiro.vercel.app/infinito-hiro';

// QRコード生成オプション
const options = {
  errorCorrectionLevel: 'H', // 高いエラー訂正レベル（ロゴを入れる場合に推奨）
  type: 'image/png',
  quality: 0.92,
  margin: 2,
  color: {
    dark: '#000000',  // QRコードの暗い部分
    light: '#FFFFFF', // QRコードの明るい部分（背景）
  },
  width: 512, // 高解像度
};

// QRコードをファイルとして保存
async function generateQRCode() {
  try {
    // PNGファイルとして保存
    await QRCode.toFile('public/infinito-hiro-qr.png', url, options);
    console.log('QRコード生成成功: public/infinito-hiro-qr.png');

    // SVG版も生成（スケーラブル）
    const svgOptions = {
      ...options,
      type: 'svg',
      width: 512,
    };
    await QRCode.toFile('public/infinito-hiro-qr.svg', url, svgOptions);
    console.log('QRコード生成成功: public/infinito-hiro-qr.svg');

    // Data URLも生成（HTMLに直接埋め込み可能）
    const dataUrl = await QRCode.toDataURL(url, options);
    console.log('\nData URL (最初の100文字):', dataUrl.substring(0, 100) + '...');

    // ターミナルにも表示
    console.log('\n=== QRコード（ターミナル表示） ===');
    const terminal = await QRCode.toString(url, { type: 'terminal' });
    console.log(terminal);

    console.log('\n✅ QRコード生成完了！');
    console.log('📁 保存場所:');
    console.log('  - PNG: public/infinito-hiro-qr.png');
    console.log('  - SVG: public/infinito-hiro-qr.svg');
    console.log('🔗 URL:', url);

  } catch (err) {
    console.error('エラー:', err);
  }
}

generateQRCode();