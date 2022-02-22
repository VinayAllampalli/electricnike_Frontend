import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  public customer:any;
  public bookingDetails:any;
  public details:any;
  
  constructor(private http: HttpClient) {


  }


  register(obj: any) {
    const body = JSON.stringify(obj);
    return this.http.post(`${environment.base_url}/register`, obj, {})
  }
  login(obj: any) {
    return this.http.post(`${environment.base_url}/login`, obj)
  }
  verifyMail(email: any, token: any) {
    return this.http.get(`${environment.base_url}/confirm/${email}/${token}`);
  }
  forgot(obj: any) {
    return this.http.post(`${environment.base_url}/reset`, obj);
  }
  validToken(obj: any) {
    return this.http.post(`${environment.base_url}/valid-token`, obj);
  }
  newPassword(obj: any) {
    return this.http.post(`${environment.base_url}/new-password`, obj);
  }

  bookinguser(obj: any) {
    const body = JSON.stringify(obj);
    return this.http.post(`${environment.base_url}/bikebooking`, obj, {})
  }


   bikeregisterget(){
    return  this.http.get(`${environment.base_url}/bikeByget`)
   }

    bikeupdate(obj:any){
      return this.http.put(`${environment.base_url}/bikeupdate`,obj)
    }
    bikereg(obj: any){
      return this.http.post(`${environment.base_url}/bikedetails1`,obj,{})
     }
     bikedelete(id:any){
      return this.http.delete(`${environment.base_url}/bikeremove/`+id)
    }

     bikeget(){
      return this.http.get(`${environment.base_url}/getall`)

     }
     history(){
      return this.http.get(`${environment.base_url}/history`)

     }
}
