import { CalcCond } from './CalcCond';
import { Dimension } from './Dimension';
import { Measure } from './Measure';
import { Page } from './Page';
import { HypercubeModeEnum, ReductionModeEnum } from './Enums';
import { ValueExpression } from './ValueExpression';
import { Generatable } from './Generatable';

export class HypercubeDefinition extends Generatable {
  stateName: String;
  dimensions: Dimension[] = [];
  measures: Measure[] = [];
  interColumnSortOrder: Number[] = [];
  suppressZero: Boolean;
  suppressMissing: Boolean;
  initialDataFetch: Page[] = [];
  reductionMode: ReductionModeEnum;
  mode: HypercubeModeEnum;
  pseudoDimPosition: Number;
  numberOfLeftDimensions: Number;
  alwaysFullyExpanded: Boolean;
  maxStackedCells: Number;
  populateMissing: Boolean;
  showTotalsAbove: Boolean;
  indentMode: Boolean;
  calcCond: ValueExpression;
  sortbyYValue: Number;
  calcCondition: CalcCond;
  columnOrder: Number[] = [];

  constructor() {
    super();
    this.excludes.push('numberOfLeftDimensions');
    this.excludes.push('pseudoDimPosition');
  }

  generate() {
    const generated: any = super.generate();
    if (this.numberOfLeftDimensions != null) {
      generated.qNoOfLeftDims = this.numberOfLeftDimensions;
    }

    if (this.pseudoDimPosition != null) {
      generated.qPseudoDimPos = this.pseudoDimPosition;
    }

    if (generated.qInitialDataFetch == null) {
      const width = this.dimensions.length + this.measures.length || 1;
      const height = Math.floor(10000 / width);
      generated.qInitialDataFetch = [
        {
          qTop: 0,
          qLeft: 0,
          qWidth: width,
          qHeight: height,
        },
      ];
    }

    return generated;
  }
}
