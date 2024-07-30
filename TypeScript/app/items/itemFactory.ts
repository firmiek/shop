import {Item} from "@/items/Item";
import {FixedItem} from "@/items/FixedItem";
import {AppreciatingItem} from "@/items/AppreciatingItem";
import {DepreciatingItem} from "@/items/DepreciatingItem";
import {ExpirationDateItem} from "@/items/ExpirationDateItem";

type ItemConstructor = new (name: string, sellIn: number, quality: number, options?: Record<string, number>) => Item;

const rules: {keyWord: string, className: ItemConstructor}[]  = [
  { keyWord: 'sulfuras', className: FixedItem },
  { keyWord: 'backstage passes', className: ExpirationDateItem },
  { keyWord: 'brie', className: AppreciatingItem }
]
export const itemFactory: (name: string, sellIn: number, quality: number, options?: Record<string, number> | undefined) => Item = (...args)  => {
  const loverCaneName = args[0].toLocaleLowerCase();

  for (const { keyWord, className } of rules) {
    if (loverCaneName.includes(keyWord)) return new className(...args);
  }

  return new DepreciatingItem(...args);
}
