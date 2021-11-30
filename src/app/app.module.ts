import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DynamicQuestionComponent } from './dynamic-form-components/dynamic-question/dynamic-question.component';

@NgModule({
  declarations: [AppComponent, DynamicQuestionComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
