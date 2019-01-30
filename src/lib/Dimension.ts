import {  DimensionDefinition } from './DimensionDefinition';
import {  OtherTotalSpec } from './OtherTotalSpec';
import {  ValueExpression } from './ValueExpression';
import {  AttributeExpression } from './AttributeExpression';
import {  Generatable } from './Generatable';

export class Dimension extends Generatable {
  libraryId: String;
  def: DimensionDefinition;
  nullSuppression: Boolean;
  otherTotalSpec: OtherTotalSpec;
  showAll: Boolean;
  otherLabel: String;
  totalLabel: String;
  calcCond: ValueExpression;
  attributeExpression: AttributeExpression;

  constructor(definition?: String) {
    super();
    if (definition) {
      this.def = new DimensionDefinition(definition);
    }
  }
}
