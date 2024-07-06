import { Injectable } from '@angular/core';
import { KeyboardKeySlot } from '../model/keyboard-key-slot';
import { LiveKeyboardLayout } from '../model/keyboard-layout.type';

/**
 * Special options for defining the keyboard structure
 *
 * @see defineSlots
 */
type SlotDefinitionOptions = {
  /** Number of slots for each row of the keyboard */
  allRowslots: number[];
};

/**
 * Service for creating and configuring a keyboard model
 */
@Injectable({
  providedIn: 'root',
})
export class KeyboardService {
  private _keyboard: LiveKeyboardLayout = { rows: [] };

  /**
   * Current keyboard
   */
  get keyboard() {
    return { ...this._keyboard };
  }

  /**
   * definition of the basic keyboard structure without bindings
   * @param options
   */
  defineSlots(options: SlotDefinitionOptions) {
    this._keyboard.rows = [];
    options.allRowslots.forEach((rowslots) => {
      const keyslots: KeyboardKeySlot[] = [];

      for (let slotId = 0; slotId < rowslots; slotId++) {
        keyslots.push(new KeyboardKeySlot());
      }

      this._keyboard.rows.push({ keyslots });
    });
  }
}
