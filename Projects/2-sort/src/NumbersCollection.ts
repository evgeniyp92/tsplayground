import { SortableCollection, Sorter } from './Sorter';

export class NumbersCollection extends Sorter implements SortableCollection {
  constructor(public data: number[]) {
    super();
  }

  // length getter that allows us to check length without calling a func
  public get length(): number {
    return this.data.length;
  }

  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
