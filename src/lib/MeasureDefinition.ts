import { GroupingEnum, FieldAttributes, Generatable } from './'

export class MeasureDefinition extends Generatable {
  Label: String
  Description: String
  Tags: Array<String> = []
  Grouping: GroupingEnum
  Def: String
  NumFormat: FieldAttributes
  Relative: Boolean
  BrutalSum: Boolean
  AggrFunc: String
  Accumulate: Number
  ReverseSort: Boolean
  ActiveExpression: Number
  Expressions: Array<String> = []

  constructor(definition?: String) {
    super()
    if (definition) {
      this.Def = definition
    }
  }
}
