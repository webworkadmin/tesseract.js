import { ValueExpression } from './ValueExpression';
import { Generatable } from './Generatable';

export class SortCriteria extends Generatable {
  sortByState: Number;
  sortByFrequency: Number;
  sortByNumeric: Number;
  sortByAscii: Number;
  sortByLoadOrder: Number;
  sortByExpression: Number;
  expression: ValueExpression;
}
