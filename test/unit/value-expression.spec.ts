import { ValueExpression } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('ValueExpression', () => {
  it('should be a constructor', () => {
    expect(ValueExpression).to.be.a('function')
    expect(ValueExpression).to.throw()
  })

  it('should generate qv with value passed in constructor', () => {
    let dimension = new ValueExpression('Test Dimension')
    let json = JSON.stringify({ qv: 'Test Dimension' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })
})
