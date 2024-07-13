import Color from 'color';

/**
 * Category of an operation in VIM
 */
export interface VimOperationCategory {
  readonly name: string;
  readonly description?: string;
  readonly color: Color;
}

/**
 * builder for VIM-operation categories
 */
export class VimOperationCategoryBuilder {
  private constructor(private readonly category: VimOperationCategory) {}

  public name(name: string): VimOperationCategoryBuilder {
    return new VimOperationCategoryBuilder({ ...this.category, name });
  }

  public description(description: string): VimOperationCategoryBuilder {
    return new VimOperationCategoryBuilder({ ...this.category, description });
  }

  public color(colorHex: string): VimOperationCategoryBuilder {
    return new VimOperationCategoryBuilder({
      ...this.category,
      color: Color(colorHex),
    });
  }

  public build(): VimOperationCategory {
    return this.category;
  }

  public static create(): VimOperationCategoryBuilder {
    return new VimOperationCategoryBuilder({ name: '', color: Color('#000') });
  }
}
