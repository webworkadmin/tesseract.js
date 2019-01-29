import { Generatable } from "./"

export class ListObjectExpression extends Generatable {
  Expression: String
  LibraryId: String

  constructor(expression?: String) {
    super()
    if (expression) {
      this.Expression = expression
    }

    this.excludes.push("Expression")
  }

  generate() {
    let generated: any = super.generate()

    if (this.Expression != null) {
      generated.qExpr = this.Expression
    }

    return generated
  }
}
