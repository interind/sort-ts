import { NumbersCollection } from './components/NumbersCollection';
import { CharactersCollection } from "./components/CharactersCollection";
import { LinkedList } from './components/LinkedList';

const str = 'Lessing';
const charactersCollection = new CharactersCollection(str);
const linkedList = new LinkedList;
const body: Element = document.body;
const result: HTMLDivElement = document.createElement('div');
result.classList.add('result');
const form: HTMLFormElement = document.createElement('form');
form.classList.add('form');
const input: HTMLInputElement = document.createElement('input');
input.classList.add('form__input');
input.type = 'text';
const button: HTMLButtonElement = document.createElement('button');
button.classList.add('form__submit');
button.type = 'submit';


button.textContent = 'Отправить'
form.appendChild(input);
form.appendChild(button);
form.addEventListener('submit', printResult);
body.appendChild(form);

function printResult(evt: Event): void {
  evt.preventDefault();
  const arr = input.value.split(',').map((e: string): number => Number(e));
  const numberCollection = new NumbersCollection(arr);
  numberCollection.sort();
  result.textContent = `До: ${input.value} После: ${numberCollection.print()}`;
  form.reset();
  body.appendChild(result);
}

charactersCollection.sort();
charactersCollection.print();

