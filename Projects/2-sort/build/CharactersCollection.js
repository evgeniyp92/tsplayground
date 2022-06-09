"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const charactersArray = this.data.split('');
        const leftHand = charactersArray[leftIndex];
        charactersArray[leftIndex] = charactersArray[rightIndex];
        charactersArray[rightIndex] = leftHand;
        this.data = charactersArray.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
