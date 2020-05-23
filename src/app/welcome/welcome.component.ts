import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../login/authentication.service";

@Component({
  selector: 'app-welcome',
  template: 'Welcome<span *ngIf="user">, {{user[\'username\']}}</span>' +
    '<span *ngIf="!user">, please log in</span>'
})
export class WelcomeComponent {
  user:string = JSON.parse(localStorage.getItem('currentUser'));

  constructor(public authenticationService:AuthenticationService) { }
}
