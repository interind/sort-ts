import { NumbersCollection } from './components/NumbersCollection';
import { CharactersCollection } from "./components/CharactersCollection";
import { LinkedList } from './components/LinkedList';

const arr = [3, -1, 5, 10, -8, 0, 1, 9];
const str = 'Lessing';
const numberCollection = new NumbersCollection(arr);
const charactersCollection = new CharactersCollection(str);
const linkedList = new LinkedList;
linkedList.add(-1);
linkedList.add(100);
linkedList.add(2);
linkedList.add(56);
numberCollection.sort();
charactersCollection.sort();
linkedList.sort();
linkedList.print();
numberCollection.print();
charactersCollection.print();

