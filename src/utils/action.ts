class BasePage {

  async tapOn(selector: WebdriverIO.Element) {
    await selector.click();
    await driver.pause(2000);
  }

  async expectToExist(selector: WebdriverIO.Element) {
    await selector.waitForExist();
    await expect(selector).toBeExisting();
    await driver.pause(1000);
  }

  async expectToNotExist(selector: WebdriverIO.Element) {
    await driver.pause(1000);
    await expect(selector).not.toBeExisting();
  }

  async expectToHaveText(selector: WebdriverIO.Element, value: string) {
    await expect(selector).toHaveText(value);
    await driver.pause(1000);
  }

  async setValue(selector: WebdriverIO.Element, value: string) {
    await selector.setValue(value);
  }

  async scrollIntoView(selector: WebdriverIO.Element) {
    await selector.scrollIntoView();
  }

}

export default new BasePage();