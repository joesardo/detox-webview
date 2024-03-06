export enum Matcher {
  id = 'id',
  className = 'className',
  cssSelector = 'cssSelector',
  elementName = 'elementName',
  xpath = 'xpath',
  href = 'href',
  hrefContains = 'hrefContains',
  tag = 'tag'
}

export enum Expectation {
  toExist = 'toExist',
  notToExist = 'notToExist',
  toHaveText = 'toHaveText',
  notToHaveText = 'notToHaveText'
}

export enum Interaction {
  tap = 'tap',
  typeText = 'typeText',
  replaceText = 'replaceText',
  clearText = 'clearText',
  selectAllText = 'selectAllText',
  getText = 'getText',
  scrollToView = 'scrollToView',
  focusElement = 'focusElement',
  moveCursorToEnd = 'moveCursorToEnd',
  getCurrentUrl = 'getCurrentUrl',
  getTitle = 'getTitle'
}
