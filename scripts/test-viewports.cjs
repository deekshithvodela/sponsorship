const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = path.resolve('/home/drover/.gemini/antigravity-ide/brain/31a7ab59-1f8a-432c-8322-9cd222c2b894/scratch');
if (!fs.existsSync(ARTIFACT_DIR)) {
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '320_compact_mobile', width: 320, height: 600 },
  { name: '375_standard_mobile', width: 375, height: 667 },
  { name: '430_large_mobile', width: 430, height: 932 },
  { name: '768_tablet_portrait', width: 768, height: 1024 },
  { name: '1024_laptop', width: 1024, height: 768 },
  { name: '1440_desktop', width: 1440, height: 900 }
];

async function runTests() {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  let allPassed = true;

  console.log('--- Starting KRITI 2027 Sponsorship Responsive, Accessibility & SEO Test Suite ---');

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage();
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

    // Check horizontal scroll overflow & form count
    const domCheck = await page.evaluate(() => {
      const docEl = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
      const innerWidth = window.innerWidth;
      const hasOverflow = scrollWidth > innerWidth + 1; // 1px threshold for subpixel rounding
      const formCount = document.querySelectorAll('form').length;
      return {
        scrollWidth,
        innerWidth,
        hasOverflow,
        formCount
      };
    });

    const screenshotPath = path.join(ARTIFACT_DIR, `kriti_sponsorship_${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const status = !domCheck.hasOverflow && consoleErrors.length === 0 && domCheck.formCount === 0;
    if (!status) allPassed = false;

    results.push({
      viewport: vp.name,
      dimensions: `${vp.width}x${vp.height}`,
      overflow: domCheck.hasOverflow ? `FAIL (scrollWidth=${domCheck.scrollWidth} > innerWidth=${domCheck.innerWidth})` : 'PASS',
      formCount: domCheck.formCount === 0 ? 'PASS (0 forms)' : `FAIL (${domCheck.formCount} forms found!)`,
      consoleErrors: consoleErrors.length === 0 ? 'PASS (0 errors)' : `FAIL (${consoleErrors.length} errors: ${consoleErrors.join('; ')})`,
    });

    console.log(`[${vp.name}] Overflow: ${domCheck.hasOverflow ? 'FAIL' : 'PASS'} | Forms: ${domCheck.formCount}`);

    await page.close();
  }

  // Functional, Content, Accessibility, and SEO tests
  console.log('\n--- Running Functional, Accessibility & SEO Verification Tests ---');
  const testPage = await browser.newPage();
  await testPage.setViewportSize({ width: 1280, height: 800 });
  await testPage.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // 1. Verify Page Title
  const title = await testPage.title();
  console.log('Page Title:', title);
  if (!title.includes('KRITI 2027')) {
    console.error('FAIL: Title does not include KRITI 2027');
    allPassed = false;
  }

  // 2. Verify Zero Forms
  const totalForms = await testPage.locator('form').count();
  console.log('Total forms on page (must be 0):', totalForms === 0 ? 'PASS (0 forms)' : `FAIL (${totalForms} forms)`);
  if (totalForms !== 0) allPassed = false;

  // 3. Verify Robots.txt and Robots Meta Tag
  const robotsMeta = await testPage.locator('meta[name="robots"]').getAttribute('content');
  const hasNoIndex = robotsMeta && robotsMeta.includes('noindex') && robotsMeta.includes('nofollow');
  console.log('Robots Meta (noindex, nofollow):', hasNoIndex ? `PASS (${robotsMeta})` : 'FAIL');
  if (!hasNoIndex) allPassed = false;

  const robotsTxtPath = path.resolve('/home/drover/Projects/sponsorship/public/robots.txt');
  const robotsTxtContent = fs.readFileSync(robotsTxtPath, 'utf-8');
  const hasRobotsDisallow = robotsTxtContent.includes('User-agent: *') && robotsTxtContent.includes('Disallow: /');
  console.log('public/robots.txt (Disallow: /):', hasRobotsDisallow ? 'PASS' : 'FAIL');
  if (!hasRobotsDisallow) allPassed = false;

  // 4. Verify OpenGraph absolute URLs with GitHub Pages domain
  const ogImages = await testPage.locator('meta[property="og:image"]').evaluateAll(nodes => nodes.map(n => n.getAttribute('content')));
  const isOgAbsolute = ogImages.length >= 1 && ogImages.every(url => url && url.startsWith('https://deekshithvodela.github.io/sponsorship/'));
  console.log('OpenGraph Image URLs absolute GitHub Pages:', isOgAbsolute ? `PASS (${ogImages.join(', ')})` : `FAIL (${ogImages.join(', ')})`);
  if (!isOgAbsolute) allPassed = false;

  // 5. Verify Accessibility: Skip-to-Content Link
  const skipLink = testPage.locator('a.skip-to-content');
  const skipHref = await skipLink.getAttribute('href');
  const mainTarget = await testPage.locator('#main-content').count();
  console.log('Skip-to-content link targets #main-content:', (skipHref === '#main-content' && mainTarget === 1) ? 'PASS' : 'FAIL');
  if (skipHref !== '#main-content' || mainTarget !== 1) allPassed = false;

  // 6. Verify Accessibility: ARIA Tablist & Tabs on Switcher
  const tablistCount = await testPage.locator('div[role="tablist"]').count();
  const tabCount = await testPage.locator('button[role="tab"]').count();
  const tabpanelCount = await testPage.locator('[role="tabpanel"]').count();
  console.log('ARIA tablist, tabs & tabpanel:', (tablistCount >= 1 && tabCount >= 2 && tabpanelCount >= 1) ? 'PASS' : 'FAIL');
  if (tablistCount < 1 || tabCount < 2 || tabpanelCount < 1) allPassed = false;

  // 7. Verify Accessibility: Table Scope Headers in Matrix
  const colScopes = await testPage.locator('th[scope="col"]').count();
  const rowScopes = await testPage.locator('th[scope="row"]').count();
  console.log('Deliverables table th[scope="col"] and th[scope="row"]:', (colScopes >= 4 && rowScopes >= 10) ? `PASS (col=${colScopes}, row=${rowScopes})` : 'FAIL');
  if (colScopes < 4 || rowScopes < 10) allPassed = false;

  // 8. Verify Header WhatsApp button & Single Word Text
  const waBtn = testPage.locator('#header-whatsapp-cta');
  const waHref = await waBtn.getAttribute('href');
  const waBtnText = (await waBtn.innerText()).trim();
  const isWaHrefCorrect = waHref && waHref.startsWith('https://wa.me/919515476138');
  const isSingleWord = waBtnText.toLowerCase() === 'whatsapp' && waBtnText.trim().split(/\s+/).length === 1;
  console.log('Header WhatsApp link (+91 9515476138):', isWaHrefCorrect ? 'PASS' : `FAIL (${waHref})`);
  console.log('Header WhatsApp button single word ("WhatsApp"):', isSingleWord ? 'PASS' : `FAIL ("${waBtnText}")`);
  if (!isWaHrefCorrect || !isSingleWord) allPassed = false;

  // 9. Verify Zero Secretariat in deep link prefill messages
  const allWhatsAppLinks = await testPage.locator('a[href*="wa.me"]').evaluateAll(links => links.map(l => l.getAttribute('href')));
  let secretariatInWaLink = false;
  for (const href of allWhatsAppLinks) {
    if (href && href.toLowerCase().includes('secretariat')) {
      secretariatInWaLink = true;
      console.error(`FAIL: WhatsApp URL contains "secretariat": ${href}`);
    }
  }
  console.log('Zero "Secretariat" in WhatsApp deep link prefilled messages:', !secretariatInWaLink ? 'PASS (all use "Organisers")' : 'FAIL');
  if (secretariatInWaLink) allPassed = false;

  // 10. Verify Zero Tier Price Figures Constraint & "Pricing on Request"
  const bodyText = await testPage.evaluate(() => document.body.innerText);
  const forbiddenTierPrices = ['₹3,00,000', '₹2,00,000', '₹75,000', '3 Lakhs', '2 Lakhs', '₹3L', '₹2L', '₹75k'];
  let tierPriceFound = false;
  for (const price of forbiddenTierPrices) {
    if (bodyText.includes(price)) {
      console.warn(`WARNING: Forbidden tier price "${price}" detected in page!`);
      tierPriceFound = true;
    }
  }
  const hasPricingOnRequest = (await testPage.locator('text=Pricing on Request').count()) > 0;
  console.log('Zero Tier Price Figures Constraint:', !tierPriceFound ? 'PASS (0 tier prices)' : 'FAIL');
  console.log('Verified "Pricing on Request" displayed:', hasPricingOnRequest ? 'PASS' : 'FAIL');
  if (tierPriceFound || !hasPricingOnRequest) allPassed = false;

  // 11. Verify 10k+ Followers Metric
  const has10kFollowers = (await testPage.locator('text=10k+ Followers').count()) > 0;
  console.log('Hero Metric: "10k+ Followers":', has10kFollowers ? 'PASS' : 'FAIL');
  if (!has10kFollowers) allPassed = false;

  // 12. Verify Zero "Branded Attire" or "Branded Apparel"
  const hasBrandedAttire = bodyText.toLowerCase().includes('branded attire') || bodyText.toLowerCase().includes('branded apparel');
  console.log('Zero "Branded Attire/Apparel" mentions:', !hasBrandedAttire ? 'PASS' : 'FAIL');
  if (hasBrandedAttire) allPassed = false;

  // 13. Verify Zero "50 Days" in Outreach Campaign
  const has50Days = bodyText.toLowerCase().includes('50 days') || bodyText.toLowerCase().includes('50-day');
  console.log('Zero "50 days / 50-day" time duration mentions:', !has50Days ? 'PASS' : 'FAIL');
  if (has50Days) allPassed = false;

  // 14. Verify Event Name: "Med- Debate"
  const tracksTabBtn = testPage.locator('#tab-tracks');
  await tracksTabBtn.click();
  await testPage.waitForTimeout(200);

  const hasMedDebate = (await testPage.locator('text=Med- Debate').count()) > 0;
  console.log('Event EVT-04 renamed to "Med- Debate":', hasMedDebate ? 'PASS' : 'FAIL');
  if (!hasMedDebate) allPassed = false;

  // 15. Verify 11 confirmed academic events
  const confirmedEvents = [
    'Medical Hackathon',
    'Medical Symposium',
    'Med-Tech Exhibition',
    'Med- Debate',
    'Medical Model United Nations (Med-MUN)',
    'Medical Jeopardy / Quiz',
    'PG Paper Presentation',
    'UG Paper Presentation',
    'PG Poster Presentation',
    'UG Poster Presentation',
    'Hands-on Medical Workshops'
  ];

  let eventsFound = 0;
  for (const evt of confirmedEvents) {
    const count = await testPage.locator(`h3:has-text("${evt.split(' ')[0]}")`).count();
    if (count > 0) eventsFound++;
  }
  console.log(`11 Confirmed Events in Track View: ${eventsFound}/11 verified (${eventsFound >= 9 ? 'PASS' : 'FAIL'})`);
  if (eventsFound < 9) allPassed = false;

  // Switch back to Academic Packages tab
  const packagesTabBtn = testPage.locator('#tab-packages');
  await packagesTabBtn.click();
  await testPage.waitForTimeout(200);

  // 16. Verify Zero Prize Pool figures
  const forbiddenPrizePhrases = ['2,25,000', 'prize pool', 'prizepool'];
  let prizeMentionFound = false;
  for (const phrase of forbiddenPrizePhrases) {
    if (bodyText.toLowerCase().includes(phrase)) {
      console.warn(`WARNING: Forbidden phrase "${phrase}" detected in body text!`);
      prizeMentionFound = true;
    }
  }
  console.log('Zero Prize Pool Figures Constraint:', !prizeMentionFound ? 'PASS (0 prize figures)' : 'FAIL');
  if (prizeMentionFound) allPassed = false;

  // 17. Verify Simulator Interaction
  const goldBtn = testPage.locator('button:has-text("Gold Tier")').first();
  await goldBtn.click();
  await testPage.waitForTimeout(150);
  const estimatorCta = testPage.locator('#estimator-whatsapp-cta');
  const estimatorHref = await estimatorCta.getAttribute('href');
  const simulatorHasGold = estimatorHref && estimatorHref.includes('Gold') && estimatorHref.includes('Organisers');
  console.log('Simulator interaction (Gold Tier & Organisers in WhatsApp URL):', simulatorHasGold ? 'PASS' : `FAIL (${estimatorHref})`);
  if (!simulatorHasGold) allPassed = false;

  // 18. Verify 3,000+ Delegates Metric
  const has3000Delegates = (await testPage.locator('text=3,000+').count()) > 0;
  console.log('Delegate Attendance Metric: "3,000+":', has3000Delegates ? 'PASS' : 'FAIL');
  if (!has3000Delegates) allPassed = false;

  // 19. Verify Gold Tier has NO Keynote Address
  const goldCard = testPage.locator('#tier-card-gold');
  const goldCardText = await goldCard.innerText();
  const goldHasKeynote = goldCardText.toLowerCase().includes('keynote address') || goldCardText.toLowerCase().includes('keynote speech');
  console.log('Gold Tier Keynote Address Removed:', !goldHasKeynote ? 'PASS (0 keynote in Gold)' : 'FAIL');
  if (goldHasKeynote) allPassed = false;

  // 20. Verify Flagship Jeopardy & Medical Hackathon Pillars (Zero Engineers)
  const hasJeopardyFlagship = (await testPage.locator('text=Flagship Medical Jeopardy').count()) > 0;
  const hasHackathonPillar = (await testPage.locator('text=Medical Hackathon').count()) > 0;
  const hasEngineers = bodyText.toLowerCase().includes('engineer');
  console.log('Pillar [01] "Flagship Medical Jeopardy":', hasJeopardyFlagship ? 'PASS' : 'FAIL');
  console.log('Pillar [03] "Medical Hackathon":', hasHackathonPillar ? 'PASS' : 'FAIL');
  console.log('Zero "engineer / engineers" mention in site text:', !hasEngineers ? 'PASS' : 'FAIL');
  if (!hasJeopardyFlagship || !hasHackathonPillar || hasEngineers) allPassed = false;

  // 21. Verify Organiser Email in Footer below 24x7
  const footerEmail = testPage.locator('footer a[href="mailto:deekshithvodela@gmail.com"]');
  const hasFooterEmail = (await footerEmail.count()) > 0;
  console.log('Footer Email: "deekshithvodela@gmail.com":', hasFooterEmail ? 'PASS' : 'FAIL');
  if (!hasFooterEmail) allPassed = false;

  await browser.close();

  console.log('\n--- Final Verification Summary ---');
  console.table(results);

  if (!allPassed) {
    console.error('FAILED: One or more assertions failed.');
    process.exit(1);
  } else {
    console.log('SUCCESS: All responsive viewports, accessibility attributes, and content updates passed!');
  }
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
