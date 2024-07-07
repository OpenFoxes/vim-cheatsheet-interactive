import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { layoutQuertyComplete } from '../data/keyboard-layout/querty';
import { KeyboardService } from '../services/keyboard.service';

describe('Integration', () => {
  let spectator: SpectatorService<KeyboardService>;
  const createService = createServiceFactory(KeyboardService);

  beforeEach(() => {
    spectator = createService();
  });

  describe('Keyboard model', () => {
    it('should create a qwerty-keyboard', () => {
      spectator.service.defineAndBindSlots({ layout: layoutQuertyComplete });

      expect(spectator.service.keyboard.rows).toHaveSize(
        layoutQuertyComplete.rows.length,
      );
      expect(
        spectator.service.keyboard.rows[0].keyslots.map(
          (keyslot) => keyslot.symbol,
        ),
      ).toEqual(layoutQuertyComplete.rows[0].keys.map((key) => key.symbol));
    });
  });
});
