import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BikeService } from 'src/app/service/bike.service';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  form: any;
  fontStyleControl = new FormControl();
  fontStyle?: string;
  bikename = {};
  display: any;
  filename: any;
  filename1: any;
  imageSrc: any;
  booking:any;
  test:any;
  user:any;
  bikedetails:any = []
  name:any




  constructor(private fb: FormBuilder, public dialog: MatDialog,private backend: BikeService,private route:Router) { }

  ngOnInit(): void {
    this.formbuilder()
    this.bikeinformation()
  //  this.test = this.backend.bookingDetails;
  //  this.user = this.backend.customer;

  console.log("-------------------------",this.backend.customer);
  }


  formbuilder() {
    this.form = this.fb.group({
      AAno: ['', [Validators.required, Validators.minLength(12)]],
      DLno: ['', [Validators.required, Validators.minLength(16)]],
      // file: ['', [Validators.required,]],
      // file1: ['', [Validators.required,]],
      bike: ['', [Validators.required,]],

    })
  }
  get DLno() {
    return this.form.get('DLno');
  }
  get AAno() {
    return this.form.get('AAno');
  }

  // get file() {
  //   return this.form.get('file');
  // }
  // get file1() {
  //   return this.form.get('file1');

  // }
  get bike() {
    return this.form.get('bike');

  }

bikeinformation(){
  this.backend.bikeregisterget().subscribe(res=>{
    this.bikedetails = res

    console.log(res)
   
  })
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

  image1!: File;
  fileUpload1(event: any) {

    this.image1 = event.target.files[0];
    const reader = new FileReader()
    reader.readAsDataURL(this.image1)
    console.log(this.image1)
    reader.onload = () =>{
      this.imageSrc = reader.result as string;
      this.filename = this.image1.name
    }

  }




  book(value: any) {
  console.log(value);


    this.display = value


  }
  logout() {
    this.route.navigate(['/login']);
    localStorage.clear();
  }


  submit() {
    if(!this.form.valid){
      return
    }
    let temp = this.form.value;
    // const booking = this.backend.bookingDetails

    console.log('---', temp);
    let obj: any = {};



    obj.DLno = temp.DLno;
    obj.AAno = temp.AAno;
    obj.bike = temp.bike;
    // obj.booking ={} = this.test;
    // obj.username=this.user
    console.log('-----------------------------------', obj);
    // this.backend.bookinguser(obj).subscribe((data) => {
    //   console.log('--------', data);
    this.backend.details=obj;
    console.log("_>>>>>>>>>>>>>>>>>",this.backend.details)
    this.route.navigate(['confirmDetails']);


  }


}


