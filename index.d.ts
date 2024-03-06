import { Matcher, Expectation, Interaction } from "./enum";

declare module 'detox-webview' {
  export function switchToWebViewElement(matcher: Matcher, element: string);
  export function expectWebElement(matcher: Matcher, element: string, expectation: Expectation, text?: string);
  export function interactWebElement(matcher: Matcher, element: string, interaction: Interaction, text?: string);
}
