import {
  OtherModeEnum,
  ValueExpression,
  OtherLimitModeEnum,
  OtherSortModeEnum,
  OtherTotalModeEnum,
  Generatable
} from './'

export class OtherTotalSpec extends Generatable {
  OtherMode: OtherModeEnum
  OtherCounted: ValueExpression
  OtherLimit: ValueExpression
  OtherLimitMode: OtherLimitModeEnum
  SuppressOther: Boolean
  ForceBadValueKeeping: Boolean
  ApplyEvenWhenPossiblyWrongResult: Boolean
  GlobalOtherGrouping: Boolean
  OtherCollapseInnerDimensions: Boolean
  OtherSortMode: OtherSortModeEnum
  TotalMode: OtherTotalModeEnum
  ReferencedExpression: String
}
