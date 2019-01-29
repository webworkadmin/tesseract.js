export class Generatable {
  excludes: String[] = ['excludes', 'pascalExcludes'];
  pascalExcludes: String[] = [];

  generate(): Object {
    const generated: any = {};

    Object.keys(this)
      .filter(key => this.excludes.indexOf(key) < 0)
      .forEach((key) => {
        const currentValue: any = this[key];
        const pascalCaseKey =
          this.pascalExcludes.indexOf(key) < 0
            ? key.substr(0, 1).toUpperCase() + key.substr(1)
            : key;
        if (currentValue instanceof Generatable) {
          generated[`q${pascalCaseKey}`] = currentValue.generate();
        } else if (currentValue instanceof Array) {
          if (currentValue.length > 0) {
            generated[`q${pascalCaseKey}`] = [];
            currentValue.forEach((obj) => {
              if (obj instanceof Generatable) {
                generated[`q${pascalCaseKey}`].push(obj.generate());
              } else {
                generated[`q${pascalCaseKey}`].push(obj);
              }
            });
          }
        } else {
          generated[`q${pascalCaseKey}`] = currentValue;
        }
      });

    return generated;
  }
}
