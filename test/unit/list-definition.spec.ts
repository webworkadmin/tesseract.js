import { ListDefinition, DimensionDefinition, FieldDefinition, Page } from '../../src/lib';
import 'mocha';
import { expect } from 'chai';

describe('ListDefinition', () => {
  it('should be a constructor', () => {
    expect(ListDefinition).to.be.a('function');
  });

  it('should be empty', () => {
    const listDefinition = new ListDefinition();
    const json = JSON.stringify({
      qInitialDataFetch: [{ qTop: 0, qLeft: 0, qWidth: 1, qHeight: 10000 }],
    });
    const result = JSON.stringify(listDefinition.generate());
    expect(result).to.equal(json);
  });

  it('should contain a field', () => {
    const listDefinition = new ListDefinition();
    listDefinition.def = new DimensionDefinition();
    listDefinition.def.fieldDefinitions.push(new FieldDefinition('Field 1'))
    const json = JSON.stringify({
      qDef: { qFieldDefs: ['Field 1'] },
      qInitialDataFetch: [{ qTop: 0, qLeft: 0, qWidth: 1, qHeight: 10000 }]
    });
    const result = JSON.stringify(listDefinition.generate());
    expect(result).to.equal(json);
  });

  it('should contain a specified data fetch', () => {
    const listDefinition = new ListDefinition();
    const listPage = new Page();
    listPage.top = 0;
    listPage.left = 0;
    listPage.width = 0;
    listPage.height = 0;
    listDefinition.initialDataFetch.push(listPage);
    const json = JSON.stringify({
      qInitialDataFetch: [{ qTop: 0, qLeft: 0, qWidth: 0, qHeight: 0 }]
    });
    const result = JSON.stringify(listDefinition.generate());
    expect(result).to.equal(json);
  });
});
