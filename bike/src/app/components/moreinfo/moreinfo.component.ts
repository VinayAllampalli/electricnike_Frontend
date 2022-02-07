import { Component,  Inject, OnInit } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
  companylist: any;


  constructor(private backend: BikeService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.backend.bikesdata().subscribe((data:any)=>{
      this.companylist = data['res'];
    })
  }

}
