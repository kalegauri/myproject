import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  public myForm: any;
  public courses: any = ['Engineering', "MCA", "BTech Agri", "MCS", "MSC"];
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      fname: ['Suresh'],
      lname: [''],
      email: [''],
      course: [''],
      gender: [''],
      pass: [''],
      cpass: ['']
    })
  }

  onSubmitData() {
    console.log(this.myForm.value);
  }



}
