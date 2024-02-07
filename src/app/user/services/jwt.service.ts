import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class jwtToken {
  setToken(token: string) {
    console.log(token);

    localStorage.setItem('token', token);
  }
  getToken(token: string) {
    localStorage.getItem('token');
  }
  removeToken(token: string) {
    localStorage.removeItem('token');
  }
}
