import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {Router, RouterModule} from "@angular/router";



@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`http://127.0.0.1:5000/api/login`, { username, password })
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response && response.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log({username: 'test', token: response['token'], expiresIn: response['expiresIn']})
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: response['token'], expiresIn: response['expiresIn']}));
          this.currentUserSubject.next(response);
        }

        return response;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    console.log('logout')
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    window.location.reload()
  }
}
