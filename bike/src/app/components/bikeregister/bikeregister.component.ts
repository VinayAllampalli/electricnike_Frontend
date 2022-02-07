import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BikeService } from 'src/app/service/bike.service';

@Component({
  selector: 'app-bikeregister',
  templateUrl: './bikeregister.component.html',
  styleUrls: ['./bikeregister.component.css']
})
export class BikeregisterComponent implements OnInit {
  form:any;
  filename: any;
  public displayedColumns = ['BikeName', 'Mileage', 'BikeModel', 'Topspeed','price', 'update', 'delete']
  imageSrc: any
  regbike: any;
  data: any;

  constructor(private backend: BikeService, public fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formbuilder()

    this.backend.bikeregisterget().subscribe(data=>{
      console.log(data)
      this.regbike = data
    })


      }

  formbuilder(){
    this.form = this.fb.group({
      bike:  ['',[Validators.required,]],
      mile:  ['',[Validators.required,]],
      bikemodel: ['',[Validators.required,]],
      speed: ['',[Validators.required,]],
      price:['',[Validators.required,]],
      file: ['', [Validators.required,]],
    })

}
get bike(){
  return this.form.get('bike');

}
get mile(){
  return this.form.get('mile');

}
get bikemodel(){
  return this.form.get('bikemodel')
}
get speed(){
  return this.form.get('speed')
}

get price(){
  return this.form.get('price')

}
get file(){
  return this.form.get('file')
}
image!: File;
fileUpload(event: any) {

  this.image = event.target.files[0];
  const reader = new FileReader()
  reader.readAsDataURL(this.image)
  console.log(this.image)
  reader.onload = () =>{
    this.imageSrc = reader.result as string;
    this.filename = this.image.name
  }

}



Submit(){
  if(!this.form.valid){
    return
  }

  // let temp = this.form.value;
var formData:any = new FormData();

formData.append("file",this.image)
formData.append("bike",this.form.get('bike')?.value)
formData.append("mile",this.form.get('mile')?.value)
formData.append("bikemodel",this.form.get('bikemodel')?.value)
formData.append("speed",this.form.get('speed')?.value)
formData.append("price",this.form.get('price')?.value)
  console.log('-----------------------------------', formData);
  this.backend.bikereg(formData).subscribe((data) => {
    console.log('--------', data);
    this.form.reset();
  });

}
edit(id: any) {
  this.backend.bikeupdate(id).subscribe((x:any) => {

    this.data= x.result;
    console.log("x data", this.data);
    this.form.patchValue({name:this.data.bike});
    this.form.patchValue({position:this.data.mile});
    this.form.patchValue({office:this.data.bikemodel});
    this.form.patchValue({salary:this.data.speed});
    this.form.patchValue({salary:this.data.speed});
  })
}
}

