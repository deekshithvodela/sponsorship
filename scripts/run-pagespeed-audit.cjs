const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = path.resolve('/home/drover/.gemini/antigravity-ide/brain/31a7ab59-1f8a-432c-8322-9cd222c2b894/scratch');
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

const CHROME_PATH = '/home/drover/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const URL = 'http://localhost:4173';

function runLighthouse(preset, outputPath) {
  console.log(`\n======================================================`);
  console.log(`Running Google Lighthouse / PageSpeed Audit: [${preset.toUpperCase()}]`);
  console.log(`Target URL: ${URL}`);
  console.log(`======================================================`);

  const presetFlag = preset === 'desktop' ? '--preset=desktop' : '--form-factor=mobile --screenEmulation.mobile=true';
  const cmd = `CHROME_PATH="${CHROME_PATH}" npx lighthouse ${URL} ${presetFlag} --output=json --output-path="${outputPath}" --chrome-flags="--headless=new --no-sandbox" --only-categories=performance,accessibility,best-practices,seo`;

  try {
    execSync(cmd, { stdio: 'pipe' });
  } catch (err) {
    console.error(`Error running Lighthouse for ${preset}:`, err.message);
  }

  if (!fs.existsSync(outputPath)) {
    throw new Error(`Output file not generated at ${outputPath}`);
  }

  const report = JSON.parse(fs.readFileSync(outputPath, 'utf8'));

  const categories = {};
  for (const [k, v] of Object.entries(report.categories)) {
    categories[v.title] = Math.round(v.score * 100);
  }

  const cwv = {
    FCP: report.audits['first-contentful-paint']?.displayValue,
    LCP: report.audits['largest-contentful-paint']?.displayValue,
    CLS: report.audits['cumulative-layout-shift']?.displayValue,
    TBT: report.audits['total-blocking-time']?.displayValue,
    SpeedIndex: report.audits['speed-index']?.displayValue,
  };

  const failingAudits = [];
  for (const [k, v] of Object.entries(report.audits)) {
    if (v.score !== null && v.score < 1 && v.scoreDisplayMode !== 'notApplicable' && v.scoreDisplayMode !== 'informative') {
      // Exclude is-crawlable as this is deliberately noindexed
      if (k === 'is-crawlable') continue;
      failingAudits.push({
        id: k,
        title: v.title,
        score: v.score,
        displayValue: v.displayValue || ''
      });
    }
  }

  console.log('\n--- CATEGORY SCORES ---');
  console.table(categories);

  console.log('\n--- CORE WEB VITALS ---');
  console.table(cwv);

  console.log('\n--- FAILING AUDITS (Excluding intentional noindex) ---');
  if (failingAudits.length === 0) {
    console.log('PERFECT: 0 failing audits! All quality and accessibility standards passed!');
  } else {
    console.table(failingAudits);
  }

  return { preset, categories, cwv, failingAudits };
}

async function main() {
  const mobileOutput = path.join(ARTIFACT_DIR, 'lh-production-mobile.json');
  const desktopOutput = path.join(ARTIFACT_DIR, 'lh-production-desktop.json');

  const mobileResults = runLighthouse('mobile', mobileOutput);
  const desktopResults = runLighthouse('desktop', desktopOutput);

  console.log('\n\n======================================================');
  console.log('--- FINAL AUDIT SUMMARY ---');
  console.log('Mobile Performance:', mobileResults.categories.Performance, '| Accessibility:', mobileResults.categories.Accessibility);
  console.log('Desktop Performance:', desktopResults.categories.Performance, '| Accessibility:', desktopResults.categories.Accessibility);
  console.log('======================================================\n');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
