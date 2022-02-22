import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { BikeService } from 'src/app/service/bike.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  checkOutTime: string = '';
  currentTime: any;
  form: any;
  select: any;
  location = ['Select', 'visakhapatnam'];
  minDate = new Date();
  Ptime: FormControl = new FormControl('');
  Rtime: FormControl = new FormControl('');
  imageObject = [{
    image: 'https://cdn.mos.cms.futurecdn.net/KXNQ5WWemEDnftgFQBNBg-1200-80.jpg',
    thumbImage: 'https://cdn.mos.cms.futurecdn.net/KXNQ5WWemEDnftgFQBNBg-1200-80.jpg',
    title: 'OLA SCOOTER'
  }, {
    image: 'https://media.zigcdn.com/media/model/2020/Oct/ather-450-std-right-side-view_360x240.jpg',
    thumbImage: 'https://media.zigcdn.com/media/model/2020/Oct/ather-450-std-right-side-view_360x240.jpg',
    title: 'ATHER BIKE'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1aQZg4lbTdnkwGBjBkJLSfneki2pU-2vMA&usqp=CAU',
    thumbImage: 'hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC1aQZg4lbTdnkwGBjBkJLSfneki2pU-2vMA&usqp=CAU',
    title: 'BOUNCE INFINITY'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXqgvVNQ8fpuSkWyZEDvx32qzCYytuwCP4l7MgprVrX3ysPIImuqSNuVuKVxpDFOsk44&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXqgvVNQ8fpuSkWyZEDvx32qzCYytuwCP4l7MgprVrX3ysPIImuqSNuVuKVxpDFOsk44&usqp=CAU',
    title: 'E PLUTO 7G'

  }, {
    image: 'https://imgd.aeplcdn.com/476x268/bw/models/hero-electric-optima-lead-acid20210511154426.jpg',
    thumbImage: 'https://imgd.aeplcdn.com/476x268/bw/models/hero-electric-optima-lead-acid20210511154426.jpg',
    title: 'HERO OPTIMA'
  }];

  required: boolean = !1;
  @ViewChild('timepicker') timepicker: any;
  @ViewChild('timepicker1') timepicker1: any;
  selectedInTime: any;

  constructor(
    private fb: FormBuilder,
    public route: Router,
    private backend: BikeService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.formbuilder();
  }
  formbuilder() {
    this.form = this.fb.group({
      location: ['', [Validators.required]],
      Pdate: ['', [Validators.required]],
      Rdate: ['', [Validators.required]],
      Rtime: ['', [Validators.required]],
      Ptime: ['', [Validators.required]],
    });
  }

  openFromIcon(timepicker: { open: () => void }) {
    if (!this.Ptime.disabled) {
      timepicker.open();
    }
  }
  openFromIcon1(timepicker1: { open: () => void }) {
    if (!this.Rtime.disabled) {
      timepicker1.open();
    }
  }

  selectInTime(value: string) {
    if (value !== '') {
      this.selectedInTime = value;
    }
  }
  submit() {
    let temp = this.form.value;

    console.log('---', temp);
    let obj: any = {};
    obj.location = temp.location;
    obj.Pdate = temp.Pdate;
    obj.Ptime = temp.Ptime;
    obj.Rdate = temp.Rdate;
    obj.Rtime = temp.Rtime;

    console.log('-----------------------------------', obj);
    // this.backend.bookinguser(obj).subscribe((data) => {
    //   console.log('--------', data);
    // });
    this.backend.bookingDetails=obj;
    console.log("testsfs",this.backend.bookingDetails);

    this.router.navigate(['details']);
  }
}
