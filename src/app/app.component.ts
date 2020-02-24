import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular6-login';
  constructor(private routing:Router){

  }
  login() {
      this.routing.navigate['login']
  }
}
