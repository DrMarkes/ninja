import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the Ninja!';
  ninja = {
    name: 'Yoshi',
    belt: 'Black'
  };

  constructor() { }

  ngOnInit() {
  }

  alertMe(val: string) {
    alert(val);
  }
}
