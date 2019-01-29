import {
  CalcCond,
  Dimension,
  Measure,
  Page,
  HypercubeModeEnum,
  ReductionModeEnum,
  ValueExpression,
  Generatable,
} from './';

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
    if (this.numberOfLeftDimensions) {
      generated.qNoOfLeftDims = this.numberOfLeftDimensions;
    }

    if (this.pseudoDimPosition) generated.PseudoDimPos = this.pseudoDimPosition;

    if (generated.qInitialDataFetch == null) {
      const width = this.dimensions.length + this.measures.length;
      const height = Math.floor(10000 / width);
      generated.qInitialDataFetch = {
        qTop: 0,
        qLeft: 0,
        qWidth: width,
        qHeight: height,
      };
    }

    return generated;
  }
}
