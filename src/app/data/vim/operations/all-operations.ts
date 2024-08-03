import { VimOperation } from '../../../model/vim-operation';
import { documentMoves, DocumentMoves } from './document-moves';
import { SimpleMoveOperations, simpleMoves } from './simple-moves';

export type OperationSet<T> = SimpleMoveOperations<T> | DocumentMoves<T>;
export type AllOperations<T> = SimpleMoveOperations<T> & DocumentMoves<T>;

export type AllOperationGroups<T> = {
  simpleMoves: SimpleMoveOperations<T>;
  documentMoves: DocumentMoves<T>;
};

export const possibleOperations: AllOperationGroups<VimOperation> = {
  simpleMoves,
  documentMoves,
};
