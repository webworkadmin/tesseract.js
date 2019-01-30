import { GroupingEnum } from './Enums';
import { FieldDefinition } from './FieldDefinition';
import { SortCriteria } from './SortCriteria';
import { FieldAttributes } from './FieldAttributes';
import { Generatable } from './Generatable';

export class DimensionDefinition extends Generatable {
  grouping: GroupingEnum;
  fieldDefinitions: FieldDefinition[] = [];
  sortCriterias: SortCriteria[] = [];
  numberPresentations: FieldAttributes[] = [];
  reverseSort: Boolean;
  activeField: Number;

  constructor(definition?: String) {
    super();
    this.excludes.push('fieldDefinitions');
    if (definition) {
      this.fieldDefinitions.push(new FieldDefinition(definition));
    }
  }

  generate() {
    const generated: any = super.generate();
    if (this.fieldDefinitions.length > 0) {
      generated.qFieldDefs = [];
      generated.qFieldLabels = [];
      this.fieldDefinitions.forEach((definition) => {
        generated.qFieldDefs.push(definition.definition);
        if (definition.label) {
          generated.qFieldLabels.push(definition.label);
        }
      });
      if (generated.qFieldLabels.length === 0) delete generated.qFieldLabels;
    }
    return generated;
  }
}
