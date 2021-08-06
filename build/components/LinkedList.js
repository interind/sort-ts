"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get lengthArr() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('index is out of bounds');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('index is out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('list is empty');
        }
        return this.at(leftIndex).date > this.at(rightIndex).date;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.date;
        leftNode.date = rightNode.date;
        rightNode.date = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        const result = [];
        while (node) {
            result.push(node.date);
            node = node.next;
        }
        console.log(result);
    }
}
exports.LinkedList = LinkedList;
class Node {
    constructor(date) {
        this.date = date;
        this.next = null;
    }
    ;
}
