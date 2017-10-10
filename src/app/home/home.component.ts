import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the Ninja Directory';
  @Input() ninja;
  @Output() onYell = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireYellEvent($event: Event) {
    this.onYell.emit($event);
  }
}
