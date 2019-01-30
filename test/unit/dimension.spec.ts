import { AttributeExpression } from '../../src/lib/AttributeExpression';
import { Dimension } from '../../src/lib/Dimension';
import { DimensionDefinition } from '../../src/lib/DimensionDefinition';
import { OtherTotalSpec } from '../../src/lib/OtherTotalSpec';
import { OtherModeEnum } from '../../src/lib/Enums';
import { ValueExpression } from '../../src/lib/ValueExpression';

import 'mocha';
import { expect } from 'chai';

describe('Dimension', () => {
  it('should be a constructor', () => {
    expect(Dimension).to.be.a('function');
    expect(Dimension).to.throw();
  });

  it('should be empty', () => {
    const dimension = new Dimension();
    const json = JSON.stringify({});
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDef with value passed in constructor', () => {
    const dimension = new Dimension('Test Dimension');
    const json = JSON.stringify({ qDef: { qFieldDefs: ['Test Dimension'] } });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qLibraryId', () => {
    const dimension = new Dimension();
    dimension.libraryId = 'TestLibraryId';
    const json = JSON.stringify({ qLibraryId: 'TestLibraryId' });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDef', () => {
    const dimension = new Dimension();
    dimension.def = new DimensionDefinition('Test Dimension');
    const json = JSON.stringify({ qDef: { qFieldDefs: ['Test Dimension'] } });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qNullSuppression', () => {
    const dimension = new Dimension();
    dimension.nullSuppression = false;
    const json = JSON.stringify({ qNullSuppression: false });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherTotalSpec', () => {
    const dimension = new Dimension();
    dimension.otherTotalSpec = new OtherTotalSpec();
    dimension.otherTotalSpec.otherMode = OtherModeEnum.OTHER_OFF;
    const json = JSON.stringify({
      qOtherTotalSpec: { qOtherMode: 'OTHER_OFF' },
    });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qShowAll', () => {
    const dimension = new Dimension();
    dimension.showAll = false;
    const json = JSON.stringify({ qShowAll: false });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qOtherLabel', () => {
    const dimension = new Dimension();
    dimension.otherLabel = 'Test Other Label';
    const json = JSON.stringify({ qOtherLabel: 'Test Other Label' });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qTotalLabel', () => {
    const dimension = new Dimension();
    dimension.otherLabel = 'Test Total Label';
    const json = JSON.stringify({ qOtherLabel: 'Test Total Label' });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qCalcCond', () => {
    const dimension = new Dimension();
    dimension.calcCond = new ValueExpression('Test Value');
    const json = JSON.stringify({ qCalcCond: { qv: 'Test Value' } });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });

  it('should generate qAttributeExpression', () => {
    const dimension = new Dimension();
    dimension.attributeExpression = new AttributeExpression('Test Expression');
    const json = JSON.stringify({
      qAttributeExpression: { qExpression: 'Test Expression' },
    });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });
});
