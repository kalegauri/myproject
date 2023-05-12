import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstfileComponent } from './my-firstfile/my-firstfile.component';
import { DirectivComponent } from './directiv/directiv.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { StudComponent } from './stud/stud.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempletDrivenFormComponent } from "./templet-driven-form/TempletDrivenFormComponent";

@NgModule({
  declarations: [
    AppComponent,
    MyFirstfileComponent,
    DirectivComponent,
    TemplateFormComponent,
    StudComponent,
    ReactiveFormComponent,
    TempletDrivenFormComponent,
    PipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
