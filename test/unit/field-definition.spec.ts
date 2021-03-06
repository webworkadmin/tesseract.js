import { FieldDefinition } from '../../src/lib/FieldDefinition';
import 'mocha';
import { expect } from 'chai';

describe('FieldDefinition', () => {
  it('should be a constructor', () => {
    expect(FieldDefinition).to.be.a('function');
  });

  it('should be empty', () => {
    const fieldDefinition = new FieldDefinition();
    expect(fieldDefinition.definition).to.equal(undefined);
  });

  it('should assign Definition with value passed in constructor', () => {
    const fieldDefinition = new FieldDefinition('Test FieldDef');
    expect(fieldDefinition.definition).to.equal('Test FieldDef');
  });

  it('should assign Label with value passed in constructor', () => {
    const fieldDefinition = new FieldDefinition(
      'Test FieldDef',
      'Test FieldLabel',
    );
    expect(fieldDefinition.label).to.equal('Test FieldLabel');
  });
});
