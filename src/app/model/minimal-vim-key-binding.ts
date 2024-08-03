interface MinimalVimKeyBinding {}

export interface VimSoloKeyBinding extends MinimalVimKeyBinding {
  primaryKey: string;
  alternateKeys?: ReadonlyArray<string>;
}

export interface VimMultiKeyBinding extends MinimalVimKeyBinding {
  primaryKeys: ReadonlyArray<string>;
  alternateKeys?: ReadonlyArray<string>;
}

export interface VimSequenceBinding extends MinimalVimKeyBinding {
  primarySequence: string;
  alternateSequences?: ReadonlyArray<string>;
}

export type AnyVimKeyBinding =
  | VimSoloKeyBinding
  | VimMultiKeyBinding
  | VimSequenceBinding;
