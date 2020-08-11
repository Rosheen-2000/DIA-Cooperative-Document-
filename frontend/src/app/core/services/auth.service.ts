import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getAuthorizationToken(): string {
    return 'not set';
  }
}
