export enum OtherModeEnum {
  OTHER_OFF = 'OTHER_OFF',
  OTHER_COUNTED = 'OTHER_COUNTED',
  OTHER_ABS_LIMITED = 'OTHER_ABS_LIMITED',
  OTHER_ABS_ACC_TARGET = 'OTHER_ABS_ACC_TARGET',
  OTHER_REL_LIMITED = 'OTHER_REL_LIMITED',
  OTHER_REL_ACC_TARGET = 'OTHER_REL_ACC_TARGET'
}

export enum OtherLimitModeEnum {
  OTHER_GE_LIMIT = 'OTHER_GE_LIMIT',
  OTHER_LE_LIMIT = 'OTHER_LE_LIMIT',
  OTHER_GT_LIMIT = 'OTHER_GT_LIMIT',
  OTHER_LT_LIMIT = 'OTHER_LT_LIMIT'
}

export enum OtherTotalModeEnum {
  TOTAL_OFF = 'TOTAL_OFF',
  TOTAL_EXPR = 'TOTAL_EXPR'
}

export enum GroupingEnum {
  NOGROUPING = 'N',
  DRILLDOWN = 'H',
  CYCLIC = 'C'
}

export enum FieldTypeEnum {
  UNKNOWN = 'U',
  ASCII = 'A',
  INTEGER = 'I',
  REAL = 'R',
  FIX = 'F',
  MONEY = 'M',
  DATE = 'D',
  TIME = 'T',
  TIMESTAMP = 'TS',
  INTERVAL = 'IV'
}

export enum OtherSortModeEnum {
  OTHER_SORT_DEFAULT = 'OTHER_SORT_DEFAULT',
  OTHER_SORT_DESCENDING = 'OTHER_SORT_DESCENDING',
  OTHER_SORT_ASCENDING = 'OTHER_SORT_ASCENDING'
}

export enum HypercubeModeEnum {
  DATA_MODE_STRAIGHT = 'S',
  DATA_MODE_PIVOT = 'P',
  DATA_MODE_PIVOT_STACK = 'K'
}

export enum ReductionModeEnum {
  DATA_REDUCTION_NONE = 'N',
  DATA_REDUCTION_ONEDIM = 'D1',
  DATA_REDUCTION_SCATTERED = 'S',
  DATA_REDUCTION_CLUSTERED = 'C',
  DATA_REDUCTION_STACKED = 'ST',
}

export enum FrequencyModeEnum {
  NX_FREQUENCY_NONE = 'N',
  NX_FREQUENCY_VALUE = 'V',
  NX_FREQUENCY_PERCENT = 'P',
  NX_FREQUENCY_RELATIVE = 'R'
}