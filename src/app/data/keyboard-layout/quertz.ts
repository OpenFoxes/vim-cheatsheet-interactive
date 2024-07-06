import { KeyboardLayout } from '../../model/keyboard-layout.type';

export const layoutQuertzSimple: KeyboardLayout = {
  name: 'QUERTZ (Simple)',
  rows: [
    {
      keys: ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ü'].map(
        (symbol) => ({
          symbol,
        }),
      ),
    },
    {
      keys: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä'].map(
        (symbol) => ({
          symbol,
        }),
      ),
    },
    {
      keys: ['Y', 'X', 'C', 'V', 'B', 'N', 'M'].map((symbol) => ({
        symbol,
      })),
    },
  ],
};

export const layoutQuertzComplete: KeyboardLayout = {
  name: 'QUERTZ (Complete)',
  rows: [
    {
      keys: [
        ...layoutQuertzSimple.rows[0].keys,
        ...['+'].map((symbol) => ({
          symbol,
        })),
      ],
    },
    {
      keys: [
        ...layoutQuertzSimple.rows[1].keys,
        ...['#'].map((symbol) => ({
          symbol,
        })),
      ],
    },
    {
      keys: [
        ...layoutQuertzSimple.rows[2].keys,
        ...[',', '.', '-'].map((symbol) => ({
          symbol,
        })),
      ],
    },
  ],
};
