import { ValueExpression, Generatable } from './';

export class CalcCond extends Generatable {
  cond: ValueExpression;
  msg: String;
}
