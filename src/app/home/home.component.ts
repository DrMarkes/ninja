import {Component, OnInit} from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the ninja directory';

  constructor(private logger: LoggingService) { }

  ngOnInit() {
  }

  logIt() {
    this.logger.log();
  }

}
