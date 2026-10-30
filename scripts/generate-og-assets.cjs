const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '../public');
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// HTML template for 1200x630 (1.91:1) and 1200x675 (16:9)
function getBannerHtml(width, height) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@500;600;700&family=IBM+Plex+Mono:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: ${width}px;
      height: ${height}px;
      background-color: #0f0f0f;
      color: #faf6ec;
      font-family: 'Barlow', sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 56px 64px;
      position: relative;
      background-image: 
        repeating-linear-gradient(to right, #242424 0, #242424 1px, transparent 1px, transparent 48px),
        repeating-linear-gradient(to bottom, #242424 0, #242424 1px, transparent 1px, transparent 48px);
    }
    .corner-bracket {
      position: absolute;
      width: 24px;
      height: 24px;
      border-color: #e5483c;
      border-style: solid;
      pointer-events: none;
    }
    .top-left { top: 20px; left: 20px; border-width: 3px 0 0 3px; }
    .top-right { top: 20px; right: 20px; border-width: 3px 3px 0 0; }
    .bottom-left { bottom: 20px; left: 20px; border-width: 0 0 3px 3px; }
    .bottom-right { bottom: 20px; right: 20px; border-width: 0 3px 3px 0; }

    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #2a2a2a;
      padding-bottom: 24px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #e5483c;
      box-shadow: 0 0 12px #e5483c;
    }
    .brand-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 42px;
      font-weight: 800;
      letter-spacing: 0.02em;
      color: #faf6ec;
    }
    .brand-title span { color: #e5483c; }
    .brand-divider { color: #7e7c77; font-size: 26px; }
    .brand-year {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 24px;
      color: #aaa497;
      letter-spacing: 0.12em;
    }
    .college-tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 6px 14px;
      background: #171717;
      border: 1px solid #333333;
      color: #d4cdbc;
    }

    .main-content {
      margin-top: 10px;
    }
    .category-tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: #e5483c;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .hero-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 72px;
      line-height: 0.95;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.01em;
      color: #faf6ec;
      max-width: 980px;
    }
    .hero-title span { color: #e5483c; }
    .subhead {
      font-size: 20px;
      color: #aaa497;
      margin-top: 16px;
      max-width: 860px;
      line-height: 1.4;
    }

    .footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #2a2a2a;
      padding-top: 24px;
    }
    .metrics-bar {
      display: flex;
      gap: 28px;
    }
    .metric-item {
      display: flex;
      flex-direction: column;
    }
    .metric-val {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 22px;
      font-weight: 700;
      color: #faf6ec;
    }
    .metric-lbl {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #7e7c77;
      margin-top: 2px;
    }
    .cta-pill {
      display: flex;
      align-items: center;
      gap: 10px;
      background: #25D366;
      color: #000000;
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 700;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 12px 20px;
    }
  </style>
</head>
<body>
  <div class="corner-bracket top-left"></div>
  <div class="corner-bracket top-right"></div>
  <div class="corner-bracket bottom-left"></div>
  <div class="corner-bracket bottom-right"></div>

  <div class="header-row">
    <div class="brand">
      <div class="dot"></div>
      <div class="brand-title">kriti<span>.</span></div>
      <div class="brand-divider">·</div>
      <div class="brand-year">2027</div>
    </div>
    <div class="college-tag">Kakatiya Medical College · Warangal</div>
  </div>

  <div class="main-content">
    <div class="category-tag">[ OFFICIAL PARTNERSHIP & SPONSORSHIP PROSPECTUS ]</div>
    <h1 class="hero-title">Academic Packages &amp; Event Tracks<span>.</span></h1>
    <p class="subhead">Platinum Tier · Gold Tier · Silver Tier · 11 Confirmed Academic Event Tracks. Connect directly with over 3,000 medical students, clinicians, and researchers.</p>
  </div>

  <div class="footer-row">
    <div class="metrics-bar">
      <div class="metric-item">
        <span class="metric-val">3,000+</span>
        <span class="metric-lbl">Delegates Attending</span>
      </div>
      <div class="metric-item">
        <span class="metric-val">50+ Colleges</span>
        <span class="metric-lbl">Campus PR Outreach</span>
      </div>
      <div class="metric-item">
        <span class="metric-val">11 Events</span>
        <span class="metric-lbl">Academic Tracks</span>
      </div>
      <div class="metric-item">
        <span class="metric-val">10k+ Followers</span>
        <span class="metric-lbl">Digital Reach</span>
      </div>
    </div>

    <div class="cta-pill">
      <span>WhatsApp Organisers · 24x7</span>
    </div>
  </div>
