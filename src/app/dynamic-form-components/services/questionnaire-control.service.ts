import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionStructure } from "../question-structure";

@Injectable({
  providedIn: "root",
})
export class QuestionnaireControlService {
  createFormGroup(questions: QuestionStructure<string>[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || "", Validators.required)
        : new FormControl(question.value || "");
    });
    return new FormGroup(group);
  }
}
