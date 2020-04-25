import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navTitle: string = 'My Personal Page';
  navHome: string = 'Home';
  navProfile: string = 'Profile';
  navArticles: string = 'Articles';
  navContact: string = 'Contact me';

  constructor() { }

  ngOnInit(): void {
  }

}
