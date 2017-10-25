import {
  MeasureDefinition,
  SortCriteria,
  AttributeExpression,
  ValueExpression,
  Generatable
} from './'

export class Measure extends Generatable {
  LibraryId: String
  Def: MeasureDefinition
  SortBy: SortCriteria
  AttributeExpressions: Array<AttributeExpression> = []
  CalcCond: ValueExpression

  constructor(definition?: String) {
    super()
    if (definition) {
      this.Def = new MeasureDefinition(definition)
    }
  }
}
