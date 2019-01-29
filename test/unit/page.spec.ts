import { Page } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('Page', () => {
  it('should be a constructor', () => {
    expect(Page).to.be.a('function')
    expect(Page).to.throw()
  })

  it('should be empty', () => {
    let page = new Page()
    let json = JSON.stringify({})
    let result = JSON.stringify(page.generate())
    expect(result).to.equal(json)
  })

  it('should generate qLeft', () => {
    let page = new Page()
    page.left = 1
    let json = JSON.stringify({ qLeft: 1 })
    let result = JSON.stringify(page.generate())
    expect(result).to.equal(json)
  })

  it('should generate qTop', () => {
    let page = new Page()
    page.top = 1
    let json = JSON.stringify({ qTop: 1 })
    let result = JSON.stringify(page.generate())
    expect(result).to.equal(json)
  })

  it('should generate qWidth', () => {
    let page = new Page()
    page.width = 1
    let json = JSON.stringify({ qWidth: 1 })
    let result = JSON.stringify(page.generate())
    expect(result).to.equal(json)
  })

  it('should generate qHeight', () => {
    let page = new Page()
    page.height = 1
    let json = JSON.stringify({ qHeight: 1 })
    let result = JSON.stringify(page.generate())
    expect(result).to.equal(json)
  })
})
