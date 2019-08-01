const puppeteer = require('puppeteer');
const BrowserPage = require('./browser')

const init = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  const myBrowser = new BrowserPage(page)
  await myBrowser.goto(proces.env.PAGE_URL);
  myBrowser.login()
  await browser.close()
}

init();
