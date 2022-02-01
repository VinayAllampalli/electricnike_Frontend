import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  checkOutTime: string = "";
  currentTime:any
  form:any;
  select:any;
  location=[
    "Select",
    "visakhapatnam"
    ];
    minDate = new Date();
    Ptime: FormControl = new FormControl("");
    Rtime: FormControl = new FormControl("");

  required: boolean = !1;
  @ViewChild("timepicker") timepicker: any;
  @ViewChild("timepicker1") timepicker1:any;
  selectedInTime: any;


  constructor(private fb:FormBuilder,public route:Router,private backend:BikeService) {

  }

  ngOnInit(): void {


    this.formbuilder()

  }
  formbuilder(){
    this.form=this.fb.group({
    location:["",[Validators.required]],
    Pdate:["",[Validators.required]],
    Rdate:["",[Validators.required]],
    Rtime:["",[Validators.required]],
    Ptime:["",[Validators.required]]
    })
}

openFromIcon(timepicker: { open: () => void }) {
  if (!this.Ptime.disabled) {
    timepicker.open();
  }
}
openFromIcon1(timepicker1: { open: () => void }) {
  if (!this.Rtime.disabled) {
    timepicker1.open();
  }
}

selectInTime(value: string) {
  if (value !== "") {
      this.selectedInTime = value;
  }
}
submit(){

  let temp=this.form.value;

console.log("---",temp)
  let obj:any={}
  obj.location=temp.location
  obj.Pdate=temp.Pdate
  obj.Ptime=temp.Ptime
  obj.Rdate=temp.Rdate
  obj.Rtime=temp.Rtime

console.log('-----------------------------------',obj);
this.backend.bookinguser(obj).subscribe((data)=>{
  console.log("--------",data)
})


}




}

