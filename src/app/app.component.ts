import {Component, Input} from '@angular/core';
import {AuthenticationService} from "./login/authentication.service";
import {Subject} from "rxjs";

@Component({
  selector: 'root',
  template:
    '<mat-toolbar color="primary">\n' +
      '<mat-toolbar-row>\n' +
        '<button mat-button routerLink="/">Home</button>' +
        '<button mat-button routerLink="/memory">{{title}}</button>' +
        '<button mat-button *ngIf="!login_status()" routerLink="/login">Login</button>'+
        '<button mat-button *ngIf="login_status()" (click)="logout()">Logout</button>'+
      '</mat-toolbar-row>\n' +
    '</mat-toolbar>' +
    '<router-outlet></router-outlet>'
})


export class AppComponent{
  title = "Memory Game"

  constructor(private authenticationService:AuthenticationService){}

  login_status(){
    return AuthenticationService.logged_in
  }
  logout(){
    this.authenticationService.logout()
  }
}
