import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  a:any;
  crateForm!: FormGroup;
  showForm!:false;
  formValue: any;
  combineData:any;
  pop!:false;
  SurpriseForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
  })
  lastNamee: any;
  firsNamee:any;
  

  fruit = [
    { name: 'Apple',  src: "../../assets/images/Red_Apple.jpg"},
    { name: 'Pine Apple', src: "../../assets/images/pineapple.jpg"},
    { name: 'Water Melon', src: "../../assets/images/fruits-watermelons.jpg" }
  ];
  randomFruit: any;

  constructor(){}
  ngOnInit()
  {
    this.getData();
  }
  getData(){
    this.a = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Ut autem at hic non, cum consequuntur doloremque voluptas. 
    Suscipit labore molestiae sequi explicabo iure totam? 
    Provident nostrum voluptates unde odio asperiores!!!`
  }

  clickMe(a:any):void{
    a = true;
   this.showForm = this.a;
    
  }
  
  onSubmit(){
   this.firsNamee  = this.SurpriseForm.value.firstName;
   this.lastNamee = this.SurpriseForm.value.lastName;
   this.combineData = this.firsNamee+ this.lastNamee;
   console.log(this.combineData)
   if(this.combineData)
   {
    this.pop = false
   }
   let randomFruitIndex = Math.floor(Math.random()*this.fruit.length)
  //  console.log(randomFruitIndex)
   this.randomFruit = this.fruit[randomFruitIndex]
   console.log(this.randomFruit)
  }
}
