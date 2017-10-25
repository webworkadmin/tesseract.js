import {
  DimensionDefinition,
  OtherTotalSpec,
  ValueExpression,
  AttributeExpression,
  Generatable
} from './'

export class Dimension extends Generatable {
  LibraryId: String
  Def: DimensionDefinition
  NullSuppression: Boolean
  OtherTotalSpec: OtherTotalSpec
  ShowAll: Boolean
  OtherLabel: String
  TotalLabel: String
  CalcCond: ValueExpression
  AttributeExpression: AttributeExpression

  constructor(definition?: String) {
    super()
    if (definition) {
      this.Def = new DimensionDefinition(definition)
    }
  }
}
