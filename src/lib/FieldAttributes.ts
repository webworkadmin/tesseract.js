import { FieldTypeEnum, Generatable } from './'

export class FieldAttributes extends Generatable {
  Type: FieldTypeEnum
  NumberDecimals: Number
  UseThousandsSeparator: Boolean
  Format: String
  DecimalSeparator: String
  ThousandSeparator: String
  SAFEARRAY: Array<any> = []

  constructor() {
    super()
    this.excludes.push(
      'NumberDecimals',
      'UseThousandsSeparator',
      'Format',
      'DecimalSeparator',
      'ThousandSeparator'
    )
  }

  generate() {
    let generated: any = super.generate()
    generated.qnDec = this.NumberDecimals
    if (this.UseThousandsSeparator !== undefined) {
      generated.qUseThou = this.UseThousandsSeparator ? 1 : 0
    }
    generated.qFmt = this.Format
    generated.qDec = this.DecimalSeparator
    generated.qThou = this.ThousandSeparator
    return generated
  }
}
