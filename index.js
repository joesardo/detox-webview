const detox = require('detox');
const { expect, web, by } = detox;

let innerElement;

const switchToWebViewElement = async (matcher, element) => {
  switch (matcher) {
    case 'id':
      innerElement = web.element(by.web.id(element));
      break;
  
    case 'className':
      innerElement = web.element(by.web.className(element));
      break;
    
    case 'cssSelector':
      innerElement = web.element(by.web.cssSelector(element));
      break;

    case 'elementName':
      innerElement = web.element(by.web.name(element));
      break;
    
    case 'xpath':
      innerElement = web.element(by.web.xpath(element));
      break;
    
    case 'href':
      innerElement = web.element(by.web.href(element));
      break;

    case 'hrefContains':
      innerElement = web.element(by.web.hrefContains(element));
      break;
    
    case 'tag':
      innerElement = web.element(by.web.tag(element));
      break;
  }
}

const expectWebElement = async (matcher, element, expectation, text = '') => {
  await switchToWebViewElement(matcher, element);
  switch (expectation) {
    case 'toExist':
      await expect(innerElement).toExist();
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
  await switchToWebViewElement(matcher, element);
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
