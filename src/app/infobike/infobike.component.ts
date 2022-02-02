import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GeneralService } from 'src/app/shared/general.service';

@Component({
  selector: 'app-infobike',
  templateUrl: './infobike.component.html',
  styleUrls: ['./infobike.component.css']
})
export class InfobikeComponent implements OnInit {
  companylist: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public _genral:GeneralService,public dialog:MatDialog,) { }
  
  ngOnInit(): void {
    this._genral.bikesdata().subscribe((data:any)=>{
      this.companylist = data['res'];
    })
  }






}
