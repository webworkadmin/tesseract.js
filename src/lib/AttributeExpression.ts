import { Generatable } from './'

export class AttributeExpression extends Generatable {
  Expression: String
  LibraryId: String

  constructor(expression?: String) {
    super()
    if (expression) {
      this.Expression = expression
    }
  }
}
