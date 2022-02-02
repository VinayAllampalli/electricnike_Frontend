import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {GeneralService} from 'src/app/shared/general.service'
import { InfobikeComponent } from '../infobike/infobike.component';
@Component({
  selector: 'app-bike-information',
  templateUrl: './bike-information.component.html',
  styleUrls: ['./bike-information.component.css']
})


export class BikeInformationComponent implements OnInit {

  dataSource:any=[];

  displayedColumns: string[] = ['S.no','name','email', 'phonenumber', 'adharnumber','doorno','Click','Action'];
  
  getbikeinformation = []
  constructor(public _general:GeneralService,public _dialog:MatDialog) { }

  ngOnInit(): void {
    this._general.bikesdata().subscribe(data=>{
      this.dataSource = data
      console.log(data)
    })
    
  }



  morebikeinfo(data: any){
    const dialogref = this._dialog.open(InfobikeComponent,{ width:'600px', height:'400px', data:data})
    dialogref.afterClosed().subscribe((data)=>{
      if(data=='updated'){
        this.ngOnInit();
      }
    })
  }
}
