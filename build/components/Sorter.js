"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { lengthArr } = this;
        for (let i = 0; i < lengthArr; i++) {
            for (let j = 0; j < lengthArr - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
