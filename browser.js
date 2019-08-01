
class BrowserPage {
  constructor(page) {
    this.page = page;
  }
  async goto(url) {
    try {
      await this.page.goto(url);
    } catch (error) {
      console.log('Error', error)
    }
  }
}

module.exports = BrowserPage;
