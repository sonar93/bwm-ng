import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()

export class AuthService {
  constructor(private http: HttpClient) { }
  public register(userData: any): Observable<any> {
    return this.http.post(`/api/v1/users/register`, userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post(`/api/v1/users/auth`, userData).map(
      (token: string) =>  this.saveToken(token)
    );
  }

  private saveToken(token: string): string {
    localStorage.setItem('bwm_auth', token);
    return token;
  }
}
