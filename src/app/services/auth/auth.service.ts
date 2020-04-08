import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/models/User';
import { Response } from 'src/app/models/Response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User;
  private loginUrl: string = 'http://localhost:8080/api/login';

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private router: Router
  ) {}

  // check if token exist and if it is valid
  isAuthenticated(): boolean {
    const currentUserToken = localStorage.getItem('token');
    if (!currentUserToken) return false;
    return !this.jwtHelper.isTokenExpired(currentUserToken);
  }

  login(
    userCredentials: object,
    successCallback: (res: object) => void,
    errorCallback?: (error: object) => void
  ): void {
    //fetch the api for login
    this.http
      .post<Response>(this.loginUrl, userCredentials, httpOptions)
      .subscribe(
        (data) => {
          console.log('data', data);
          if (!data['status']) return; // it means unAuthorize

          localStorage.setItem('token', data.data['token']);
          const user: User = {
            name: data.data['name'],
            username: data.data['username'],
          };

          this.currentUser = user;
          console.log('new user', this.currentUser);
          successCallback && successCallback(user);
          this.router.navigateByUrl('/admin');
        },
        (error) => {
          alert(error.error.message); //we will make that nicer :D
          console.log('error', error);
          errorCallback && errorCallback(error);
        }
      );
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('token');
  }
}
