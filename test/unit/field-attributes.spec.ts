import { FieldTypeEnum, FieldAttributes } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('FieldAttributes', () => {
  it('should be a constructor', () => {
    expect(FieldAttributes).to.be.a('function')
    expect(FieldAttributes).to.throw()
  })

  it('should be empty', () => {
    let fieldAttributes = new FieldAttributes()
    let json = JSON.stringify({})
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate qType', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.Type = FieldTypeEnum.ASCII
    let json = JSON.stringify({ qType: 'A' })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate qnDec', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.NumberDecimals = 3
    let json = JSON.stringify({ qnDec: 3 })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate qUseThou', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.UseThousandsSeparator = false
    let json = JSON.stringify({ qUseThou: 0 })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate qFmt', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.Format = 'TestFormat'
    let json = JSON.stringify({ qFmt: 'TestFormat' })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDec', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.DecimalSeparator = '.'
    let json = JSON.stringify({ qDec: '.' })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate qThou', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.ThousandSeparator = ','
    let json = JSON.stringify({ qThou: ',' })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })

  it('should generate SAFEARRAY', () => {
    let fieldAttributes = new FieldAttributes()
    fieldAttributes.SAFEARRAY.push('unknown')
    let json = JSON.stringify({ qSAFEARRAY: ['unknown'] })
    let result = JSON.stringify(fieldAttributes.generate())
    expect(result).to.equal(json)
  })
})
