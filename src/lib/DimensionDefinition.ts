import {
  GroupingEnum,
  FieldDefinition,
  SortCriteria,
  FieldAttributes,
  Generatable
} from './'

export class DimensionDefinition extends Generatable {
  Grouping: GroupingEnum
  FieldDefinitions: Array<FieldDefinition> = []
  SortCriterias: Array<SortCriteria> = []
  NumberPresentations: Array<FieldAttributes> = []
  ReverseSort: Boolean
  ActiveField: Number

  constructor(definition?: String) {
    super()
    this.excludes.push('FieldDefinitions')
    if (definition) {
      this.FieldDefinitions.push(new FieldDefinition(definition))
    }
  }

  generate() {
    let generated: any = super.generate()
    if (this.FieldDefinitions.length > 0) {
      generated.qFieldDefs = []
      generated.qFieldLabels = []
      this.FieldDefinitions.forEach(definition => {
        generated.qFieldDefs.push(definition.Definition)
        if (definition.Label) {
          generated.qFieldLabels.push(definition.Label)
        }
      })
      if (generated.qFieldLabels.length === 0) delete generated.qFieldLabels
    }
    return generated
  }
}
