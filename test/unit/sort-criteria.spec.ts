import { SortCriteria, ValueExpression } from '../../lib'
import 'mocha'
import { expect } from 'chai'

describe('SortCriteria', () => {
  it('should be a constructor', () => {
    expect(SortCriteria).to.be.a('function')
    expect(SortCriteria).to.throw()
  })

  it('should be empty', () => {
    let sortCriteria = new SortCriteria()
    let json = JSON.stringify({})
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortByFrequency', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByFrequency = 0
    let json = JSON.stringify({ qSortByFrequency: 0 })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortByNumeric', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByNumeric = 0
    let json = JSON.stringify({ qSortByNumeric: 0 })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortByAscii', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByAscii = 0
    let json = JSON.stringify({ qSortByAscii: 0 })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortByLoadOrder', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByLoadOrder = 0
    let json = JSON.stringify({ qSortByLoadOrder: 0 })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortByExpression', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByExpression = 0
    let json = JSON.stringify({ qSortByExpression: 0 })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortByState', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByState = 0
    let json = JSON.stringify({ qSortByState: 0 })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })

  it('should generate qExpression', () => {
    let sortCriteria = new SortCriteria()
    sortCriteria.Expression = new ValueExpression('TestExpression')
    let json = JSON.stringify({ qExpression: { qv: 'TestExpression' } })
    let result = JSON.stringify(sortCriteria.generate())
    expect(result).to.equal(json)
  })
})
