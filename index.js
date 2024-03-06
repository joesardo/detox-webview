const detox = require('detox');
const { expect, web, by } = detox;

const switchToWebViewElement = async (matcher, element) => {
  switch (matcher) {
    case 'id':
      return web.element(by.web.id(element));
  
    case 'className':
      return web.element(by.web.className(element));
    
    case 'cssSelector':
      return web.element(by.web.cssSelector(element));

    case 'elementName':
      return web.element(by.web.name(element));
    
    case 'xpath':
      return web.element(by.web.xpath(element));
    
    case 'href':
      return web.element(by.web.href(element));

    case 'hrefContains':
      return web.element(by.web.hrefContains(element));
    
    case 'tag':
      return web.element(by.web.tag(element));
  }
}

const expectWebElement = async (matcher, element, expectation, text = '') => {
  const innerElement = await switchToWebViewElement(matcher, element);
  switch (expectation) {
    case 'toExist':
      const test = web.element(by.web.name(element));
      await expect(test).toExist();
      break;
  
    case 'notToExist':
      await expect(innerElement).not.toExist();
      break;
    
    case 'toHaveText':
      if (text != '') {
        await expect(innerElement).toHaveText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
    
    case 'notToHaveText':
      if (text != '') {
        await expect(innerElement).not.toHaveText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
  }
}

const interactWebElement = async (matcher, element, interaction, text = '') => {
  const innerElement = await switchToWebViewElement(matcher, element);
  switch (interaction) {
    case 'tap':
      await innerElement.tap();
      break;
  
    case 'typeText':
      if (text != '') {
        await innerElement.typeText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
    
    case 'replaceText':
      if (text != '') {
        await innerElement.replaceText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
    
    case 'clearText':
      await innerElement.clearText();
      break;
    
    case 'selectAllText':
      await innerElement.selectAllText();
      break;
    
    case 'getText':
      await innerElement.getText();
      break;
    
    case 'scrollToView':
      await innerElement.scrollToView();
      break;
    
    case 'focusElement':
      await innerElement.focus();
      break;
    
    case 'moveCursorToEnd':
      await innerElement.moveCursorToEnd();
      break;
    
    case 'getCurrentUrl':
      await innerElement.getCurrentUrl();
      break;
    
    case 'getTitle':
      await innerElement.getTitle();
      break;
  }
}

module.exports = {
  switchToWebViewElement,
  expectWebElement,
  interactWebElement,
}
