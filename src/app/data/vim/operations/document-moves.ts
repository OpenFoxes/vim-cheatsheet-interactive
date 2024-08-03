import {
  VimMoveOperationBuilder,
  VimOperation,
} from '../../../model/vim-operation';
import {
  VimOperationExperience,
  VimOperationImportance,
} from '../../../model/vim-operation-classifications.enum';

export type DocumentMoves<T> = {
  moveToLineBeginning: T;
  moveToLineEnd: T;
  moveToFirstLine: T;
  moveToLastLine: T;
};

export const documentMoves: DocumentMoves<VimOperation> = {
  moveToLineBeginning: VimMoveOperationBuilder.create()
    .name('Line Beginning')
    .description('Move to the beginning of the current line')
    .experience(VimOperationExperience.ADVANCED_BEGINNER)
    .importance(VimOperationImportance.SEMI_IMPORTANT)
    .build(),
  moveToLineEnd: VimMoveOperationBuilder.create()
    .name('Line End')
    .description('Move to the end of the current line')
    .experience(VimOperationExperience.ADVANCED_BEGINNER)
    .importance(VimOperationImportance.SEMI_IMPORTANT)
    .build(),
  moveToFirstLine: VimMoveOperationBuilder.create()
    .name('First line')
    .description('Move to the first line of the current file')
    .experience(VimOperationExperience.ADVANCED_BEGINNER)
    .importance(VimOperationImportance.SEMI_IMPORTANT)
    .build(),
  moveToLastLine: VimMoveOperationBuilder.create()
    .name('Last line')
    .description('Move to the last line of the current file')
    .experience(VimOperationExperience.ADVANCED_BEGINNER)
    .importance(VimOperationImportance.SEMI_IMPORTANT)
    .build(),
};
