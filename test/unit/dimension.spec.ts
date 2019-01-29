import {
  AttributeExpression,
  Dimension,
  DimensionDefinition,
  OtherTotalSpec,
  OtherModeEnum,
  ValueExpression
} from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('Dimension', () => {
  it('should be a constructor', () => {
    expect(Dimension).to.be.a('function')
    expect(Dimension).to.throw()
  })

  it('should be empty', () => {
    let dimension = new Dimension()
    let json = JSON.stringify({})
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef with value passed in constructor', () => {
    let dimension = new Dimension('Test Dimension')
    let json = JSON.stringify({ qDef: { qFieldDefs: ['Test Dimension'] } })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qLibraryId', () => {
    let dimension = new Dimension()
    dimension.LibraryId = 'TestLibraryId'
    let json = JSON.stringify({ qLibraryId: 'TestLibraryId' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef', () => {
    let dimension = new Dimension()
    dimension.Def = new DimensionDefinition('Test Dimension')
    let json = JSON.stringify({ qDef: { qFieldDefs: ['Test Dimension'] } })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qNullSuppression', () => {
    let dimension = new Dimension()
    dimension.NullSuppression = false
    let json = JSON.stringify({ qNullSuppression: false })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherTotalSpec', () => {
    let dimension = new Dimension()
    dimension.OtherTotalSpec = new OtherTotalSpec()
    dimension.OtherTotalSpec.OtherMode = OtherModeEnum.OTHER_OFF
    let json = JSON.stringify({
      qOtherTotalSpec: { qOtherMode: 'OTHER_OFF' }
    })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qShowAll', () => {
    let dimension = new Dimension()
    dimension.ShowAll = false
    let json = JSON.stringify({ qShowAll: false })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherLabel', () => {
    let dimension = new Dimension()
    dimension.OtherLabel = 'Test Other Label'
    let json = JSON.stringify({ qOtherLabel: 'Test Other Label' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qTotalLabel', () => {
    let dimension = new Dimension()
    dimension.OtherLabel = 'Test Total Label'
    let json = JSON.stringify({ qOtherLabel: 'Test Total Label' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qCalcCond', () => {
    let dimension = new Dimension()
    dimension.CalcCond = new ValueExpression('Test Value')
    let json = JSON.stringify({ qCalcCond: { qv: 'Test Value' } })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qAttributeExpression', () => {
    let dimension = new Dimension()
    dimension.AttributeExpression = new AttributeExpression('Test Expression')
    let json = JSON.stringify({
      qAttributeExpression: { qExpression: 'Test Expression' }
    })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })
})
