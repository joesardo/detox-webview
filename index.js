const detox = require('detox');
const { expect, web, by } = detox;

let innerElement;

const switchToWebViewElement = async (matcher, element) => {
  switch (matcher) {
    case 'id':
      this.innerElement = web.element(by.web.id(element));
      break;
  
    case 'className':
      this.innerElement = web.element(by.web.className(element));
      break;
    
    case 'cssSelector':
      this.innerElement = web.element(by.web.cssSelector(element));
      break;

    case 'elementName':
      this.innerElement = web.element(by.web.name(element));
      break;
    
    case 'xpath':
      this.innerElement = web.element(by.web.xpath(element));
      break;
    
    case 'href':
      this.innerElement = web.element(by.web.href(element));
      break;

    case 'hrefContains':
      this.innerElement = web.element(by.web.hrefContains(element));
      break;
    
    case 'tag':
      this.innerElement = web.element(by.web.tag(element));
      break;
  }
}

const expectWebElement = async (matcher, element, expectation, text = '') => {
  await this.switchToWebViewElement(matcher, element);
  switch (expectation) {
    case 'toExist':
      await expect(this.innerElement).toExist();
      break;
  
    case 'notToExist':
      await expect(this.innerElement).not.toExist();
      break;
    
    case 'toHaveText':
      if (text != '') {
        await expect(this.innerElement).toHaveText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
    
    case 'notToHaveText':
      if (text != '') {
        await expect(this.innerElement).not.toHaveText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
  }
}

const interactWebElement = async (matcher, element, interaction, text = '') => {
  await this.switchToWebViewElement(matcher, element);
  switch (interaction) {
    case 'tap':
      await this.innerElement.tap();
      break;
  
    case 'typeText':
      if (text != '') {
        await this.innerElement.typeText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
    
    case 'replaceText':
      if (text != '') {
        await this.innerElement.replaceText(text);
      } else {
        console.log('Please provide specified text to check against');
      }
      break;
    
    case 'clearText':
      await this.innerElement.clearText();
      break;
    
    case 'selectAllText':
      await this.innerElement.selectAllText();
      break;
    
    case 'getText':
      await this.innerElement.getText();
      break;
    
    case 'scrollToView':
      await this.innerElement.scrollToView();
      break;
    
    case 'focusElement':
      await this.innerElement.focus();
      break;
    
    case 'moveCursorToEnd':
      await this.innerElement.moveCursorToEnd();
      break;
    
    case 'getCurrentUrl':
      await this.innerElement.getCurrentUrl();
      break;
    
    case 'getTitle':
      await this.innerElement.getTitle();
      break;
  }
}

module.exports = {
  switchToWebViewElement,
  expectWebElement,
  interactWebElement,
}
