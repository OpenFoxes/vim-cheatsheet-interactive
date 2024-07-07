import { KeyboardKeySlot } from './keyboard-key-slot';
import { KeyboardKey } from './keyboard-key.type';

/**
 * definition of a complete keyboard layout
 */
export type KeyboardBindingLayout = {
  rows: KeyboardBindingRow[];
  name: string;
};

/**
 * a single row of keyboard keys
 */
export type KeyboardBindingRow = {
  keys: KeyboardKey[];
};

/**
 * definition of the keyboard
 *
 * whilst the KeyboardBindingLayout describes a possible layout,
 * LiveKeyboardLayout defines the real keyboard containing all the KeySlots
 *
 * @see KeyboardKeySlot
 */
export type LiveKeyboardLayout = {
  rows: LiveKeyboardRow[];
};

/**
 * a single row of keyboard keyslots
 *
 * @see KeyboardKeySlot
 */
export type LiveKeyboardRow = {
  keyslots: KeyboardKeySlot[];
};
