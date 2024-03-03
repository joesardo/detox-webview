const detox = require('detox');
const { device, element, by } = detox;

const switchToWebView = async (webViewIdentifier) => {
  await device.waitFor(element(by.id(webViewIdentifier))).toBeVisible().withTimeout(5000);

  const webViewHandles = await element.all(by.webView()).get();
  const lastWebViewHandle = webViewHandles[webViewHandles.length - 1];

  await device.element(lastWebViewHandle).tap();
}

const tapElementInWebView = async (elementLocator) => {
  await element(by.webView()).tap(elementLocator);
}

const typeTextInWebView = async (text, elementLocator) => {
  await element(by.webView()).typeText(text, elementLocator);
}

const getTextFromWebView = async (elementLocator) => {
  return await element(by.webView()).getText(elementLocator);
}

const waitForWebViewElement = async (elementLocator, timeout = 10000) => {
  await element(by.webView()).waitFor(element(by.id(elementLocator))).toBeVisible().withTimeout(timeout);
}

module.exports = {
  switchToWebView,
  tapElementInWebView,
  typeTextInWebView,
  getTextFromWebView,
  waitForWebViewElement
}