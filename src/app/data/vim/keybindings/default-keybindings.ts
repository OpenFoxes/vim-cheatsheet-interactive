import { VimOperationKeyBindings } from './keybinding';

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
