import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer, throwError, Subscription, Subject } from 'rxjs';
import { environment as config } from '@environments/environment';
import { Tokens } from '@app/models/tokens';
import { tap, mapTo, catchError, take } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  timerSubscription: Subscription = new Subscription();
  private userLoggedIn = new Subject<boolean>();


  constructor(private http: HttpClient, private router: Router) {
    this.userLoggedIn.next(false);
  }

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${config.AUTH_SERVICE_ENDPOINT}/login`, user)
      .pipe(
        tap(rs => {
          let tokens = new Tokens();
          tokens = Object.assign(tokens, rs.data);
          this.doLoginUser(user.username, tokens);
        }),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
    this.setUserLoggedIn(true);
  }

  doLogoutUser() {
    this.loggedUser = null;
    this.timerSubscription.unsubscribe();
    this.removeTokens();
    this.setUserLoggedIn(false);
    this.router.navigate(['/login']);
  }

  private storeTokens(tokens: Tokens) {
    sessionStorage.setItem(this.ACCESS_TOKEN, tokens.accessToken);
    sessionStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    // this.processTokenExpired(this.getTokenExpirationTimespan(tokens.accessToken), this.getTokenIssueTimespan(tokens.accessToken));
  }

  getTokenExpirationTimespan(token: string) {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }
    return decoded.exp;
  }

  getTokenIssueTimespan(token: string) {
    const decoded = jwt_decode(token);
    if (decoded.iat === undefined) {
      return null;
    }
    return decoded.iat;
  }

  processTokenExpired(numericDateExp, numericIat) {
    if (numericDateExp && numericIat) {
      const bias = numericDateExp - numericIat;
      const source = timer(bias * 1000);
      this.timerSubscription = source.subscribe( rs => {
        const result = confirm('LPM app session expired. Do you want to continue ?');
        if (result) {
          this.refreshToken().pipe(take(1)).subscribe();
        } else {
          this.logout().pipe(take(1)).subscribe();
        }
      });
    }
  }

  getAccessToken() {
    return sessionStorage.getItem(this.ACCESS_TOKEN);
  }

  isLoggedIn() {
    return !!this.getAccessToken();
  }

  private removeTokens() {
    sessionStorage.removeItem(this.ACCESS_TOKEN);
    sessionStorage.removeItem(this.REFRESH_TOKEN);
  }

  logout() {
    return this.http.post<any>(`${config.AUTH_SERVICE_ENDPOINT}/logout`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      catchError(error => {
        alert(error.error);
        return throwError(error);
      }));
  }

  private getRefreshToken() {
    return sessionStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeAccessToken(jwt: string) {
    sessionStorage.setItem(this.ACCESS_TOKEN, jwt);
    // this.processTokenExpired(this.getTokenExpirationTimespan(jwt), this.getTokenIssueTimespan(jwt));
  }

  refreshToken() {
    return this.http.post<any>(`${config.AUTH_SERVICE_ENDPOINT}/refresh`, {
      'refreshToken': this.getRefreshToken(),
      'accessToken': this.getAccessToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeAccessToken(tokens.accessToken);
    }));
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.userLoggedIn.next(userLoggedIn);
  }

  getUserLoggedIn(): Observable<boolean> {
    return this.userLoggedIn.asObservable();
  }

  getUserById(id) {
    return this.http.get(`${config.AUTH_SERVICE_ENDPOINT}/user-profile/${id}`).pipe(
      catchError(error => {
        return throwError(error);
      }));
  }
}
