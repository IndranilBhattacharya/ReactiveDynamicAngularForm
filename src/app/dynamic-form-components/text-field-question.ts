import { QuestionStructure } from "./question-structure";

export class TextFieldQuestion extends QuestionStructure<string> {
  override controlType = "textbox";
}
