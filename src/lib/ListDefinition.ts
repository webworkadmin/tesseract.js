import {
  AutoSortByStateDefinition,
  ListObjectExpression,
  FrequencyModeEnum,
  Page,
  Generatable
} from "./"

import { DimensionDefinition } from "./DimensionDefinition"

export class ListDefinition extends Generatable {
  StateName: String
  LibraryId: String
  Def: DimensionDefinition
  AutoSortByState: AutoSortByStateDefinition
  FrequencyMode: FrequencyModeEnum
  ShowAlternatives: Boolean
  InitialDataFetch: Array<Page>
  Expressions: ListObjectExpression

  constructor() {
    super()
  }

  generate() {
    let generated: any = super.generate()

    if (generated.qInitialDataFetch == null) {
      let width = this.Def && this.Def.FieldDefinitions ? this.Def.FieldDefinitions.length : 1
      let height = Math.floor(10000 / width)
      generated.qInitialDataFetch = {
        qTop: 0,
        qLeft: 0,
        qWidth: width,
        qHeight: height
      }
    }

    return generated
  }
}
