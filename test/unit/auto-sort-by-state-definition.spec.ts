import { AutoSortByStateDefinition } from '../../src/lib/AutoSortByStateDefinition';
import 'mocha';
import { expect } from 'chai';

describe('AutoSortByStateDefinition', () => {
  it('should be a constructor', () => {
    expect(AutoSortByStateDefinition).to.be.a('function');
    expect(AutoSortByStateDefinition).to.throw();
  });

  it('should be empty', () => {
    const autoSortByStateDefinition = new AutoSortByStateDefinition();
    const json = JSON.stringify({});
    const result = JSON.stringify(autoSortByStateDefinition.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDisplayNumberOfRows', () => {
    const autoSortByStateDefinition = new AutoSortByStateDefinition();
    autoSortByStateDefinition.displayNumberOfRows = 10;
    const json = JSON.stringify({ qDisplayNumberOfRows: 10 });
    const result = JSON.stringify(autoSortByStateDefinition.generate());
    expect(result).to.equal(json);
  });
});
