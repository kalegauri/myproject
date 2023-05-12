import { Component } from '@angular/core';

@Component({
  selector: 'app-my-firstfile',
  templateUrl: './my-firstfile.component.html',
  styleUrls: ['./my-firstfile.component.css']
})
export class MyFirstfileComponent {
  public sampleText:any ="";
  private name = "Ramesh";
  protected role:string = "Software Developer";
  public flag:boolean= true;

  public age:number = 11;
  public link:any ="";
  public imgPath:any="";

  // two way data binding
  public fname:any="";


  constructor(){
    // Interpolation bidning 
    this.sampleText ="Angular interpolation binding"; 
    
    //property or attribute binding  
    if(this.age > 18){
      this.link = "https://www.codeng.in";
    }
    else{
      this.link = "https://www.google.com";
    }
  }

  //event binding 
  clickEvent(){
    console.log("This is an event binding");
  }


}



