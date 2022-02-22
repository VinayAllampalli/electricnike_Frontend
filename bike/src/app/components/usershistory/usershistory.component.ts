import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { BikeService } from 'src/app/service/bike.service';

@Component({
  selector: 'app-usershistory',
  templateUrl: './usershistory.component.html',
  styleUrls: ['./usershistory.component.css']
})
export class UsershistoryComponent implements OnInit {
  regbike:any;
  public displayedColumns = ['UserName', 'Location', 'Pdate', 'Ptime','Rdate','Rtime','AAdhar','BikeName'];


  constructor(private backend: BikeService) {
    this.histo();
   }

  ngOnInit(): void {


  }
  histo(){
    this.backend.history().subscribe(async(data:any)=>{
   console.log(data)
   this.regbike = data;

 })

}

}
