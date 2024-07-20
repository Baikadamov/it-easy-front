import {Component, OnInit} from '@angular/core';
import { initFlowbite } from 'flowbite';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'iteasy-project';

  showSideBar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSideBar = !['/login', '/register',].includes(event.url);
      }
    });
  }

  ngOnInit() {
    initFlowbite();
  }

}
