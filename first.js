const { chromium } = require('playwright');

( async() => {//anonynous arrow function
  //function code

  //launching browser
  const browser = await chromium.launch({headless:false, slowMo: 100});
  //creating a page inside a browser
  const page = await browser.newPage();
  //navigating to site
  await page.goto('https://google.com');
  //closing browser
  await browser.close();

})();