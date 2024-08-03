import { VimOperationKeyBindings } from './keybinding';

// TODO: add keybindings to frontend
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultKeybindings: VimOperationKeyBindings = {
  simpleMoves: {
    moveLeft: {
      primaryKeys: ['h', 'ArrowLeft'],
    },
    moveRight: {
      primaryKeys: ['l', 'ArrowRight'],
    },
    moveUp: {
      primaryKeys: ['k', 'ArrowUp'],
    },
    moveDown: {
      primaryKeys: ['j', 'ArrowDown'],
    },
  },
  documentMoves: {
    moveToLineBeginning: {
      primaryKey: '0',
    },
    moveToLineEnd: {
      primaryKey: '$',
    },
    moveToFirstLine: {
      primarySequence: 'gg',
    },
    moveToLastLine: {
      primaryKey: 'G',
    },
  },
};
