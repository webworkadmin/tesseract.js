import { AutoSortByStateDefinition } from './AutoSortByStateDefinition';
import { ListObjectExpression } from './ListObjectExpression';
import { FrequencyModeEnum } from './Enums';
import { Page } from './Page';
import { Generatable } from './Generatable';

import { DimensionDefinition } from './DimensionDefinition';

export class ListDefinition extends Generatable {
  stateName: String;
  libraryId: String;
  def: DimensionDefinition;
  autoSortByState: AutoSortByStateDefinition;
  frequencyMode: FrequencyModeEnum;
  showAlternatives: Boolean;
  initialDataFetch: Page[] = [];
  expressions: ListObjectExpression;

  constructor() {
    super();
  }

  generate() {
    const generated: any = super.generate();

    if (generated.qInitialDataFetch == null) {
      const width =
        this.def && this.def.fieldDefinitions
          ? this.def.fieldDefinitions.length
          : 1;
      const height = Math.floor(10000 / width);
      generated.qInitialDataFetch = [{
        qTop: 0,
        qLeft: 0,
        qWidth: width,
        qHeight: height,
      }];
    }

    return generated;
  }
}
