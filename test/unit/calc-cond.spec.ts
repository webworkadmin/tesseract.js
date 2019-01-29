import { CalcCond, ValueExpression } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('CalcCond', () => {
  it('should be a constructor', () => {
    expect(CalcCond).to.be.a('function')
    expect(CalcCond).to.throw()
  })

  it('should be empty', () => {
    let calcCond = new CalcCond()
    let json = JSON.stringify({})
    let result = JSON.stringify(calcCond.generate())
    expect(result).to.equal(json)
  })

  it('should generate qMsg', () => {
    let calcCond = new CalcCond()
    calcCond.Msg = 'message'
    let json = JSON.stringify({ qMsg: 'message' })
    let result = JSON.stringify(calcCond.generate())
    expect(result).to.equal(json)
  })

  it('should generate qCond', () => {
    let calcCond = new CalcCond()
    calcCond.Cond = new ValueExpression('value')
    let json = JSON.stringify({ qCond: { qv: 'value'} })
    let result = JSON.stringify(calcCond.generate())
    expect(result).to.equal(json)
  })
})
