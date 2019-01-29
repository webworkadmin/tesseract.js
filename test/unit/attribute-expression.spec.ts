import { AttributeExpression } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('AttributeExpression', () => {
  it('should be a constructor', () => {
    expect(AttributeExpression).to.be.a('function')
    expect(AttributeExpression).to.throw()
  })

  it('should be empty', () => {
    let attributeExpression = new AttributeExpression()
    let json = JSON.stringify({})
    let result = JSON.stringify(attributeExpression.generate())
    expect(result).to.equal(json)
  })

  it('should generate qLibraryId', () => {
    let attributeExpression = new AttributeExpression()
    attributeExpression.LibraryId = 'TestLibraryId'
    let json = JSON.stringify({ qLibraryId: 'TestLibraryId' })
    let result = JSON.stringify(attributeExpression.generate())
    expect(result).to.equal(json)
  })

  it('should generate qExpression', () => {
    let attributeExpression = new AttributeExpression()
    attributeExpression.Expression = 'TestExpression'
    let json = JSON.stringify({ qExpression: 'TestExpression' })
    let result = JSON.stringify(attributeExpression.generate())
    expect(result).to.equal(json)
  })
})
