import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassportService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
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

  }

  public register(): void {

  }
}
