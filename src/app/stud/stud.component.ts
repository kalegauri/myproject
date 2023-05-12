import { Component } from '@angular/core';

@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent {

  public name:any = "";
  public name1 = "https://www.google.com";
  public age = 23;
  public link:any ="";
  constructor(){
    if (this.age > 18){
      this.link ="https://www.facebook.com";
    }
    else{
      this.link ="https://www.google.com"
    }
  }

}
