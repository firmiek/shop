import {Item} from "@/items/Item";

export class DepreciatingItem extends Item {
  depreciationRate: number;

  constructor(
    name: string,
    sellIn: number,
    quality: number,
    private options?: Record<string, number>
  ) {
    super(name, sellIn, quality);

    this.depreciationRate = options?.depreciationRate ?? 1;
  }

  ageByDay() {
    this.setQuality(this.quality - this.depreciationRate)

    this.updateSellIn();
  }
}
