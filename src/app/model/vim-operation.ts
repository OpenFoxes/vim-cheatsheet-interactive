import { operationCategories } from '../data/vim/operation-categories';
import { VimOperationCategory } from './vim-operation-category';
import {
  VimOperationExperience,
  VimOperationImportance,
} from './vim-operation-classifications.enum';

export interface VimOperation {
  readonly name: string;
  readonly description?: string;
  readonly category: VimOperationCategory;
  readonly classification: {
    readonly experience: VimOperationExperience;
    readonly importance: VimOperationImportance;
  };
}

/**
 * An operation in vim, typically bound to a certain key
 */
export abstract class VimOperationBuilder {
  protected constructor(protected readonly operation: VimOperation) {}

  public name(name: string): VimOperationBuilder {
    return new VimMoveOperationBuilder({ ...this.operation, name });
  }

  public description(description: string): VimOperationBuilder {
    return new VimMoveOperationBuilder({ ...this.operation, description });
  }

  public experience(experience: VimOperationExperience): VimOperationBuilder {
    const classification = { ...this.operation.classification, experience };
    return new VimMoveOperationBuilder({ ...this.operation, classification });
  }

  public importance(importance: VimOperationImportance): VimOperationBuilder {
    const classification = { ...this.operation.classification, importance };
    return new VimMoveOperationBuilder({ ...this.operation, classification });
  }

  protected category(category: VimOperationCategory): VimOperationBuilder {
    return new VimMoveOperationBuilder({ ...this.operation, category });
  }

  public build(): VimOperation {
    return this.operation;
  }

  protected create(): VimOperationBuilder {
    return new VimMoveOperationBuilder({
      name: '',
      category: { name: 'None', color: '#fff' },
      classification: {
        experience: VimOperationExperience.BEGINNER,
        importance: VimOperationImportance.IMPORTANT,
      },
    });
  }
}

export class VimMoveOperationBuilder extends VimOperationBuilder {
  static create(): VimMoveOperationBuilder {
    return VimMoveOperationBuilder.create().category(
      operationCategories['move'],
    );
  }
}

export class VimAddOperationBuilder extends VimOperationBuilder {
  static create(): VimAddOperationBuilder {
    return VimAddOperationBuilder.create().category(operationCategories['add']);
  }
}

export class VimChangeOperationBuilder extends VimOperationBuilder {
  static create(): VimChangeOperationBuilder {
    return VimChangeOperationBuilder.create().category(
      operationCategories['change'],
    );
  }
}

export class VimDeleteOperationBuilder extends VimOperationBuilder {
  static create(): VimDeleteOperationBuilder {
    return VimDeleteOperationBuilder.create().category(
      operationCategories['delete'],
    );
  }
}

export class VimDirectCommandOperationBuilder extends VimOperationBuilder {
  static create(): VimDirectCommandOperationBuilder {
    return VimDirectCommandOperationBuilder.create().category(
      operationCategories['directCommands'],
    );
  }
}

export class VimFullCommandOperationBuilder extends VimOperationBuilder {
  static create(): VimFullCommandOperationBuilder {
    return VimFullCommandOperationBuilder.create().category(
      operationCategories['fullCommands'],
    );
  }
}

export class VimModeOperationBuilder extends VimOperationBuilder {
  static create(): VimModeOperationBuilder {
    return VimModeOperationBuilder.create().category(
      operationCategories['mode'],
    );
  }
}

export class VimInfoOperationBuilder extends VimOperationBuilder {
  static create(): VimInfoOperationBuilder {
    return VimInfoOperationBuilder.create().category(
      operationCategories['info'],
    );
  }
}

export class VimViewOperationBuilder extends VimOperationBuilder {
  static create(): VimViewOperationBuilder {
    return VimViewOperationBuilder.create().category(
      operationCategories['view'],
    );
  }
}
