import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.css'
})
export class CrudTableComponent {
[x: string]: any;
  currentDateTime:any;
  formValue:any;
  submitted = false;
  createData : any = [];
  temp:any =[...this.createData];
  deleteData: any = [];
  isEdit !: boolean;
  index : any;
  constructor(private datePipe: DatePipe) {
    this.currentDateTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
  }


  crudForm = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    contNumber :  new FormControl('',[Validators.required]),
    gmail : new FormControl('',[Validators.required,Validators.email]),
  })

  

  onSubmit(){
    this.submitted = true;
    if(this.crudForm.value)
    {
      this.formValue= this.crudForm.value;
      if(!this.isEdit)
      {
        this.temp.push(this.formValue)
        this.createData = [...this.temp]
        console.log(this.createData)
      }
      else{
        this.createData.splice(this.index,1,this.formValue);
        this.onReset();
        this.isEdit=false;
        this.index = null;
        
      }
    }
    this.onReset();
  
  }

  onReset() {
    this.submitted = false;
    this.crudForm.reset();
  }

  deleteRow(i:any){
   this.deleteData = this.createData.splice(i,1)
  }

  onEdit(i:any){
    this.isEdit = true
    this. index= i;
    this.crudForm.setValue({
      firstName: this.createData[i].firstName,
      lastName: this.createData[i].lastName,
      contNumber: this.createData[i].contNumber,
      gmail: this.createData[i].gmail
    })
  }

}
