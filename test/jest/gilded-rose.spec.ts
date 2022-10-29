import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });

  test('item AgedBrie increases in Quality',() =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 2)]);
    const items = gildedRose.updateQuality();
    var AgedBrie = new Item ('Aged Brie',1,3);
    expect(items[0]).toEqual(AgedBrie);
  });

  test('item AgedBrie increases in Quality 2x when selling date expires',() =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 2)]);
    const items = gildedRose.updateQuality();
    var AgedBrie = new Item ('Aged Brie',-1,4);
    expect(items[0]).toEqual(AgedBrie);
  });

  test('item AgedBrie quality can not be greater than 50',() =>{
    const gildedRose = new GildedRose([new Item('Aged Brie', 3, 50)]);
    const items = gildedRose.updateQuality();
    var AgedBrie = new Item ('Aged Brie',2,50);
    expect(items[0]).toEqual(AgedBrie);
  });

});

