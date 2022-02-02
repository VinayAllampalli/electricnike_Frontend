import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  

  constructor( public _http:HttpClient) { }


  public URL = "http://localhost:3000/bike/bikesdata";
  public bikegeturl = "http://localhost:3000/bikeregister/bikeByget"
  public _adminRegURL = "http://localhost:3000/bikeregister/bikeByinsert"
  public _adminRegDataDel = "http://localhost:3000/bikeregister/bikeremove"

  adminForm:FormGroup = new FormGroup({

    bikename: new FormControl ('', Validators.required),
    mileage: new FormControl ('', Validators.required),
    price: new FormControl ('', Validators.required),
    model:new FormControl ('', Validators.required),
    topspeed: new FormControl ('', Validators.required),
    image:new FormControl ('', Validators.required),
    fileSource: new FormControl ('',Validators.required)

  })
  initializeFormGroup(){
    this.adminForm.setValue({
      bikename: '',
      mileage: '',
      price: '',
      model: '',
      topspeed: '',
      image: '',
      fileSource:'',
      
    })
  }
  insertAdmin(admin: any){
    return this._http.post<any>(this._adminRegURL, admin)
   }


  bikesdata(){
   return this._http.get(this.URL)
  }

  bikeregisterget(){
  return  this._http.get(this.bikegeturl)
  }


  bikeregisterdatadelete(deletebike:any){
   return this._http.delete(this._adminRegDataDel,deletebike)
  }
  // bikeregisterinsert(data:any){
  //   return this._http.post(this.bikeinserturl,data)
  // }
}
