import { Generatable } from "./Generatable";

export class FieldDefinition extends Generatable {
  definition: String;
  label: String;

  constructor(definition?: String, label?: String) {
    super();
    if (definition) {
      this.definition = definition;
    }
    if (label) {
      this.label = label;
    }
  }
}
