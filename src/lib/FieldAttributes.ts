import { FieldTypeEnum } from './Enums';
import { Generatable } from './Generatable';

export class FieldAttributes extends Generatable {
  type: FieldTypeEnum;
  numberDecimals: Number;
  useThousandsSeparator: Boolean;
  format: String;
  decimalSeparator: String;
  thousandSeparator: String;
  SAFEARRAY: any[] = [];

  constructor() {
    super();
    this.excludes.push(
      'numberDecimals',
      'useThousandsSeparator',
      'format',
      'decimalSeparator',
      'thousandSeparator',
    );
  }

  generate() {
    const generated: any = super.generate();
    generated.qnDec = this.numberDecimals;
    if (this.useThousandsSeparator !== undefined) {
      generated.qUseThou = this.useThousandsSeparator ? 1 : 0;
    }
    generated.qFmt = this.format;
    generated.qDec = this.decimalSeparator;
    generated.qThou = this.thousandSeparator;
    return generated;
  }
}
