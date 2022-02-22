import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BikeService } from 'src/app/service/bike.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {
  test:any;
  user:any;
  details:any;

  constructor( public dialog: MatDialog,private backend: BikeService,private route:Router) { }

  ngOnInit(): void {
    this.test = this.backend.bookingDetails;
    this.user = this.backend.customer;
    this.details = this.backend.details
    console.log("...........................",this.test,this.user,this.details)
  }
submit(){
  let obj: any = {};

  obj.booking  ={}= this.test;
  obj.username=this.user
  obj.details= {}=this.details

  console.log("-----------------",obj)
  this.backend.bookinguser(obj).subscribe((data) => {
   console.log('--------', data);


})
}
cancel(){
  this.route.navigate(['/login']);


}

}
