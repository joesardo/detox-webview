declare module 'detox-webview' {
  export function switchToWebViewElement(matcher:
     'id' 
     | 'className' 
     | 'cssSelector' 
     | 'elementName' 
     | 'xpath' 
     | 'href' 
     | 'hrefContains' 
     | 'tag'
     , element: string): Promise<any>;
  export function expectWebElement(matcher: 
     'id' 
     | 'className' 
     | 'cssSelector' 
     | 'elementName' 
     | 'xpath' 
     | 'href' 
     | 'hrefContains' 
     | 'tag'
     , element: string
     , expectation: 
     'toExist' 
     | 'notToExist' 
     | 'toHaveText' 
     | 'notToHaveText'
     , text?: string);
  export function interactWebElement(matcher: 
     'id' 
     | 'className' 
     | 'cssSelector' 
     | 'elementName' 
     | 'xpath' 
     | 'href' 
     | 'hrefContains' 
     | 'tag'
     , element: string
     , interaction: 
     'tap' 
     | 'typeText' 
     | 'replaceText' 
     | 'clearText' 
     | 'selectAllText' 
     | 'getText' 
     | 'scrollToView' 
     | 'focusElement' 
     | 'moveCursorToEnd' 
     | 'getCurrentUrl' 
     | 'getTitle'
     , text?: string);
}
