import { FieldDefinition } from '../../src/lib'
import 'mocha'
import { expect } from 'chai'

describe('FieldDefinition', () => {
  it('should be a constructor', () => {
    expect(FieldDefinition).to.be.a('function')
  })

  it('should assign Definition with value passed in constructor', () => {
    let fieldDefinition = new FieldDefinition('Test FieldDef')
    expect(fieldDefinition.Definition).to.equal('Test FieldDef')
  })

  it('should assign Label with value passed in constructor', () => {
    let fieldDefinition = new FieldDefinition(
      'Test FieldDef',
      'Test FieldLabel'
    )
    expect(fieldDefinition.Label).to.equal('Test FieldLabel')
  })
})
