import { ValueExpression } from '../../src/lib/ValueExpression';
import 'mocha';
import { expect } from 'chai';

describe('ValueExpression', () => {
  it('should be a constructor', () => {
    expect(ValueExpression).to.be.a('function');
    expect(ValueExpression).to.throw();
  });

  it('should generate qv with value passed in constructor', () => {
    const dimension = new ValueExpression('Test Dimension');
    const json = JSON.stringify({ qv: 'Test Dimension' });
    const result = JSON.stringify(dimension.generate());
    expect(result).to.equal(json);
  });
});
