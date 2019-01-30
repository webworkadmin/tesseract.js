import { MeasureDefinition } from '../../src/lib/MeasureDefinition';
import { GroupingEnum } from '../../src/lib/Enums';
import { FieldAttributes } from '../../src/lib/FieldAttributes';

import 'mocha';
import { expect } from 'chai';

describe('MeasureDefinition', () => {
  it('should be a constructor', () => {
    expect(MeasureDefinition).to.be.a('function');
    expect(MeasureDefinition).to.throw();
  });

  it('should be empty', () => {
    const measureDef = new MeasureDefinition();
    const json = JSON.stringify({});
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDef with value passed in constructor', () => {
    const measureDef = new MeasureDefinition('Test Measure Def');
    const json = JSON.stringify({ qDef: 'Test Measure Def' });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qLabel', () => {
    const measureDef = new MeasureDefinition();
    measureDef.label = 'Test Label';
    const json = JSON.stringify({ qLabel: 'Test Label' });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDescription', () => {
    const measureDef = new MeasureDefinition();
    measureDef.description = 'Test Description';
    const json = JSON.stringify({ qDescription: 'Test Description' });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qTags', () => {
    const measureDef = new MeasureDefinition();
    measureDef.tags.push('Test Tag');
    const json = JSON.stringify({ qTags: ['Test Tag'] });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qGrouping', () => {
    const measureDef = new MeasureDefinition();
    measureDef.grouping = GroupingEnum.NOGROUPING;
    const json = JSON.stringify({ qGrouping: 'N' });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDef', () => {
    const measureDef = new MeasureDefinition();
    measureDef.def = 'Test Measure Def';
    const json = JSON.stringify({ qDef: 'Test Measure Def' });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qNumFormat', () => {
    const measureDef = new MeasureDefinition();
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.format = 'TestFormat';
    measureDef.numFormat = fieldAttributes;
    const json = JSON.stringify({ qNumFormat: { qFmt: 'TestFormat' } });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qRelative', () => {
    const measureDef = new MeasureDefinition();
    measureDef.relative = false;
    const json = JSON.stringify({ qRelative: false });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qBrutalSum', () => {
    const measureDef = new MeasureDefinition();
    measureDef.brutalSum = false;
    const json = JSON.stringify({ qBrutalSum: false });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qAggrFunc', () => {
    const measureDef = new MeasureDefinition();
    measureDef.aggrFunc = 'Test AggrFunc';
    const json = JSON.stringify({ qAggrFunc: 'Test AggrFunc' });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qAccumulate', () => {
    const measureDef = new MeasureDefinition();
    measureDef.accumulate = 1;
    const json = JSON.stringify({ qAccumulate: 1 });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qReverseSort', () => {
    const measureDef = new MeasureDefinition();
    measureDef.reverseSort = false;
    const json = JSON.stringify({ qReverseSort: false });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qActiveExpression', () => {
    const measureDef = new MeasureDefinition();
    measureDef.activeExpression = 1;
    const json = JSON.stringify({ qActiveExpression: 1 });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qExpressions', () => {
    const measureDef = new MeasureDefinition();
    measureDef.expressions.push('Test Expressions');
    const json = JSON.stringify({ qExpressions: ['Test Expressions'] });
    const result = JSON.stringify(measureDef.generate());
    expect(result).to.equal(json);
  });
});
