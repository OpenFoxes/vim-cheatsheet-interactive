import {
  VimOperationCategory,
  VimOperationCategoryBuilder,
} from '../../model/vim-operation-category';

interface Categories {
  [key: string]: VimOperationCategory;
}

export const operationCategories: Categories = {
  move: VimOperationCategoryBuilder.create()
    .name('Move')
    .description('Move the cursor or selection')
    .color('#112D41')
    .build(),
  add: VimOperationCategoryBuilder.create()
    .name('Add Text')
    .description('Adding contents')
    .color('#2ef100')
    .build(),
  change: VimOperationCategoryBuilder.create()
    .name('Change Text')
    .description('Replacing contents')
    .color('#f1d100')
    .build(),
  delete: VimOperationCategoryBuilder.create()
    .name('Delete Text')
    .description('Removing contents')
    .color('#f15400')
    .build(),
  directCommands: VimOperationCategoryBuilder.create()
    .name('Direct Commands')
    .description('Performing actions by using hotkeys')
    .color('#c7a436')
    .build(),
  fullCommands: VimOperationCategoryBuilder.create()
    .name('Command modes')
    .description('Performing actions by typing in commands')
    .color('#dea700')
    .build(),
  mode: VimOperationCategoryBuilder.create()
    .name('Mode change')
    .description('Changing the current VIM-mode')
    .color('#2e4fff')
    .build(),
  info: VimOperationCategoryBuilder.create()
    .name('Info')
    .description('Getting information')
    .color('#ca06d9')
    .build(),
  view: VimOperationCategoryBuilder.create()
    .name('View & Layout')
    .description('Changing the current view or window layout')
    .color('#7800da')
    .build(),
};
