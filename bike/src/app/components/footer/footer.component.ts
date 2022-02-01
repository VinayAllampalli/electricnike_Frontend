import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  imageObject = [{
    image: 'https://cdn.mos.cms.futurecdn.net/KXNQ5WWemEDnftgFQBNBg-1200-80.jpg',
    thumbImage: 'https://cdn.mos.cms.futurecdn.net/KXNQ5WWemEDnftgFQBNBg-1200-80.jpg',
    title: 'OLA SCOOTER'
}, {
    image: 'https://media.zigcdn.com/media/model/2020/Oct/ather-450-std-right-side-view_360x240.jpg',
    thumbImage: 'https://media.zigcdn.com/media/model/2020/Oct/ather-450-std-right-side-view_360x240.jpg',
    title: 'ATHER BIKE'
},{
    image: 'https://www.firstpost.com/wp-content/uploads/2021/12/bounce-infinity-e1-electric-scooter-launched-in-india-priced-from-rs-45000.jpeg',
    thumbImage: 'https://www.firstpost.com/wp-content/uploads/2021/12/bounce-infinity-e1-electric-scooter-launched-in-india-priced-from-rs-45000.jpeg',
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

  constructor() { }

  ngOnInit(): void {
  }

}
