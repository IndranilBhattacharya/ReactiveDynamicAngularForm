import { QuestionStructure } from "../dynamic-form-components/question-structure";

export class DropdownQuestion extends QuestionStructure<string> {
  override controlType = "dropdown";
}
