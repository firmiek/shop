import clamp from "lodash/clamp";

const QUALITY_MIN = 0;
const QUALITY_MAX = 50;

export abstract class Item {
  // Goblin territory - start
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  // Goblin territory - end

  abstract ageByDay(): void;

  log(): string {
    return this.name + ', ' + this.sellIn + ', ' + this.quality
  }

  updateSellIn() {
    this.sellIn -= 1 ;
  }

  setQuality(nextQuality: number) {
    this.quality = clamp(nextQuality, QUALITY_MIN, QUALITY_MAX)
  }
}
