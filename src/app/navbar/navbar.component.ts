import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openHideNav(){
    const mainNav = document.querySelector('.main-nav');
    if(mainNav.classList.contains('open')){
      mainNav.classList.remove('open')
    }
    else
      mainNav.classList.add('open')
  }

}
