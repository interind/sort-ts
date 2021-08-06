import { NumbersCollection } from './components/NumbersCollection';
import { CharactersCollection } from "./components/CharactersCollection";

const str = 'Lessing';
const arr = [-1, -8, -15, 6, 8, 5, 3];
const charactersCollection = new CharactersCollection(str);
const numberCollection = new NumbersCollection(arr);
numberCollection.sort();
numberCollection.print();

charactersCollection.sort();
charactersCollection.print();

