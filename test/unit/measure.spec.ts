import { AttributeExpression } from '../../src/lib/AttributeExpression';
import { Measure } from '../../src/lib/Measure';
import { MeasureDefinition } from '../../src/lib/MeasureDefinition';
import { SortCriteria } from '../../src/lib/SortCriteria';
import { ValueExpression } from '../../src/lib/ValueExpression';

import 'mocha';
import { expect } from 'chai';

describe('Measure', () => {
  it('should be a constructor', () => {
    expect(Measure).to.be.a('function');
    expect(Measure).to.throw();
  });

  it('should be empty', () => {
    const measure = new Measure();
    const json = JSON.stringify({});
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDef with value passed in constructor', () => {
    const measure = new Measure('Test Measure');
    const json = JSON.stringify({ qDef: { qDef: 'Test Measure' } });
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });

  it('should generate qLibraryId', () => {
    const measure = new Measure();
    measure.libraryId = 'TestLibraryId';
    const json = JSON.stringify({ qLibraryId: 'TestLibraryId' });
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDef', () => {
    const measure = new Measure();
    measure.def = new MeasureDefinition('Test Measure');
    const json = JSON.stringify({ qDef: { qDef: 'Test Measure' } });
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });

  it('should generate SortBy', () => {
    const measure = new Measure();
    measure.sortBy = new SortCriteria();
    measure.sortBy.sortByAscii = 0;
    const json = JSON.stringify({ qSortBy: { qSortByAscii: 0 } });
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });

  it('should generate qCalcCond', () => {
    const measure = new Measure();
    measure.calcCond = new ValueExpression('Test Value');
    const json = JSON.stringify({ qCalcCond: { qv: 'Test Value' } });
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });

  it('should generate qAttributeExpressions', () => {
    const measure = new Measure();
    measure.attributeExpressions.push(
      new AttributeExpression('Test Expression'),
    );
    const json = JSON.stringify({
      qAttributeExpressions: [{ qExpression: 'Test Expression' }],
    });
    const result = JSON.stringify(measure.generate());
    expect(result).to.equal(json);
  });
});
