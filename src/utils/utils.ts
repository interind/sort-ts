export function createElForDocument(el: string, selector: string, typeElement?: string): HTMLFormElement | HTMLInputElement | Element {
  const element = document.createElement(el);
  element.classList.add(selector);
  if (typeElement) {
    element.setAttribute('type', typeElement);
  }
  return element;
}