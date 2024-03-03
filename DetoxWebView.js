const detox = require('detox');
const { device, element, by } = detox;

class DetoxWebView {
  async switchToWebView(webViewIdentifier) {
    await device.waitFor(element(by.id(webViewIdentifier))).toBeVisible().withTimeout(5000);

    const webViewHandles = await element.all(by.webView()).get();
    const lastWebViewHandle = webViewHandles[webViewHandles.length - 1];

    await device.element(lastWebViewHandle).tap();
  }

  async tapElementInWebView(elementLocator) {
    await element(by.webView()).tap(elementLocator);
  }

  async typeTextInWebView(text, elementLocator) {
    await element(by.webView()).typeText(text, elementLocator);
  }

  async getTextFromWebView(elementLocator) {
    return await element(by.webView()).getText(elementLocator);
  }

  async waitForWebViewElement(elementLocator, timeout = 10000) {
    await element(by.webView()).waitFor(element(by.id(elementLocator))).toBeVisible().withTimeout(timeout);
  }
}

module.exports = new DetoxWebView();
