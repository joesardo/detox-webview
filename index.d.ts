declare module 'detox-webview' {
  export function switchToWebViewElement(matcher, element: string);
  export function expectWebElement(matcher, element: string, expectation, text: string);
  export function interactWebElement(matcher, element: string, interaction, text: string);
}