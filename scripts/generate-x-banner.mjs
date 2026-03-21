import { chromium } from 'playwright';

const html = `<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1500px;
      height: 500px;
      background: #162415;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(100px);
    }
    .glow-1 { width: 900px; height: 900px; right: -150px; top: -250px; background: rgba(104,239,63,0.06); }
    .glow-2 { width: 600px; height: 600px; left: -100px; top: -150px; background: rgba(104,239,63,0.04); }
    .glow-3 { width: 500px; height: 500px; left: 500px; bottom: -250px; background: rgba(104,239,63,0.03); }

    .content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      text-align: center;
    }
    .logo-row {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .logo-icon {
      width: 80px;
      height: 80px;
    }
    .logo-text {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 58px;
      color: #68ef3f;
      letter-spacing: -1px;
      line-height: 1;
    }
    .tagline {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 26px;
      color: rgba(255,255,255,0.5);
      max-width: 700px;
    }
    .accent-line {
      width: 60px;
      height: 2px;
      background: rgba(104,239,63,0.3);
      border-radius: 1px;
    }
    .url {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: rgba(104,239,63,0.6);
    }
  </style>
</head>
<body>
  <div class="glow glow-1"></div>
  <div class="glow glow-2"></div>
  <div class="glow glow-3"></div>
  <div class="content">
    <div class="logo-row">
      <svg class="logo-icon" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="140" rx="28" fill="#68ef3f"/>
        <path d="M34 52C34 52 34 104 70 104C106 104 106 52 106 52" stroke="#162415" stroke-width="13" stroke-linecap="round"/>
        <circle cx="70" cy="38" r="8" fill="#162415"/>
      </svg>
      <span class="logo-text">ply</span>
    </div>
    <div class="tagline">Soft skills training that lives in Slack</div>
    <div class="accent-line"></div>
    <div class="url">uply.work</div>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1500, height: 500 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: 'public/images/x-banner.png', type: 'png' });
await browser.close();
console.log('X banner generated: public/images/x-banner.png');
