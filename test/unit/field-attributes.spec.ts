import { FieldAttributes } from '../../src/lib/FieldAttributes';
import { FieldTypeEnum } from '../../src/lib/Enums';
import 'mocha';
import { expect } from 'chai';

describe('FieldAttributes', () => {
  it('should be a constructor', () => {
    expect(FieldAttributes).to.be.a('function');
    expect(FieldAttributes).to.throw();
  });

  it('should be empty', () => {
    const fieldAttributes = new FieldAttributes();
    const json = JSON.stringify({});
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate qType', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.type = FieldTypeEnum.ASCII;
    const json = JSON.stringify({ qType: 'A' });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate qnDec', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.numberDecimals = 3;
    const json = JSON.stringify({ qnDec: 3 });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate qUseThou', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.useThousandsSeparator = false;
    const json = JSON.stringify({ qUseThou: 0 });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate qFmt', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.format = 'TestFormat';
    const json = JSON.stringify({ qFmt: 'TestFormat' });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate qDec', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.decimalSeparator = '.';
    const json = JSON.stringify({ qDec: '.' });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate qThou', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.useThousandsSeparator = true;
    fieldAttributes.thousandSeparator = ',';
    const json = JSON.stringify({ qUseThou: 1, qThou: ',' });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });

  it('should generate SAFEARRAY', () => {
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.SAFEARRAY.push('unknown');
    const json = JSON.stringify({ qSAFEARRAY: ['unknown'] });
    const result = JSON.stringify(fieldAttributes.generate());
    expect(result).to.equal(json);
  });
});
