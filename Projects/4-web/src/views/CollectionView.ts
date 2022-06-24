import { Collection } from '../models/Collection';
import { Model } from '../models/Model';
import { User, UserProps } from '../models/User';

export abstract class CollectionView<T, K> {
  constructor(
    public parent: HTMLElement,
    public collection: Collection<T, K>
  ) {}

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    for (const model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }

  abstract renderItem(model: T, itemParent: HTMLElement): void;
}
