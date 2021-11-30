import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { QuestionStructure } from "../question-structure";
import { QuestionnaireControlService } from "../services/questionnaire-control.service";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionStructure<string>[] | null = [];
  form!: FormGroup;
  payLoad = "";

  constructor(private qcs: QuestionnaireControlService) {}

  ngOnInit() {
    this.form = this.qcs.createFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
