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
    dimension.libraryId = 'TestLibraryId'
    let json = JSON.stringify({ qLibraryId: 'TestLibraryId' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDef', () => {
    let dimension = new Dimension()
    dimension.def = new DimensionDefinition('Test Dimension')
    let json = JSON.stringify({ qDef: { qFieldDefs: ['Test Dimension'] } })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qNullSuppression', () => {
    let dimension = new Dimension()
    dimension.nullSuppression = false
    let json = JSON.stringify({ qNullSuppression: false })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherTotalSpec', () => {
    let dimension = new Dimension()
    dimension.otherTotalSpec = new OtherTotalSpec()
    dimension.otherTotalSpec.otherMode = OtherModeEnum.OTHER_OFF
    let json = JSON.stringify({
      qOtherTotalSpec: { qOtherMode: 'OTHER_OFF' }
    })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qShowAll', () => {
    let dimension = new Dimension()
    dimension.showAll = false
    let json = JSON.stringify({ qShowAll: false })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherLabel', () => {
    let dimension = new Dimension()
    dimension.otherLabel = 'Test Other Label'
    let json = JSON.stringify({ qOtherLabel: 'Test Other Label' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qTotalLabel', () => {
    let dimension = new Dimension()
    dimension.otherLabel = 'Test Total Label'
    let json = JSON.stringify({ qOtherLabel: 'Test Total Label' })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qCalcCond', () => {
    let dimension = new Dimension()
    dimension.calcCond = new ValueExpression('Test Value')
    let json = JSON.stringify({ qCalcCond: { qv: 'Test Value' } })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })

  it('should generate qAttributeExpression', () => {
    let dimension = new Dimension()
    dimension.attributeExpression = new AttributeExpression('Test Expression')
    let json = JSON.stringify({
      qAttributeExpression: { qExpression: 'Test Expression' }
    })
    let result = JSON.stringify(dimension.generate())
    expect(result).to.equal(json)
  })
})
