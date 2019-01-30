import { ListObjectExpression } from '../../src/lib/ListObjectExpression';
import 'mocha';
import { expect } from 'chai';

describe('ListObjectExpression', () => {
  it('should be a constructor', () => {
    expect(ListObjectExpression).to.be.a('function');
    expect(ListObjectExpression).to.throw();
  });

  it('should be empty', () => {
    const listObjectExpression = new ListObjectExpression();
    const json = JSON.stringify({});
    const result = JSON.stringify(listObjectExpression.generate());
    expect(result).to.equal(json);
  });

  it('should generate qExpr', () => {
    const listObjectExpression = new ListObjectExpression('expression');
    const json = JSON.stringify({ qExpr: 'expression' });
    const result = JSON.stringify(listObjectExpression.generate());
    expect(result).to.equal(json);
  });

  it('should generate qLibraryId', () => {
    const listObjectExpression = new ListObjectExpression();
    listObjectExpression.libraryId = 'identifier';
    const json = JSON.stringify({ qLibraryId: 'identifier' });
    const result = JSON.stringify(listObjectExpression.generate());
    expect(result).to.equal(json);
  });
});
