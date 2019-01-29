import { ListObjectExpression } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('ListObjectExpression', () => {
  it('should be a constructor', () => {
    expect(ListObjectExpression).to.be.a('function')
    expect(ListObjectExpression).to.throw()
  })

  it('should be empty', () => {
    let listObjectExpression = new ListObjectExpression()
    let json = JSON.stringify({})
    let result = JSON.stringify(listObjectExpression.generate())
    expect(result).to.equal(json)
  })

  it('should generate qExpr', () => {
    let listObjectExpression = new ListObjectExpression()
    listObjectExpression.expression = 'expression'
    let json = JSON.stringify({ qExpr: 'expression' })
    let result = JSON.stringify(listObjectExpression.generate())
    expect(result).to.equal(json)
  })

  it('should generate qLibraryId', () => {
    let listObjectExpression = new ListObjectExpression()
    listObjectExpression.libraryId = 'identifier'
    let json = JSON.stringify({ qLibraryId: 'identifier' })
    let result = JSON.stringify(listObjectExpression.generate())
    expect(result).to.equal(json)
  })
})
