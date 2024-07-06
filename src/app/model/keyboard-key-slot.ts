import { KeyboardKey } from './keyboard-key.type';

/**
 * An empty keyboard slot with an optional keycap/binding
 */
export class KeyboardKeySlot {
  private _key: KeyboardKey | null;

  constructor(options?: { key?: KeyboardKey }) {
    this._key = options?.key ?? null;
  }

  public get name(): string | null {
    if (this._key !== null) {
      return this._key.name ?? `Key-${this._key.symbol}`;
    } else {
      return 'No Key';
    }
  }
  public get symbol(): string {
    if (this._key !== null) {
      return this._key.symbol;
    } else {
      return '[]';
    }
  }

  public set key(newKey: KeyboardKey) {
    this._key = newKey;
  }

  public removeKey() {
    this._key = null;
  }
}
