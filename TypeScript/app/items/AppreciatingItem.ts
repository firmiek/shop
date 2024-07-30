import {Item} from "@/items/Item";

export class AppreciatingItem extends Item {
  ageByDay() {
    this.setQuality(this.quality + 1)

    this.updateSellIn();
  }
}
