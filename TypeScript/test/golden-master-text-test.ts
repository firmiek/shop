import { GildedRose } from '@/gilded-rose';

console.log("OMGHAI!")

const items = [
  { name: "+5 Dexterity Vest", sellIn: 10, quality: 20 },
  { name: "Aged Brie", sellIn: 2, quality: 0 },
  { name: "Elixir of the Mongoose", sellIn: 5, quality: 7 },
  { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 },
  { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80 },
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 15, quality: 20 },
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 49 },
  { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 49 },
  { name: "Conjured Mana Cake", sellIn: 3, quality: 6, options: { depreciationRate: 2 } },
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  gildedRose.items.forEach(item => {
    console.log(item.log());
  });
  console.log();
  gildedRose.updateQuality();
}
