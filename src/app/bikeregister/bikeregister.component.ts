import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GeneralService } from 'src/app/shared/general.service';

@Component({
  selector: 'app-bikeregister',
  templateUrl: './bikeregister.component.html',
  styleUrls: ['./bikeregister.component.css']
})
export class BikeregisterComponent implements OnInit {
  imageSrc:any;
  regbike:any = []
  registerbikedata:any = FormGroup;
  
  constructor(public _general:GeneralService,public fb:FormBuilder,public dialog:MatDialog) { }










  ngOnInit(){

  

this._general.bikeregisterget().subscribe(data=>{
  console.log(data)
  this.regbike = data
})
    
  }


//   onFileChange(event:any){
// const reader = new FileReader()
// console.log(reader)
// if(event.target.files && event.target.files.length){
// const [file] = event.target.files;
// reader.readAsDataURL(file) 

// reader.onload = () =>{
// this.imageSrc = reader.result as string;

// this.registerbikedata.patchValue({

//   fileSource: reader.result
// })
// }

// }
//   }


  
  file!: File;
fileUpload(event:any){
  this.file = event.target.files[0];
  const reader = new FileReader()
  reader.readAsDataURL(this.file)
  console.log(this.file)
  reader.onload = () =>{
    this.imageSrc = reader.result as string;
  }

}

  uploadExcel(){
console.log(this._general.adminForm.value)

let formData = new FormData();
console.log(formData)
formData.append("image",this.file)
formData.append(this._general.adminForm.value,"bikename"),
this._general.insertAdmin(formData).subscribe((res=>{
  console.log(res)
}))


  }


  deleteCompany(){

  }
}
