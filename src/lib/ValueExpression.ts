import { Generatable } from './Generatable';

export class ValueExpression extends Generatable {
  v: String;

  constructor(value: String) {
    super();
    this.v = value;
    this.pascalExcludes.push('v');
  }
}