</body>
</html>`;
}

// HTML template for 600x600 (1:1 WhatsApp square thumbnail)
function getSquareHtml() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Barlow:wght@500;600;700&family=IBM+Plex+Mono:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 600px;
      height: 600px;
      background-color: #0f0f0f;
      color: #faf6ec;
      font-family: 'Barlow', sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 40px;
      position: relative;
      background-image: 
        repeating-linear-gradient(to right, #242424 0, #242424 1px, transparent 1px, transparent 36px),
        repeating-linear-gradient(to bottom, #242424 0, #242424 1px, transparent 1px, transparent 36px);
    }
    .corner-bracket {
      position: absolute;
      width: 20px;
      height: 20px;
      border-color: #e5483c;
      border-style: solid;
      pointer-events: none;
    }
    .top-left { top: 16px; left: 16px; border-width: 3px 0 0 3px; }
    .top-right { top: 16px; right: 16px; border-width: 3px 3px 0 0; }
    .bottom-left { bottom: 16px; left: 16px; border-width: 0 0 3px 3px; }
    .bottom-right { bottom: 16px; right: 16px; border-width: 0 3px 3px 0; }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #e5483c;
      box-shadow: 0 0 10px #e5483c;
    }
    .brand-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 38px;
      font-weight: 800;
      color: #faf6ec;
    }
    .brand-title span { color: #e5483c; }
    .brand-year {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 20px;
      color: #7e7c77;
      letter-spacing: 0.1em;
    }

    .tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: #e5483c;
      margin-top: 14px;
    }
    .title {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 46px;
      line-height: 1.05;
      font-weight: 800;
      text-transform: uppercase;
      color: #faf6ec;
      margin-top: 6px;
    }
    .title span { color: #e5483c; }
    .college {
      font-size: 15px;
      color: #d4cdbc;
      margin-top: 8px;
      font-weight: 500;
    }

    .grid-metrics {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin: 16px 0;
      padding: 16px;
      background: #141414;
      border: 1px solid #2a2a2a;
    }
    .m-item {
      display: flex;
      flex-direction: column;
    }
    .m-val {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 18px;
      font-weight: 700;
      color: #faf6ec;
    }
    .m-lbl {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      color: #7e7c77;
    }

    .cta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: #25D366;
      color: #000;
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 12px;
    }
  </style>
</head>
<body>
  <div class="corner-bracket top-left"></div>
  <div class="corner-bracket top-right"></div>
  <div class="corner-bracket bottom-left"></div>
  <div class="corner-bracket bottom-right"></div>

  <div>
    <div class="brand">
      <div class="dot"></div>
      <div class="brand-title">kriti<span>.</span></div>
      <div class="brand-year">2027</div>
    </div>
    <div class="tag">[ SPONSORSHIP PROSPECTUS ]</div>
    <div class="title">Academic Packages &amp; Event Tracks<span>.</span></div>
    <div class="college">Kakatiya Medical College · Warangal</div>
  </div>

  <div class="grid-metrics">
    <div class="m-item">
      <span class="m-val">3,000+</span>
      <span class="m-lbl">Medicos &amp; Faculty</span>
    </div>
    <div class="m-item">
      <span class="m-val">50+ Colleges</span>
      <span class="m-lbl">Statewide PR</span>
    </div>
    <div class="m-item">
      <span class="m-val">11 Events</span>
      <span class="m-lbl">Academic Tracks</span>
    </div>
    <div class="m-item">
      <span class="m-val">10k+ Followers</span>
      <span class="m-lbl">Digital Reach</span>
    </div>
  </div>

  <div class="cta">
    <span>WhatsApp Organisers · Available 24x7</span>
  </div>
</body>
</html>`;
}

