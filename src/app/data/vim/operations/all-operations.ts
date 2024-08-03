import { VimOperation } from '../../../model/vim-operation';
import { SimpleMoveOperations, simpleMoves } from './simple-moves';

export type OperationSet<T> = SimpleMoveOperations<T>;
export type AllOperations<T> = SimpleMoveOperations<T>;

export type AllOperationGroups<T> = {
  simpleMoves: SimpleMoveOperations<T>;
};

export const possibleOperations: AllOperationGroups<VimOperation> = {
  simpleMoves,
};
