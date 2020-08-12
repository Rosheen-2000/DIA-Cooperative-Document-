import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class PassportService {
  private readonly baseUrl: string;

  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  public checkUsernameValid(uname: string): Observable<{ res: string }> {
    return this.http.post<{
      res: string
    }>(this.baseUrl + 'passport/check', {uname});
  }

  public login(uname: string, pwd: string): Observable<{ msg: string, token: string }> {
    return this.http.post<{
      msg: string, token: string
    }>(this.baseUrl + 'passport/login', {
      uname,
      pwd
    });
  }

  public logout(): void {
    localStorage.removeItem("token");
  }

  public register(uname: string, pwd: string): Observable<{ msg: string, token: string }> {
    return this.http.post<{
      msg: string, token: string
    }>(this.baseUrl + 'passport/register', {
      uname,
      pwd
    });
  }

  // TODO decode?
  public decodeUserFromToken(token): any {
    return this.jwtHelperService.decodeToken(token);
  }

}
