
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

  async login() {
    // Type into search box.
    try {
      await this.page.type('#login', process.env.SCP_USER)
      await this.page.type('#clave', process.env.SCP_PASSWORD)
      await this.page.click('#login_btn')
      await this.page.waitForNavigation()
    } catch (error) {
      console.log("error",error)
    }
  }
}

module.exports = BrowserPage;
