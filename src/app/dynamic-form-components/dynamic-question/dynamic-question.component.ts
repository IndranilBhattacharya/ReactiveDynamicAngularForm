import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionStructure } from "../question-structure";

@Component({
  selector: "app-dynamic-question",
  templateUrl: "./dynamic-question.component.html",
  styleUrls: ["./dynamic-question.component.css"],
})
export class DynamicQuestionComponent {
  @Input() question!: QuestionStructure<string>;
  @Input() form!: FormGroup;
  @Input()
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
