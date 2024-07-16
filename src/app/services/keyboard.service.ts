import { Injectable } from '@angular/core';
import { KeyboardKeySlot } from '../model/keyboard-key-slot';
import {
  KeyboardBindingLayout,
  LiveKeyboardLayout,
} from '../model/keyboard-layout.type';

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
 * Special options for binding a layout to the keyboard structure
 *
 * @see defineSlots
 */
type SlotBindingOptions = {
  /** Keys to bind to the existing slots */
  layout: KeyboardBindingLayout;
  /** Binding offsets for each row */
  offsets?: number[];
  /** Vertical binding offsets between rows */
  verticalOffsets?: number[];
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

  /**
   * binding a layout to the existing keyboard structure
   * @param options
   */
  bindToSlots(options: SlotBindingOptions): boolean {
    const bindings = options.layout;

    // check lengths
    let error = false;

    const totalVerticalOffsets =
      options.verticalOffsets?.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      ) ?? 0;
    if (
      bindings.rows.length + totalVerticalOffsets >
      this._keyboard.rows.length
    ) {
      return false;
    }

    let rowId = 0
    let verticalOffsetCounter = 0;
    let verticalOffsetNumber = 0;
    this._keyboard.rows.forEach((row) => {
      if (
        verticalOffsetCounter <
        (options.verticalOffsets !== undefined
          ? options.verticalOffsets[verticalOffsetNumber]
          : 0)
      ) {
        verticalOffsetCounter++;
      } else {
        verticalOffsetCounter = 0;
        verticalOffsetNumber++;
        const currentRowBindings = bindings.rows[rowId];
        if (currentRowBindings !== undefined) {
          const totalHorizontalOffsets =
            options.offsets !== undefined ? options.offsets[rowId] : 0;
          if (
            currentRowBindings.keys.length + totalHorizontalOffsets >
            row.keyslots.length
          ) {
            error = true;
          }
          rowId++;
        }
      }
    });

    if (error) {
      return false;
    }

    // bind keys
    rowId = 0;
    verticalOffsetCounter = 0;
    verticalOffsetNumber = 0;
    this._keyboard.rows.forEach((row) => {
      if (
        verticalOffsetCounter <
        (options.verticalOffsets !== undefined
          ? options.verticalOffsets[verticalOffsetNumber]
          : 0)
      ) {
        verticalOffsetCounter++;
      } else {
        verticalOffsetCounter = 0;
        verticalOffsetNumber++;
        const currentRowBindings = bindings.rows[rowId];
        if (currentRowBindings !== undefined) {
          let slotId = 0;
          let offsetCounter = 0;
          row.keyslots.forEach((keyslot) => {
            if (
              offsetCounter <
              (options.offsets !== undefined ? options.offsets[rowId] : 0)
            ) {
              offsetCounter++;
            } else {
              keyslot.key = currentRowBindings.keys[slotId];
              slotId++;
            }
          });
          rowId++;
        }
      }
    });

    return true;
  }

  /**
   * defines a keyboard layout AND binds keys to it
   * @param options
   */
  defineAndBindSlots(options: SlotBindingOptions) {
    const allRowslots: number[] = [];

    let rowId = 0;
    options.layout.rows.forEach((row) => {
      for (
        let additionalRow = 0;
        additionalRow <
        (options.verticalOffsets !== undefined
          ? options.verticalOffsets[rowId]
          : 0);
        additionalRow++
      ) {
        allRowslots.push(0);
      }

      allRowslots.push(
        row.keys.length +
          (options.offsets !== undefined ? options.offsets[rowId] : 0),
      );

      rowId++;
    });

    this.defineSlots({ allRowslots });

    if (!this.bindToSlots(options)) {
      throw new Error(
        'Unexpected error in keybinding: internal definition error',
      );
    }
  }
}
