import {Component, Input} from '@angular/core';
import {AuthenticationService} from "./login/authentication.service";
import {Subject} from "rxjs";

@Component({
  selector: 'root',
  template: '' +
    '<mat-toolbar color="primary">\n' +
      '<mat-toolbar-row>\n' +
        '<button mat-button routerLink="/">Home</button>' +
        '<button mat-button routerLink="/memory">{{title}}</button>' +
        '<button mat-button routerLink="/login">Login</button>'+
        '<button mat-button *ngIf="login_status()" (click)="logout()">Logout</button>'+
    //
      '</mat-toolbar-row>\n' +
    '</mat-toolbar>' +
    '<router-outlet></router-outlet>',
  styles:[`button {float:right}`]
})


export class AppComponent{
  title = "Memory Game"
  static logged_in: boolean = !!localStorage.getItem('currentUser');

  constructor(private authenticationService:AuthenticationService){}

  login_status(){
    return AppComponent.logged_in
  }
  logout(){
    this.authenticationService.logout()
    AppComponent.logged_in = false;
  }
}
