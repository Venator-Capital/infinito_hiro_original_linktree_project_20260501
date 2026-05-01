const QRCode = require('qrcode');
const fs = require('fs');

// 最終的なURL
const finalUrl = 'https://infinito.yamadafooddev.com/infinito-hiro';

// 印刷用高解像度設定
const printOptions = {
  errorCorrectionLevel: 'H', // 最高エラー訂正レベル（ロゴ入れ対応）
  type: 'image/png',
  quality: 1.0, // 最高品質
  margin: 4, // 余白を多めに（名刺デザインに合わせやすい）
  color: {
    dark: '#000000',  // 黒
    light: '#FFFFFF', // 白
  },
  width: 2048, // 超高解像度（印刷品質）
};

// ベクター形式（無限拡大可能）
const svgOptions = {
  errorCorrectionLevel: 'H',
  type: 'svg',
  width: 2048,
  margin: 4,
  color: {
    dark: '#000000',
    light: '#FFFFFF',
  },
};

// PDF用EPS形式のデータ
const epsOptions = {
  errorCorrectionLevel: 'H',
  type: 'terminal',
  small: true,
};

async function generatePrintQR() {
  console.log('🎨 名刺印刷用QRコード生成中...');
  console.log('URL:', finalUrl);
  console.log('');

  try {
    // 1. 超高解像度PNG（印刷用）
    await QRCode.toFile('public/qr-print-2048.png', finalUrl, printOptions);
    console.log('✅ 超高解像度PNG生成完了: qr-print-2048.png (2048x2048px)');

    // 2. 高解像度PNG（Web/プレビュー用）
    await QRCode.toFile('public/qr-print-1024.png', finalUrl, {...printOptions, width: 1024});
    console.log('✅ 高解像度PNG生成完了: qr-print-1024.png (1024x1024px)');

    // 3. 標準解像度PNG（一般用）
    await QRCode.toFile('public/qr-print-512.png', finalUrl, {...printOptions, width: 512});
    console.log('✅ 標準解像度PNG生成完了: qr-print-512.png (512x512px)');

    // 4. SVG（ベクター形式・無限拡大可能）
    await QRCode.toFile('public/qr-print.svg', finalUrl, svgOptions);
    console.log('✅ SVGベクター生成完了: qr-print.svg（拡大しても劣化なし）');

    // 5. Base64データURL（デザインソフト貼り付け用）
    const dataUrl = await QRCode.toDataURL(finalUrl, printOptions);
    fs.writeFileSync('public/qr-print-base64.txt', dataUrl);
    console.log('✅ Base64データ生成完了: qr-print-base64.txt');

    console.log('\n📐 推奨サイズ（名刺用）:');
    console.log('  • 15mm × 15mm（最小推奨）');
    console.log('  • 20mm × 20mm（標準）');
    console.log('  • 25mm × 25mm（読み取りやすい）');

    console.log('\n🖨 印刷用ファイル:');
    console.log('  • ベクター形式: qr-print.svg（Adobe Illustrator等）');
    console.log('  • 高解像度PNG: qr-print-2048.png（Photoshop等）');
    console.log('  • プレビュー用: qr-print-512.png');

    console.log('\n✨ 名刺印刷用QRコード生成完了！');

  } catch (err) {
    console.error('エラー:', err);
  }
}

generatePrintQR();