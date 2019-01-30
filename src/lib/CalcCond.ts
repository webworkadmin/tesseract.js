import { Generatable } from './Generatable';
import { ValueExpression } from './ValueExpression';

export class CalcCond extends Generatable {
  cond: ValueExpression;
  msg: String;
}
