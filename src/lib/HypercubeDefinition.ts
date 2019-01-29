import {
  CalcCond,
  Dimension,
  Measure,
  Page,
  HypercubeModeEnum,
  ReductionModeEnum,
  ValueExpression,
  Generatable
} from "./"

export class HypercubeDefinition extends Generatable {
  StateName: String
  Dimensions: Array<Dimension> = []
  Measures: Array<Measure> = []
  InterColumnSortOrder: Array<Number>
  SuppressZero: Boolean
  SuppressMissing: Boolean
  InitialDataFetch: Array<Page>
  ReductionMode: ReductionModeEnum
  Mode: HypercubeModeEnum
  PseudoDimPosition: Number
  NumberOfLeftDimensions: Number
  AlwaysFullyExpanded: Boolean
  MaxStackedCells: Number
  PopulateMissing: Boolean
  ShowTotalsAbove: Boolean
  IndentMode: Boolean
  CalcCond: ValueExpression
  SortbyYValue: Number
  CalcCondition: CalcCond
  ColumnOrder: Array<Number>

  constructor() {
    super()
    this.excludes.push("NumberOfLeftDimensions")
    this.excludes.push("PseudoDimPosition")
  }

  generate() {
    let generated: any = super.generate()
    if (this.NumberOfLeftDimensions)
      generated.qNoOfLeftDims = this.NumberOfLeftDimensions

    if (this.PseudoDimPosition) generated.PseudoDimPos = this.PseudoDimPosition

    if (generated.qInitialDataFetch == null) {
      let width = this.Dimensions.length + this.Measures.length
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
