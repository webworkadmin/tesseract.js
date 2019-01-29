import {
  MeasureDefinition,
  GroupingEnum,
  SortCriteria,
  FieldAttributes
} from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('MeasureDefinition', () => {
  it('should be a constructor', () => {
    expect(MeasureDefinition).to.be.a('function')
    expect(MeasureDefinition).to.throw()
  })

  it('should be empty', () => {
    let measureDef = new MeasureDefinition()
    let json = JSON.stringify({})
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef with value passed in constructor', () => {
    let measureDef = new MeasureDefinition('Test Measure Def')
    let json = JSON.stringify({ qDef: 'Test Measure Def' })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qLabel', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Label = 'Test Label'
    let json = JSON.stringify({ qLabel: 'Test Label' })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDescription', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Description = 'Test Description'
    let json = JSON.stringify({ qDescription: 'Test Description' })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qTags', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Tags.push('Test Tag')
    let json = JSON.stringify({ qTags: ['Test Tag'] })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qGrouping', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Grouping = GroupingEnum.NOGROUPING
    let json = JSON.stringify({ qGrouping: 'N' })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Def = 'Test Measure Def'
    let json = JSON.stringify({ qDef: 'Test Measure Def' })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qNumFormat', () => {
    let measureDef = new MeasureDefinition()
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.Format = 'TestFormat'
    measureDef.NumFormat = fieldAttributes
    let json = JSON.stringify({ qNumFormat: { qFmt: 'TestFormat' } })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qRelative', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Relative = false
    let json = JSON.stringify({ qRelative: false })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qBrutalSum', () => {
    let measureDef = new MeasureDefinition()
    measureDef.BrutalSum = false
    let json = JSON.stringify({ qBrutalSum: false })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qAggrFunc', () => {
    let measureDef = new MeasureDefinition()
    measureDef.AggrFunc = 'Test AggrFunc'
    let json = JSON.stringify({ qAggrFunc: 'Test AggrFunc' })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qAccumulate', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Accumulate = 1
    let json = JSON.stringify({ qAccumulate: 1 })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qReverseSort', () => {
    let measureDef = new MeasureDefinition()
    measureDef.ReverseSort = false
    let json = JSON.stringify({ qReverseSort: false })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qActiveExpression', () => {
    let measureDef = new MeasureDefinition()
    measureDef.ActiveExpression = 1
    let json = JSON.stringify({ qActiveExpression: 1 })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qExpressions', () => {
    let measureDef = new MeasureDefinition()
    measureDef.Expressions.push('Test Expressions')
    let json = JSON.stringify({ qExpressions: ['Test Expressions'] })
    let result = JSON.stringify(measureDef.generate())
    expect(result).to.equal(json)
  })
})
