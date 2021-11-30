import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { QuestionStructure } from "./dynamic-form-components/question-structure";
import { QuestionProviderService } from "./dynamic-form-components/services/question-provider.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Chris", "Anna"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails.bind(this)
        ),
      }),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signupForm.setValue({
      userData: {
        username: "Max",
        email: "email@test.com",
      },
      gender: "female",
      hobbies: [],
    });
    (<FormArray>this.signupForm.get("hobbies")).push(
      new FormControl("Painting")
    );
    this.signupForm.patchValue({
      userData: {
        username: "Maximilian Schwarzmüller",
      },
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  getListOfControls(): AbstractControl[] {
    return (<FormArray>this.signupForm.get("hobbies")).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { usernameInvalid: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailInvalid: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  //------ Dynamic -----------//

  questions$: Observable<QuestionStructure<any>[]>;

  constructor(service: QuestionProviderService) {
    this.questions$ = service.getQuestions();
  }
}
