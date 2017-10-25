import {
  AttributeExpression,
  Measure,
  MeasureDefinition,
  SortCriteria,
  OtherModeEnum,
  ValueExpression
} from '../../lib'
import 'mocha'
import { expect } from 'chai'

describe('Measure', () => {
  it('should be a constructor', () => {
    expect(Measure).to.be.a('function')
    expect(Measure).to.throw()
  })

  it('should be empty', () => {
    let measure = new Measure()
    let json = JSON.stringify({})
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef with value passed in constructor', () => {
    let measure = new Measure('Test Measure')
    let json = JSON.stringify({ qDef: { qDef: 'Test Measure' } })
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })

  it('should generate qLibraryId', () => {
    let measure = new Measure()
    measure.LibraryId = 'TestLibraryId'
    let json = JSON.stringify({ qLibraryId: 'TestLibraryId' })
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef', () => {
    let measure = new Measure()
    measure.Def = new MeasureDefinition('Test Measure')
    let json = JSON.stringify({ qDef: { qDef: 'Test Measure' } })
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })

  it('should generate SortBy', () => {
    let measure = new Measure()
    measure.SortBy = new SortCriteria()
    measure.SortBy.SortByAscii = 0
    let json = JSON.stringify({ qSortBy: { qSortByAscii: 0 } })
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })

  it('should generate qCalcCond', () => {
    let measure = new Measure()
    measure.CalcCond = new ValueExpression('Test Value')
    let json = JSON.stringify({ qCalcCond: { qv: 'Test Value' } })
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })

  it('should generate qAttributeExpressions', () => {
    let measure = new Measure()
    measure.AttributeExpressions.push(
      new AttributeExpression('Test Expression')
    )
    let json = JSON.stringify({
      qAttributeExpressions: [{ qExpression: 'Test Expression' }]
    })
    let result = JSON.stringify(measure.generate())
    expect(result).to.equal(json)
  })
})
