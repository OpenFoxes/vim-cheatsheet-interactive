import { KeyboardKeySlot } from './keyboard-key-slot';

describe('KeyboardKeySlot', () => {
  let keySlot: KeyboardKeySlot;

  beforeEach(() => {
    keySlot = new KeyboardKeySlot();
  });

  it('should be created', () => {
    expect(keySlot).toBeTruthy();
  });

  describe('full key set', () => {
    beforeEach(() => {
      keySlot.key = { name: 'Foo', symbol: 'Bar' };
    });

    it('should get the name', () => {
      expect(keySlot.name).toEqual('Foo');
    });

    it('should get the symbol', () => {
      expect(keySlot.symbol).toEqual('Bar');
    });
  });

  describe('no key set', () => {
    it('should return that no key is set as the name', () => {
      expect(keySlot.name).toEqual('No Key');
    });

    it('should return empty braces if no key is set', () => {
      expect(keySlot.symbol).toEqual('[]');
    });
  });

  describe('minimal key set', () => {
    beforeEach(() => {
      keySlot.key = { symbol: 'Foo' };
    });

    it('should return a name depending on the key', () => {
      expect(keySlot.name).toEqual('Key-Foo');
    });
  });

  it('should reset the key', () => {
    keySlot.key = { symbol: 'Foo' };
    keySlot.removeKey();

    expect(keySlot.symbol).toEqual('[]');
  });
});
