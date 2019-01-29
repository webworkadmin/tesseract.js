import {
  OtherModeEnum,
  ValueExpression,
  OtherLimitModeEnum,
  OtherSortModeEnum,
  OtherTotalModeEnum,
  Generatable,
} from './';

export class OtherTotalSpec extends Generatable {
  otherMode: OtherModeEnum;
  otherCounted: ValueExpression;
  otherLimit: ValueExpression;
  otherLimitMode: OtherLimitModeEnum;
  suppressOther: Boolean;
  forceBadValueKeeping: Boolean;
  applyEvenWhenPossiblyWrongResult: Boolean;
  globalOtherGrouping: Boolean;
  otherCollapseInnerDimensions: Boolean;
  otherSortMode: OtherSortModeEnum;
  totalMode: OtherTotalModeEnum;
  referencedExpression: String;
}
