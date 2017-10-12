import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    { name: 'Ryu', belt: 'Black' },
    { name: 'Spider', belt: 'Red' },
    { name: 'Hitman', belt: 'Purple' }
  ];

  term: string;

  constructor() { }

  ngOnInit() {
  }

  remove($event) {}
}
