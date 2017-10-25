import {
  DimensionDefinition,
  GroupingEnum,
  FieldDefinition,
  SortCriteria,
  FieldAttributes
} from '../../lib'
import 'mocha'
import { expect } from 'chai'

describe('DimensionDefinition', () => {
  it('should be a constructor', () => {
    expect(DimensionDefinition).to.be.a('function')
    expect(DimensionDefinition).to.throw()
  })

  it('should be empty', () => {
    let dimensionDef = new DimensionDefinition()
    let json = JSON.stringify({})
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qFieldDefs with value passed in constructor', () => {
    let dimensionDef = new DimensionDefinition('Test Dimension Def')
    let json = JSON.stringify({ qFieldDefs: ['Test Dimension Def'] })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qGrouping', () => {
    let dimensionDef = new DimensionDefinition()
    dimensionDef.Grouping = GroupingEnum.NOGROUPING
    let json = JSON.stringify({ qGrouping: 'N' })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qFieldDefs (no qFieldLabels)', () => {
    let dimensionDef = new DimensionDefinition()
    dimensionDef.FieldDefinitions.push(
      new FieldDefinition('Test Dimension Def')
    )
    let json = JSON.stringify({ qFieldDefs: ['Test Dimension Def'] })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qFieldDefs with qFieldLabels', () => {
    let dimensionDef = new DimensionDefinition()
    dimensionDef.FieldDefinitions.push(
      new FieldDefinition('Test Dimension Def', 'Test Label')
    )
    let json = JSON.stringify({
      qFieldDefs: ['Test Dimension Def'],
      qFieldLabels: ['Test Label']
    })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSortCriteria', () => {
    let dimensionDef = new DimensionDefinition()
    let sortCriteria = new SortCriteria()
    sortCriteria.SortByNumeric = 0
    dimensionDef.SortCriterias.push(sortCriteria)
    let json = JSON.stringify({ qSortCriterias: [{ qSortByNumeric: 0 }] })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qNumberPresentations', () => {
    let dimensionDef = new DimensionDefinition()
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.Format = 'TestFormat'
    dimensionDef.NumberPresentations.push(fieldAttributes)
    let json = JSON.stringify({
      qNumberPresentations: [{ qFmt: 'TestFormat' }]
    })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qReverseSort', () => {
    let dimensionDef = new DimensionDefinition()
    dimensionDef.ReverseSort = false
    let json = JSON.stringify({ qReverseSort: false })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })

  it('should generate qActiveField', () => {
    let dimensionDef = new DimensionDefinition()
    dimensionDef.ActiveField = 1
    let json = JSON.stringify({ qActiveField: 1 })
    let result = JSON.stringify(dimensionDef.generate())
    expect(result).to.equal(json)
  })
})