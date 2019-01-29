import { Generatable } from './';

export class ListObjectExpression extends Generatable {
  expression: String;
  libraryId: String;

  constructor(expression?: String) {
    super();
    if (expression) {
      this.expression = expression;
    }

    this.excludes.push('expression');
  }

  generate() {
    const generated: any = super.generate();

    if (this.expression != null) {
      generated.qExpr = this.expression;
    }

    return generated;
  }
}
