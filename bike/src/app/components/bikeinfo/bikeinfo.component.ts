import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BikeService } from 'src/app/service/bike.service';
import { MatDialog } from '@angular/material/dialog';
import { MoreinfoComponent } from '../moreinfo/moreinfo.component';



@Component({
  selector: 'app-bikeinfo',
  templateUrl: './bikeinfo.component.html',
  styleUrls: ['./bikeinfo.component.css']
})
export class BikeinfoComponent implements OnInit {

 dataSource:any=[];

  displayedColumns: string[] = ['S.no','name','email', 'phonenumber', 'adharnumber','doorno','Click','Action'];
  getbikeinformation = []

  constructor(private fb: FormBuilder, public route: Router, private backend: BikeService,public _dialog:MatDialog) { }

  ngOnInit(): void {
    this.formbuilder()

  }
  formbuilder() {
    this.backend.bikesdata().subscribe(data=>{
      this.dataSource = data
      console.log(data)
    })

  }
  morebikeinfo(data: any){
    const dialogref = this._dialog.open(MoreinfoComponent,{ width:'600px', height:'400px', data:data})
    dialogref.afterClosed().subscribe((data)=>{
      if(data=='updated'){
        this.ngOnInit();
      }
    })
  }
}


