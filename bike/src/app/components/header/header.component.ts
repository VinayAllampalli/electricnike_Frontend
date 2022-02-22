import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from 'src/app/service/bike.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: any;
  time:any;

  constructor(public route: Router, private backend: BikeService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('username');

  }
  logout() {
    this.route.navigate(['/login']);
    localStorage.clear();
  }
  history(){
    this.route.navigate(['/usershistory']);


  }
  reg(){
    this.route.navigate(['/bikeregister']);


  }
}
