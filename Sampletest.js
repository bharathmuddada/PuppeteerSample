const puppeteer = require('puppeteer');

//Test to take screenshot of cardlytics India
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://cardlytics.com/',{waitUntil: 'load', timeout: 0});
  const href = await page.$$eval('a', as => as.map(a => a.href));
  console.log(href);
  let tagname = 'a';
    await page.$$eval(tagname, anchors => {
        anchors.map(anchor => {
            console.log(anchor.textContent)
             if(anchor.textContent == 'Cardlytics India') {
                anchor.click();
                return
            }
        })
    });
  await page.screenshot({path: 'Vizag.png'});
  await browser.close();
})();

// find all the links in the cardlytics site 