import { MeasureDefinition } from './MeasureDefinition';
import { SortCriteria } from './SortCriteria';
import { AttributeExpression } from './AttributeExpression';
import { ValueExpression } from './ValueExpression';
import { Generatable } from './Generatable';

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
