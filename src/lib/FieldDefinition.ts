export class FieldDefinition {
  definition: String;
  label: String;

  constructor(definition?: String, label?: String) {
    if (definition) {
      this.definition = definition;
    }
    if (label) {
      this.label = label;
    }
  }
}
