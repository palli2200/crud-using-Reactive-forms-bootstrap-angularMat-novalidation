import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {
  genderList = ["Male", "Female", "Others"]
  listOfData:any = []
  isEdit = false

   formData =new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    email:new FormControl(),
    age:new FormControl(),
    mobilenumber:new FormControl(),
    dob:new FormControl(),
    place:new FormControl(),    
    gender:new FormControl()
   })

  indexSelectedToEdit: any;

  OnSubmit(){
    console.log("form Data .....",this.formData.value)
    this.listOfData.push(this.formData.value)
    this.formData.reset()

  }
  OnCancle(){
    this.formData.reset()

  }
  onDelete(index:any){
    this.listOfData.splice(index, 1)

  }
  onEdit(index:any){
    this.isEdit = true
    this.formData.patchValue(this.listOfData[index])
    this.indexSelectedToEdit = index;
    // console.log("edit index ", index)
    // console.log("edit index ", this.indexSelectedToEdit)


  }
  OnSave(){
    this.isEdit = false
    //below are apped the row at bottom table 
    // this.listOfData.splice(this.indexSelecteToEdit, 1)
    // this.listOfData.push(this.formData.value)

    //edit and update the data in same row 
    this.listOfData[this.indexSelectedToEdit] = this.formData.value;
    
    this.formData.reset()
  }
  

  
}
