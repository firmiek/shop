import { Item } from "@/items/Item";
import { itemFactory } from "@/items/itemFactory";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<{
    name: string,
    sellIn: number,
    quality: number,
    options?: Record<string, number>
  }>) {
    this.items = items.map(args => itemFactory(args.name, args.sellIn, args.quality, args.options));
  }

  updateQuality() {
    this.items.forEach(item => item.ageByDay())

    return this.items;
  }
}
