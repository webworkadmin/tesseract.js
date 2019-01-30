import {
  OtherModeEnum,
  OtherLimitModeEnum,
  OtherSortModeEnum,
  OtherTotalModeEnum,
} from '../../src/lib/Enums';
import { ValueExpression } from '../../src/lib/ValueExpression';
import { OtherTotalSpec } from '../../src/lib/OtherTotalSpec';

import 'mocha';
import { expect } from 'chai';

describe('OtherTotalSpec', () => {
  it('should be a constructor', () => {
    expect(OtherTotalSpec).to.be.a('function');
    expect(OtherTotalSpec).to.throw();
  });

  it('should be empty', () => {
    const other = new OtherTotalSpec();
    const json = JSON.stringify({});
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherMode', () => {
    const other = new OtherTotalSpec();
    other.otherMode = OtherModeEnum.OTHER_ABS_ACC_TARGET;
    const json = JSON.stringify({ qOtherMode: 'OTHER_ABS_ACC_TARGET' });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherCounted', () => {
    const other = new OtherTotalSpec();
    other.otherCounted = new ValueExpression('TestOtherCounted');
    const json = JSON.stringify({ qOtherCounted: { qv: 'TestOtherCounted' } });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherLimit', () => {
    const other = new OtherTotalSpec();
    other.otherLimit = new ValueExpression('TestOtherLimit');
    const json = JSON.stringify({ qOtherLimit: { qv: 'TestOtherLimit' } });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherLimitMode', () => {
    const other = new OtherTotalSpec();
    other.otherLimitMode = OtherLimitModeEnum.OTHER_GE_LIMIT;
    const json = JSON.stringify({ qOtherLimitMode: 'OTHER_GE_LIMIT' });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSuppressOther', () => {
    const other = new OtherTotalSpec();
    other.suppressOther = false;
    const json = JSON.stringify({ qSuppressOther: false });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qForceBadValueKeeping', () => {
    const other = new OtherTotalSpec();
    other.forceBadValueKeeping = false;
    const json = JSON.stringify({ qForceBadValueKeeping: false });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qApplyEvenWhenPossiblyWrongResult', () => {
    const other = new OtherTotalSpec();
    other.applyEvenWhenPossiblyWrongResult = false;
    const json = JSON.stringify({ qApplyEvenWhenPossiblyWrongResult: false });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qGlobalOtherGrouping', () => {
    const other = new OtherTotalSpec();
    other.globalOtherGrouping = false;
    const json = JSON.stringify({ qGlobalOtherGrouping: false });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherCollapseInnerDimensions', () => {
    const other = new OtherTotalSpec();
    other.otherCollapseInnerDimensions = false;
    const json = JSON.stringify({ qOtherCollapseInnerDimensions: false });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherSortMode', () => {
    const other = new OtherTotalSpec();
    other.otherSortMode = OtherSortModeEnum.OTHER_SORT_ASCENDING;
    const json = JSON.stringify({ qOtherSortMode: 'OTHER_SORT_ASCENDING' });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qTotalMode', () => {
    const other = new OtherTotalSpec();
    other.totalMode = OtherTotalModeEnum.TOTAL_EXPR;
    const json = JSON.stringify({ qTotalMode: 'TOTAL_EXPR' });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });

  it('should generate qReferencedExpression', () => {
    const other = new OtherTotalSpec();
    other.referencedExpression = 'TestExpression';
    const json = JSON.stringify({ qReferencedExpression: 'TestExpression' });
    const result = JSON.stringify(other.generate());
    expect(result).to.equal(json);
  });
});
