export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
const AgedBrie = 'Aged Brie';
const BackstagePass = 'Backstage passes to a TAFKAL80ETC concert';
const Sulfuras = 'Sulfuras, Hand of Ragnaros';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItems(this.items[i])
    }

    return this.items;
  }
  updateItems(item: Item) {
    if (item.name != AgedBrie && item.name != BackstagePass) {

      if (item.name != Sulfuras) {
        this.changeQuality(-1, item)

      }
    } else {

      this.changeQuality(1, item)
      if (item.name == BackstagePass) {
        if (item.sellIn < 11) {

          this.changeQuality(1, item)
        }
        if (item.sellIn < 6) {

          this.changeQuality(1, item)

        }

      }
    }
    if (item.name != Sulfuras) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != AgedBrie) {
        if (item.name != BackstagePass) {

          if (item.name != Sulfuras) {
            this.changeQuality(-1, item)
          }

        } else {
          item.quality = item.quality - item.quality
        }
      } else {

        this.changeQuality(1, item)

      }
    }
  }
  changeQuality(change: number, item: Item) {
    var updatedQuality = item.quality + change;
    //Check the range If in range, update quailty
    if (updatedQuality <= 50 && updatedQuality >= 0) {
      item.quality = updatedQuality;
    }
  }
}
