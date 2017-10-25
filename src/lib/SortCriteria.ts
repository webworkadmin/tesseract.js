import { ValueExpression, Generatable } from './'

export class SortCriteria extends Generatable {
  SortByState: Number
  SortByFrequency: Number
  SortByNumeric: Number
  SortByAscii: Number
  SortByLoadOrder: Number
  SortByExpression: Number
  Expression: ValueExpression
}
