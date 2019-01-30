import { Generatable } from './Generatable';

export class AttributeExpression extends Generatable {
  expression: String;
  libraryId: String;

  constructor(expression?: String) {
    super();
    if (expression) {
      this.expression = expression;
    }
  }
}
