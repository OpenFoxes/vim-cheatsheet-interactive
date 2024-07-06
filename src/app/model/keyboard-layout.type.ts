import { KeyboardKey } from './keyboard-key.type';

/**
 * definition of a complete keyboard layout
 */
export type KeyboardLayout = {
  rows: KeyboardRow[];
  name: string;
};

/**
 * a single row of keyboard keys
 */
export type KeyboardRow = {
  keys: KeyboardKey[];
};
