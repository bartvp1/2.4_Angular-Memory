import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from "rxjs/operators";
import {InterceptedHttp} from "../http/http.interceptor";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";
import {stringify} from "querystring";



@Injectable({providedIn: 'root'})
export class AuthenticationService {

  public currentUser;

  constructor(private http: Http, private router:Router) {  }

  login(username: string, password: string) {

    return this.http.post(`http://127.0.0.1:5000/api/login`, { username, password })
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response.json().message == "ok" && response.json().token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log({username: username, token: response.json().token, expiresIn: response.json().expiresIn})
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: response.json().token, expiresIn: response.json().expiresIn}));
          AppComponent.logged_in = true;
        }
        return response;
      }));
  }

  logout() {
    console.log('logout')
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    AppComponent.logged_in = false;
    this.router.navigate(['/'])
  }
}
