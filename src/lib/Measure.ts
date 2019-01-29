import {
  MeasureDefinition,
  SortCriteria,
  AttributeExpression,
  ValueExpression,
  Generatable,
} from './';

export class Measure extends Generatable {
  libraryId: String;
  def: MeasureDefinition;
  sortBy: SortCriteria;
  attributeExpressions: AttributeExpression[] = [];
  calcCond: ValueExpression;

  constructor(definition?: String) {
    super();
    if (definition) {
      this.def = new MeasureDefinition(definition);
    }
  }
}
