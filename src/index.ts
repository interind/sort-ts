import { NumbersCollection } from './components/NumbersCollection';
import { CharactersCollection } from "./components/CharactersCollection";

const str = 'Lessing';
const charactersCollection = new CharactersCollection(str);
const body: Element = document.body;
const result: HTMLDivElement = document.createElement('div');
result.classList.add('result');
const label: HTMLLabelElement = document.createElement('label');
label.classList.add('form__label');
label.htmlFor = 'input';
label.textContent = 'Введите числа через запятую для сортировки:';
const form: HTMLFormElement = document.createElement('form');
form.classList.add('form');
const input: HTMLInputElement = document.createElement('input');
input.classList.add('form__input');
input.name = 'input';
input.type = 'text';
input.autocomplete = 'off';
input.maxLength = 100;
input.pattern = '[1-9,]+';
const button: HTMLButtonElement = document.createElement('button');
button.classList.add('form__submit');
button.type = 'submit';


button.textContent = 'Отправить'
input.addEventListener('input', clearResult);
form.appendChild(label);
form.appendChild(input);
form.appendChild(result);
form.appendChild(button);
form.addEventListener('submit', printResult);
body.appendChild(form);

function printResult(evt: Event): void {
  evt.preventDefault();
  const arr = input.value.split(',').map((e: string): number => Number(e));
  const numberCollection = new NumbersCollection(arr);
  numberCollection.sort();
  result.textContent = `До: ${input.value} После: ${numberCollection.print()}`;
  result.style.visibility = 'visible';
  form.reset();
}

function clearResult(evt: Event): void {
  const target = evt.target instanceof HTMLInputElement ? evt.target : {value: null};
  if (target.value) {
    result.textContent = '';
    result.style.visibility = 'hidden';
  }
}

charactersCollection.sort();
charactersCollection.print();

