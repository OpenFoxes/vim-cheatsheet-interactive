import { KeyboardBindingLayout } from '../../model/keyboard-layout.type';

export const layoutQuertySimple: KeyboardBindingLayout = {
  name: 'QUERTY (Simple)',
  rows: [
    {
      keys: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(
        (symbol) => ({
          symbol,
        }),
      ),
    },
    {
      keys: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((symbol) => ({
        symbol,
      })),
    },
    {
      keys: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((symbol) => ({
        symbol,
      })),
    },
  ],
};

export const layoutQuertyComplete: KeyboardBindingLayout = {
  name: 'QUERTY (Complete)',
  rows: [
    {
      keys: [
        ...layoutQuertySimple.rows[0].keys,
        ...['{', '}'].map((symbol) => ({
          symbol,
        })),
      ],
    },
    {
      keys: [
        ...layoutQuertySimple.rows[1].keys,
        ...[':', '"'].map((symbol) => ({
          symbol,
        })),
      ],
    },
    {
      keys: [
        ...layoutQuertySimple.rows[2].keys,
        ...['<', '>', '?'].map((symbol) => ({
          symbol,
        })),
      ],
    },
  ],
};
