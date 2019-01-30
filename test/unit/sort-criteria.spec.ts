import { SortCriteria } from '../../src/lib/SortCriteria';
import { ValueExpression } from '../../src/lib/ValueExpression';

import 'mocha';
import { expect } from 'chai';

describe('SortCriteria', () => {
  it('should be a constructor', () => {
    expect(SortCriteria).to.be.a('function');
    expect(SortCriteria).to.throw();
  });

  it('should be empty', () => {
    const sortCriteria = new SortCriteria();
    const json = JSON.stringify({});
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortByFrequency', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByFrequency = 0;
    const json = JSON.stringify({ qSortByFrequency: 0 });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortByNumeric', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByNumeric = 0;
    const json = JSON.stringify({ qSortByNumeric: 0 });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortByAscii', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByAscii = 0;
    const json = JSON.stringify({ qSortByAscii: 0 });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortByLoadOrder', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByLoadOrder = 0;
    const json = JSON.stringify({ qSortByLoadOrder: 0 });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortByExpression', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByExpression = 0;
    const json = JSON.stringify({ qSortByExpression: 0 });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortByState', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByState = 0;
    const json = JSON.stringify({ qSortByState: 0 });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });

  it('should generate qExpression', () => {
    const sortCriteria = new SortCriteria();
    sortCriteria.expression = new ValueExpression('TestExpression');
    const json = JSON.stringify({ qExpression: { qv: 'TestExpression' } });
    const result = JSON.stringify(sortCriteria.generate());
    expect(result).to.equal(json);
  });
});
