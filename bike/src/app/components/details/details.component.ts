import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { BikeinfoComponent } from '../bikeinfo/bikeinfo.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  form:any;
  fontStyleControl = new FormControl();
  fontStyle?: string;
  bikename=["OLA","ATHER","BOUNCE_INFINITY","E_PLUTO_7G","HERO_OPTIMA"];
  display:any;
  filename:any;
  filename1:any


  constructor(private fb:FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formbuilder()
  }

  formbuilder(){
    this.form = this.fb.group({
      AAno: ['', [Validators.required,Validators.minLength(12)]],
      DLno: ['', [Validators.required,Validators.minLength(16)]],
      file: ['',[Validators.required,]],
      file1:['',[Validators.required,]],
      bike:  ['',[Validators.required,]],

})
}
get DLno(){
  return this.form.get('DLno');
  }
  get AAno(){
    return this.form.get('AAno');
    }

  get file(){
  return this.form.get('file');
  }
  get file1(){
    return this.form.get('file1');

  }
  get bike(){
    return this.form.get('bike');

  }


  fileUpload(event:any){
    let x=event.target.files[0]
    this.filename = x.name
  }

  fileUpload1(event:any){
    let x=event.target.files[0]
    this.filename1 = x.name
  }
  book(value:any){

this.display=value


  }
  openDialog() {
    this.dialog.open(FooterComponent)
  }
  submit(){

  }



  }

