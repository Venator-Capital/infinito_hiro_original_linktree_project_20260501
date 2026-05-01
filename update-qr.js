const QRCode = require('qrcode');

// 新しいURLを設定（GitHub PagesまたはVercel個人アカウント）
const newUrl = process.argv[2] || 'https://YOUR_USERNAME.github.io/infinito-hiro-card/infinito-hiro';

console.log('新URLでQRコード生成中:', newUrl);

const options = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.92,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
  width: 512,
};

async function updateQRCode() {
  try {
    await QRCode.toFile('public/infinito-hiro-qr.png', newUrl, options);
    console.log('✅ PNG版更新完了');

    const svgOptions = { ...options, type: 'svg', width: 512 };
    await QRCode.toFile('public/infinito-hiro-qr.svg', newUrl, svgOptions);
    console.log('✅ SVG版更新完了');

    console.log('\n新URL:', newUrl);
    console.log('QRコード更新完了！');
  } catch (err) {
    console.error('エラー:', err);
  }
}

updateQRCode();