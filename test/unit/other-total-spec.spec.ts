import {
  OtherModeEnum,
  ValueExpression,
  OtherLimitModeEnum,
  OtherSortModeEnum,
  OtherTotalModeEnum,
  OtherTotalSpec
} from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('OtherTotalSpec', () => {
  it('should be a constructor', () => {
    expect(OtherTotalSpec).to.be.a('function')
    expect(OtherTotalSpec).to.throw()
  })

  it('should be empty', () => {
    let other = new OtherTotalSpec()
    let json = JSON.stringify({})
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherMode', () => {
    let other = new OtherTotalSpec()
    other.otherMode = OtherModeEnum.OTHER_ABS_ACC_TARGET
    let json = JSON.stringify({ qOtherMode: 'OTHER_ABS_ACC_TARGET' })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherCounted', () => {
    let other = new OtherTotalSpec()
    other.otherCounted = new ValueExpression('TestOtherCounted')
    let json = JSON.stringify({ qOtherCounted: { qv: 'TestOtherCounted' } })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherLimit', () => {
    let other = new OtherTotalSpec()
    other.otherLimit = new ValueExpression('TestOtherLimit')
    let json = JSON.stringify({ qOtherLimit: { qv: 'TestOtherLimit' } })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherLimitMode', () => {
    let other = new OtherTotalSpec()
    other.otherLimitMode = OtherLimitModeEnum.OTHER_GE_LIMIT
    let json = JSON.stringify({ qOtherLimitMode: 'OTHER_GE_LIMIT' })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qSuppressOther', () => {
    let other = new OtherTotalSpec()
    other.suppressOther = false
    let json = JSON.stringify({ qSuppressOther: false })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qForceBadValueKeeping', () => {
    let other = new OtherTotalSpec()
    other.forceBadValueKeeping = false
    let json = JSON.stringify({ qForceBadValueKeeping: false })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qApplyEvenWhenPossiblyWrongResult', () => {
    let other = new OtherTotalSpec()
    other.applyEvenWhenPossiblyWrongResult = false
    let json = JSON.stringify({ qApplyEvenWhenPossiblyWrongResult: false })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qGlobalOtherGrouping', () => {
    let other = new OtherTotalSpec()
    other.globalOtherGrouping = false
    let json = JSON.stringify({ qGlobalOtherGrouping: false })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherCollapseInnerDimensions', () => {
    let other = new OtherTotalSpec()
    other.otherCollapseInnerDimensions = false
    let json = JSON.stringify({ qOtherCollapseInnerDimensions: false })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qOtherSortMode', () => {
    let other = new OtherTotalSpec()
    other.otherSortMode = OtherSortModeEnum.OTHER_SORT_ASCENDING
    let json = JSON.stringify({ qOtherSortMode: 'OTHER_SORT_ASCENDING' })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qTotalMode', () => {
    let other = new OtherTotalSpec()
    other.totalMode = OtherTotalModeEnum.TOTAL_EXPR
    let json = JSON.stringify({ qTotalMode: 'TOTAL_EXPR' })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })

  it('should generate qReferencedExpression', () => {
    let other = new OtherTotalSpec()
    other.referencedExpression = 'TestExpression'
    let json = JSON.stringify({ qReferencedExpression: 'TestExpression' })
    let result = JSON.stringify(other.generate())
    expect(result).to.equal(json)
  })
})
