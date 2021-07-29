import { NumbersCollection } from './components/NumbersCollection';
import { CharactersCollection } from "./components/CharactersCollection";
import { LinkedList } from './components/LinkedList';
import { createElForDocument } from './utils/utils';

const str = 'Lessing';
const charactersCollection = new CharactersCollection(str);
const linkedList = new LinkedList;
const body: Element = document.body;
const result: Element = createElForDocument('div', 'result');
const form: HTMLFormElement | Element = createElForDocument('form', 'form');
const input: HTMLInputElement | Element = createElForDocument('input', 'form__input', 'text');
const button: Element = createElForDocument('button', 'form__submit', 'submit');


button.textContent = 'Отправить'
form.appendChild(input);
form.appendChild(button);
form.addEventListener('submit', printResult);
body.appendChild(form);

function printResult(evt: Event): void {
  evt.preventDefault();
  const arr = input instanceof HTMLInputElement ? input.value.split(',').map((e: string): number => Number(e)) : [];
  const numberCollection = new NumbersCollection(arr);
  numberCollection.sort();
  result.textContent = numberCollection.print();
  if (form instanceof HTMLFormElement) {
    form.reset();
  }
  body.appendChild(result);
}

charactersCollection.sort();
charactersCollection.print();

