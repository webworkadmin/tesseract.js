import { DimensionDefinition } from '../../src/lib/DimensionDefinition';
import { GroupingEnum } from '../../src/lib/Enums';
import { FieldDefinition } from '../../src/lib/FieldDefinition';
import { SortCriteria } from '../../src/lib/SortCriteria';
import { FieldAttributes } from '../../src/lib/FieldAttributes';

import 'mocha';
import { expect } from 'chai';

describe('DimensionDefinition', () => {
  it('should be a constructor', () => {
    expect(DimensionDefinition).to.be.a('function');
    expect(DimensionDefinition).to.throw();
  });

  it('should be empty', () => {
    const dimensionDef = new DimensionDefinition();
    const json = JSON.stringify({});
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qFieldDefs with value passed in constructor', () => {
    const dimensionDef = new DimensionDefinition('Test Dimension Def');
    const json = JSON.stringify({ qFieldDefs: ['Test Dimension Def'] });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qGrouping', () => {
    const dimensionDef = new DimensionDefinition();
    dimensionDef.grouping = GroupingEnum.NOGROUPING;
    const json = JSON.stringify({ qGrouping: 'N' });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qFieldDefs (no qFieldLabels)', () => {
    const dimensionDef = new DimensionDefinition();
    dimensionDef.fieldDefinitions.push(
      new FieldDefinition('Test Dimension Def'),
    );
    const json = JSON.stringify({ qFieldDefs: ['Test Dimension Def'] });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qFieldDefs with qFieldLabels', () => {
    const dimensionDef = new DimensionDefinition();
    dimensionDef.fieldDefinitions.push(
      new FieldDefinition('Test Dimension Def', 'Test Label'),
    );
    const json = JSON.stringify({
      qFieldDefs: ['Test Dimension Def'],
      qFieldLabels: ['Test Label'],
    });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qSortCriteria', () => {
    const dimensionDef = new DimensionDefinition();
    const sortCriteria = new SortCriteria();
    sortCriteria.sortByNumeric = 0;
    dimensionDef.sortCriterias.push(sortCriteria);
    const json = JSON.stringify({ qSortCriterias: [{ qSortByNumeric: 0 }] });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qNumberPresentations', () => {
    const dimensionDef = new DimensionDefinition();
    const fieldAttributes = new FieldAttributes();
    fieldAttributes.format = 'TestFormat';
    dimensionDef.numberPresentations.push(fieldAttributes);
    const json = JSON.stringify({
      qNumberPresentations: [{ qFmt: 'TestFormat' }],
    });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qReverseSort', () => {
    const dimensionDef = new DimensionDefinition();
    dimensionDef.reverseSort = false;
    const json = JSON.stringify({ qReverseSort: false });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });

  it('should generate qActiveField', () => {
    const dimensionDef = new DimensionDefinition();
    dimensionDef.activeField = 1;
    const json = JSON.stringify({ qActiveField: 1 });
    const result = JSON.stringify(dimensionDef.generate());
    expect(result).to.equal(json);
  });
});
