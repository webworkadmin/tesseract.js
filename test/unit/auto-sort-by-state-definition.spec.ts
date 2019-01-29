import { AutoSortByStateDefinition } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('AutoSortByStateDefinition', () => {
  it('should be a constructor', () => {
    expect(AutoSortByStateDefinition).to.be.a('function')
    expect(AutoSortByStateDefinition).to.throw()
  })

  it('should be empty', () => {
    let autoSortByStateDefinition = new AutoSortByStateDefinition()
    let json = JSON.stringify({})
    let result = JSON.stringify(autoSortByStateDefinition.generate())
    expect(result).to.equal(json)
  })

  it('should generate qDisplayNumberOfRows', () => {
    let autoSortByStateDefinition = new AutoSortByStateDefinition()
    autoSortByStateDefinition.DisplayNumberOfRows = 10
    let json = JSON.stringify({ qDisplayNumberOfRows: 10 })
    let result = JSON.stringify(autoSortByStateDefinition.generate())
    expect(result).to.equal(json)
  })
})
