import { Generatable } from './'

export class ValueExpression extends Generatable {
  v: String

  constructor(value: String) {
    super()
    this.v = value
  }
}