// Icon HTML template for Favicons (48x48, 96x96, 180x180, 192x192, 512x512)
function getIconHtml(size) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: ${size}px;
      height: ${size}px;
      background-color: #0f0f0f;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    .badge {
      width: ${Math.round(size * 0.88)}px;
      height: ${Math.round(size * 0.88)}px;
      background-color: #161616;
      border: ${Math.max(1, Math.round(size * 0.04))}px solid #e5483c;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .letter {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: ${Math.round(size * 0.58)}px;
      color: #faf6ec;
      line-height: 1;
      margin-top: -${Math.round(size * 0.04)}px;
    }
    .dot {
      position: absolute;
      width: ${Math.max(3, Math.round(size * 0.14))}px;
      height: ${Math.max(3, Math.round(size * 0.14))}px;
      background-color: #e5483c;
      border-radius: 50%;
      top: ${Math.round(size * 0.14)}px;
      right: ${Math.round(size * 0.14)}px;
    }
  </style>
</head>
<body>
  <div class="badge">
    <div class="letter">K</div>
    <div class="dot"></div>
  </div>
</body>
</html>`;
}

async function generateAll() {
  const browser = await chromium.launch({ headless: true });
  console.log('Generating KRITI 2027 OpenGraph & Favicon Suite...');

  // 1. 1200x630 (1.91:1 standard landscape)
  const page1 = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page1.setContent(getBannerHtml(1200, 630), { waitUntil: 'networkidle' });
  await page1.screenshot({ path: path.join(PUBLIC_DIR, 'og-image.png'), quality: 90, type: 'jpeg' });
  // Also save PNG version
  await page1.screenshot({ path: path.join(PUBLIC_DIR, 'og-image-1200x630.png') });
  await page1.close();
  console.log('✓ Created og-image.png (1200x630)');

  // 2. 1200x675 (16:9 Google Discover)
  const page2 = await browser.newPage({ viewport: { width: 1200, height: 675 } });
  await page2.setContent(getBannerHtml(1200, 675), { waitUntil: 'networkidle' });
  await page2.screenshot({ path: path.join(PUBLIC_DIR, 'og-image-16x9.png'), quality: 90, type: 'jpeg' });
  await page2.close();
  console.log('✓ Created og-image-16x9.png (1200x675)');

  // 3. 600x600 (1:1 WhatsApp square thumbnail)
  const page3 = await browser.newPage({ viewport: { width: 600, height: 600 } });
  await page3.setContent(getSquareHtml(), { waitUntil: 'networkidle' });
  await page3.screenshot({ path: path.join(PUBLIC_DIR, 'og-image-square.png'), quality: 90, type: 'jpeg' });
  await page3.close();
  console.log('✓ Created og-image-square.png (600x600)');

  // 4. Favicons and PWA Icons
  const iconSizes = [
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-96x96.png', size: 96 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'pwa-192x192.png', size: 192 },
    { name: 'pwa-512x512.png', size: 512 },
  ];

  for (const icon of iconSizes) {
    const iconPage = await browser.newPage({ viewport: { width: icon.size, height: icon.size } });
    await iconPage.setContent(getIconHtml(icon.size), { waitUntil: 'networkidle' });
    await iconPage.screenshot({ path: path.join(PUBLIC_DIR, icon.name) });
    await iconPage.close();
    console.log(`✓ Created ${icon.name} (${icon.size}x${icon.size})`);
  }

  // Also copy 48x48 to favicon.ico for legacy browsers
  fs.copyFileSync(path.join(PUBLIC_DIR, 'favicon-48x48.png'), path.join(PUBLIC_DIR, 'favicon.ico'));
  console.log('✓ Created favicon.ico');

  await browser.close();

  // Check file sizes
  console.log('\n--- Asset File Size Verification (Must be < 100 KB) ---');
  const files = fs.readdirSync(PUBLIC_DIR);
  for (const f of files) {
    const stat = fs.statSync(path.join(PUBLIC_DIR, f));
    const kb = (stat.size / 1024).toFixed(1);
    console.log(`${f}: ${kb} KB ${stat.size < 102400 ? '(PASS < 100 KB)' : '(WARNING > 100 KB)'}`);
  }
}

generateAll().catch(err => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
