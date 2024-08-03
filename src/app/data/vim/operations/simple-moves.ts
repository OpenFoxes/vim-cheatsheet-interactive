import {
  VimMoveOperationBuilder,
  VimOperation,
} from '../../../model/vim-operation';
import {
  VimOperationExperience,
  VimOperationImportance,
} from '../../../model/vim-operation-classifications.enum';

export type SimpleMoveOperations<T> = {
  moveLeft: T;
  moveRight: T;
  moveUp: T;
  moveDown: T;
};

export const simpleMoves: SimpleMoveOperations<VimOperation> = {
  moveLeft: VimMoveOperationBuilder.create()
    .name('Left')
    .description('Move one character to the left')
    .experience(VimOperationExperience.FIRST_STEPS)
    .importance(VimOperationImportance.IMPORTANT)
    .build(),
  moveRight: VimMoveOperationBuilder.create()
    .name('Right')
    .description('Move one character to the right')
    .experience(VimOperationExperience.FIRST_STEPS)
    .importance(VimOperationImportance.IMPORTANT)
    .build(),
  moveUp: VimMoveOperationBuilder.create()
    .name('Up')
    .description('Move one line up')
    .experience(VimOperationExperience.FIRST_STEPS)
    .importance(VimOperationImportance.IMPORTANT)
    .build(),
  moveDown: VimMoveOperationBuilder.create()
    .name('Down')
    .description('Move one line down')
    .experience(VimOperationExperience.FIRST_STEPS)
    .importance(VimOperationImportance.IMPORTANT)
    .build(),
};
