export class FieldDefinition {
  Definition: String
  Label: String

  constructor(definition?: String, label?: String) {
    if (definition) {
      this.Definition = definition
    }
    if (label) {
      this.Label = label
    }
  }
}
