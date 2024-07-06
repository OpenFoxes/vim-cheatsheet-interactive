import { TestBed } from '@angular/core/testing';

import { KeyboardService } from './keyboard.service';
import { KeyboardBindingLayout } from '../model/keyboard-layout.type';

const exampleLayout: KeyboardBindingLayout = {
  name: 'Testlayout',
  rows: [
    { keys: [{ symbol: 'Foo' }, { symbol: 'Bar' }] },
    { keys: [{ symbol: 'Baz' }] },
    { keys: [{ symbol: 'X' }, { symbol: 'Y' }, { symbol: 'Z' }] },
  ],
};

describe('KeyboardService', () => {
  let service: KeyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Get', () => {
    it('should initialize the keyboard', () => {
      expect(service.keyboard).toBeTruthy();
    });

    it('should initialize the keyboard empty', () => {
      expect(service.keyboard.rows).toHaveSize(0);
    });

    it('should deliver a mutable copy', () => {
      service.keyboard.rows = [{ keyslots: [] }];
      // service.keyboard.rows.push({ keyslots: [] }); would still overwrite keyboard.rows
      expect(service.keyboard.rows).toHaveSize(0);
    });
  });

  describe('Slot Definition', () => {
    it('should define an empty keyboard', () => {
      service.defineSlots({ allRowslots: [] });

      expect(service.keyboard.rows).toHaveSize(0);
    });

    it('should define a keyboard with multiple empty rows', () => {
      service.defineSlots({ allRowslots: [0, 0, 0] });

      expect(service.keyboard.rows)
        .withContext('should hold three rows')
        .toHaveSize(3);

      [0, 1, 2].forEach((row) =>
        expect(service.keyboard.rows[row].keyslots)
          .withContext(`row ${row} should be empty`)
          .toHaveSize(0),
      );
    });

    it('should define a keyboard with a row of 10 keys', () => {
      service.defineSlots({ allRowslots: [10] });

      expect(service.keyboard.rows).withContext('should the row').toHaveSize(1);

      expect(service.keyboard.rows[0].keyslots)
        .withContext(`row 1 should hold 10 elements`)
        .toHaveSize(10);
    });

    it('should define a keyboard with elements of type KeyboardSlot', () => {
      service.defineSlots({ allRowslots: [10] });

      expect(service.keyboard.rows[0].keyslots[0])
        .withContext(`slot should be defined`)
        .toBeTruthy();

      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext(`key field should be defined and empty`)
        .toEqual('[]');
    });
  });

  describe('Slot Binding', () => {
    beforeEach(() => {
      service.defineSlots({ allRowslots: [2, 1, 3] });
      expect(service.keyboard.rows)
        .withContext('Precondition: slots should be defined')
        .toHaveSize(3);
    });

    it('should bind keys to the existing slots', () => {
      const bindResult = service.bindToSlots({ layout: exampleLayout });
      expect(bindResult).withContext('Result should be true').toBeTrue();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('Keyslots should be set')
        .toEqual('Foo');
    });

    it('should not bind on too few slots', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [
            exampleLayout.rows[0],
            { keys: [...exampleLayout.rows[1].keys, { symbol: 'Foobar' }] },
            exampleLayout.rows[2],
          ],
        },
      });

      expect(bindResult).withContext('Result should be false').toBeFalse();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('Keyslots should be not set')
        .toEqual('[]');
    });

    it('should not bind on too few rows', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [...exampleLayout.rows, exampleLayout.rows[2]],
        },
      });

      expect(bindResult).withContext('Result should be false').toBeFalse();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('Keyslots should be not set')
        .toEqual('[]');
    });

    it('should bind on too many slots', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [
            exampleLayout.rows[0],
            exampleLayout.rows[1],
            { keys: [{ symbol: 'Foobar' }] },
          ],
        },
      });

      expect(bindResult).withContext('Result should be true').toBeTrue();
      expect(service.keyboard.rows[2].keyslots[0].symbol)
        .withContext('Keyslots should be set')
        .toEqual('Foobar');
    });

    it('should bind on too many rows', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [exampleLayout.rows[1]],
        },
      });

      expect(bindResult).withContext('Result should be true').toBeTrue();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('Keyslots should be set')
        .toEqual('Baz');
      expect(service.keyboard.rows[1].keyslots[0].symbol)
        .withContext('Further rows should stay untouched')
        .toEqual('[]');
    });

    it('should bind with offset', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [exampleLayout.rows[1]],
        },
        offsets: [1],
      });

      expect(bindResult).withContext('Result should be true').toBeTrue();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('First keyslot should not be set')
        .toEqual('[]');
      expect(service.keyboard.rows[0].keyslots[1].symbol)
        .withContext('Second keyslot should be set')
        .toEqual('Baz');
      expect(service.keyboard.rows[1].keyslots[0].symbol)
        .withContext('Other rows remain untouched')
        .toEqual('[]');
    });

    it('should bind with vertical offset in the middle', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [exampleLayout.rows[0], exampleLayout.rows[1]],
        },
        verticalOffsets: [0, 1],
      });

      expect(bindResult).withContext('Result should be true').toBeTrue();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('First rows keyslots should be set')
        .toEqual('Foo');
      expect(service.keyboard.rows[1].keyslots[0].symbol)
        .withContext('Second rows keyslots should remain untouched')
        .toEqual('[]');
      expect(service.keyboard.rows[2].keyslots[0].symbol)
        .withContext('Third rows keyslots should be set')
        .toEqual('Baz');
    });

    it('should bind with vertical offset in the beginning', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [exampleLayout.rows[1], exampleLayout.rows[0]],
        },
        verticalOffsets: [1, 0],
      });

      expect(bindResult).withContext('Result should be true').toBeTrue();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('First rows keyslots should remain untouched')
        .toEqual('[]');
      expect(service.keyboard.rows[1].keyslots[0].symbol)
        .withContext('Second rows keyslots should be set')
        .toEqual('Baz');
      expect(service.keyboard.rows[2].keyslots[0].symbol)
        .withContext('Third rows keyslots should be set')
        .toEqual('Foo');
    });

    it('should not bind on too few slots (with offset)', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [exampleLayout.rows[1]],
        },
        offsets: [2],
      });

      expect(bindResult).withContext('Result should be false').toBeFalse();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('First keyslot should not be set')
        .toEqual('[]');
      expect(service.keyboard.rows[0].keyslots[1].symbol)
        .withContext('Second keyslot should not be set')
        .toEqual('[]');
    });

    it('should not bind on too few rows (with offset)', () => {
      const bindResult = service.bindToSlots({
        layout: {
          ...exampleLayout,
          rows: [exampleLayout.rows[2]],
        },
        verticalOffsets: [2],
      });

      expect(bindResult).withContext('Result should be false').toBeFalse();
      expect(service.keyboard.rows[0].keyslots[0].symbol)
        .withContext('Keyslots should be not set')
        .toEqual('[]');
    });
  });
});
