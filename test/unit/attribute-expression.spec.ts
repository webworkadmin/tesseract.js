import { AttributeExpression } from '../../src/lib/AttributeExpression';
import 'mocha';
import { expect } from 'chai';

describe('AttributeExpression', () => {
  it('should be a constructor', () => {
    expect(AttributeExpression).to.be.a('function');
    expect(AttributeExpression).to.throw();
  });

  it('should be empty', () => {
    const attributeExpression = new AttributeExpression();
    const json = JSON.stringify({});
    const result = JSON.stringify(attributeExpression.generate());
    expect(result).to.equal(json);
  });

  it('should generate qLibraryId', () => {
    const attributeExpression = new AttributeExpression();
    attributeExpression.libraryId = 'TestLibraryId';
    const json = JSON.stringify({ qLibraryId: 'TestLibraryId' });
    const result = JSON.stringify(attributeExpression.generate());
    expect(result).to.equal(json);
  });

  it('should generate qExpression', () => {
    const attributeExpression = new AttributeExpression();
    attributeExpression.expression = 'TestExpression';
    const json = JSON.stringify({ qExpression: 'TestExpression' });
    const result = JSON.stringify(attributeExpression.generate());
    expect(result).to.equal(json);
  });
});
