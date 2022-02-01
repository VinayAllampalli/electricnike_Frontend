import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from 'src/app/service/bike.service';



@Component({
  selector: 'app-bikeinfo',
  templateUrl: './bikeinfo.component.html',
  styleUrls: ['./bikeinfo.component.css']
})
export class BikeinfoComponent implements OnInit {
  form:any;
  MF_Year=["2018","2019","2020","2021","2022"]


  constructor(private fb:FormBuilder,public route:Router,private backend:BikeService) { }

  ngOnInit(): void {
    this.formbuilder()

  }
  formbuilder(){
    this.form = this.fb.group({
      bike:  ['',[Validators.required,]],
      mile:  ['',[Validators.required,]],
      color: ['',[Validators.required,]],
      speed: ['',[Validators.required,]],
      mf_year:['',[Validators.required,]],
      number:['',[Validators.required,]],
      price:['',[Validators.required,]]
    })

}
get bike(){
  return this.form.get('bike');

}
get mile(){
  return this.form.get('mile');

}
get color(){
  return this.form.get('color')
}
get speed(){
  return this.form.get('speed')
}
get mf_year(){
  return this.form.get('mf_year')
}
get number(){
  return this.form.get('number')

}
get price(){
  return this.form.get('price')

}
Submit(){
  if(!this.form.valid){
    return
  }
  let temp=this.form.value;

console.log("---",temp)
  let obj:any={}
  obj.bike=temp.bike
  obj.mile=temp.mile
  obj.color=temp.color
  obj.speed=temp.speed
  obj.mf_year=temp.mf_year
  obj.number=temp.number
  obj.price=temp.price

console.log('-----------------------------------',obj);
this.backend.bikesinfo(obj).subscribe(data=>{
  return data
}


);




}
}

