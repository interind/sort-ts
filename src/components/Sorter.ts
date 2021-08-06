export abstract class Sorter {
  abstract lengthArr: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
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