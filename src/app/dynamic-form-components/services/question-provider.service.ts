import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { DropdownQuestion } from "../dropdown-question";
import { InputFieldQuestion } from "../input-field-question";
import { QuestionStructure } from "../question-structure";

@Injectable({
  providedIn: "root",
})
export class QuestionProviderService {
  getQuestions() {
    const questions: QuestionStructure<string>[] = [
      new DropdownQuestion({
        key: "brave",
        label: "Bravery Rating",
        options: [
          { key: "solid", value: "Solid" },
          { key: "great", value: "Great" },
          { key: "good", value: "Good" },
          { key: "unproven", value: "Unproven" },
        ],
        order: 1,
        expectedAnswer: "good",
        elseText: "No good then",
      }),

      new InputFieldQuestion({
        key: "firstName",
        label: "First name",
        type: "normal_input",
        value: "",
        required: true,
        order: 3,
      }),

      new InputFieldQuestion({
        key: "lastName",
        label: "Last name",
        type: "normal_input",
        value: "",
        required: true,
        order: 4,
      }),

      new InputFieldQuestion({
        key: "emailAddress",
        label: "Email",
        type: "email",
        order: 2,
        expectedAnswer: "test@test.com",
        elseText: "test email required",
      }),
    ];
    return of([...questions].sort((a, b) => a.order - b.order));
  }
}
