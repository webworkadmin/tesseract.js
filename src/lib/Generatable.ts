export class Generatable {
  excludes: Array<String> = ['excludes']

  generate(): Object {
    let generated: any = {}

    Object.keys(this)
      .filter(key => this.excludes.indexOf(key) < 0)
      .forEach(key => {
        let currentValue: any = this[key]
        if (currentValue instanceof Generatable) {
          generated[`q${key}`] = currentValue.generate()
        } else if (currentValue instanceof Array) {
          if (currentValue.length > 0) {
            generated[`q${key}`] = []
            currentValue.forEach(obj => {
              if (obj instanceof Generatable) {
                generated[`q${key}`].push(obj.generate())
              } else {
                generated[`q${key}`].push(obj)
              }
            })
          }
        } else {
          generated[`q${key}`] = currentValue
        }
      })

    return generated
  }
}
