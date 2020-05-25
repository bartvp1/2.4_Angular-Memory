import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../login/authentication.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-welcome',
  template: '<span>Welcome, {{welcome_text()}}</span>'
})
export class WelcomeComponent {

  welcome_text():string{
    if(AppComponent.logged_in) {
      return JSON.parse(localStorage.getItem('currentUser')).username;
    } else {
      return 'please log in'
    }
  };

}
