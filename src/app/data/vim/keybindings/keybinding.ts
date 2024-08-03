import { AnyVimKeyBinding } from '../../../model/minimal-vim-key-binding';
import { AllOperationGroups } from '../operations/all-operations';

export type VimOperationKeyBindings = AllOperationGroups<AnyVimKeyBinding>;
