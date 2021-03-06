"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./components/NumbersCollection");
const CharactersCollection_1 = require("./components/CharactersCollection");
const str = 'Lessing';
const arr = [-1, -8, -15, 6, 8, 5, 3];
const charactersCollection = new CharactersCollection_1.CharactersCollection(str);
const numberCollection = new NumbersCollection_1.NumbersCollection(arr);
numberCollection.sort();
numberCollection.print();
charactersCollection.sort();
charactersCollection.print();
