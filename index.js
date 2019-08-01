const puppeteer = require('puppeteer');
const BrowserPage = require('./browser')

const init = async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  const myBrowser = new BrowserPage(page)
  console.log(process.env.PAGE_URL)
  await myBrowser.goto(process.env.PAGE_URL);
  await browser.close()
}

init();
