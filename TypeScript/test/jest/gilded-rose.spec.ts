import { GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([{ name: 'foo', sellIn: 0, quality: 0 }]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});
