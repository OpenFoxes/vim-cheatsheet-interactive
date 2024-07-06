import { TestBed } from '@angular/core/testing';

import { KeyboardService } from './keyboard.service';

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
});
