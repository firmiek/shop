import {Item} from "@/items/Item";

export class ExpirationDateItem extends Item {
  ageByDay() {
    if (this.sellIn < 0) {
      this.setQuality(0)
    } else if (this.sellIn <= 5) {
      this.setQuality(this.quality + 3)
    } else if (this.sellIn <= 10) {
      this.setQuality(this.quality + 2)
    }

    this.updateSellIn();
  }
}
