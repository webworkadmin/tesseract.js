import { CalcCond } from '../../src/lib/CalcCond';
import { ValueExpression } from '../../src/lib/ValueExpression';
import 'mocha';
import { expect } from 'chai';

describe('CalcCond', () => {
  it('should be a constructor', () => {
    expect(CalcCond).to.be.a('function');
    expect(CalcCond).to.throw();
  });

  it('should be empty', () => {
    const calcCond = new CalcCond();
    const json = JSON.stringify({});
    const result = JSON.stringify(calcCond.generate());
    expect(result).to.equal(json);
  });

  it('should generate qMsg', () => {
    const calcCond = new CalcCond();
    calcCond.msg = 'message';
    const json = JSON.stringify({ qMsg: 'message' });
    const result = JSON.stringify(calcCond.generate());
    expect(result).to.equal(json);
  });

  it('should generate qCond', () => {
    const calcCond = new CalcCond();
    calcCond.cond = new ValueExpression('value');
    const json = JSON.stringify({ qCond: { qv: 'value' } });
    const result = JSON.stringify(calcCond.generate());
    expect(result).to.equal(json);
  });
});
