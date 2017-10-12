import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';

declare let firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {
  ninjas = [];

  term: string;

  constructor(private logger: LoggingService,
              private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.fetchData()
    //   .subscribe(
    //     data => this.ninjas = data
    //   );

    this.fbGetData();
  }

  logIt() {
    this.logger.log();
  }

  fbGetData() {
    firebase.database().ref('/').on("child_added",
      snapshot => {
      this.ninjas.push(snapshot.val())
      });
  }

  remove($event) {}
}
