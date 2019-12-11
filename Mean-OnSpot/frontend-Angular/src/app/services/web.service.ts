import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  // Http methods
  get(uri: string, permission) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, permission);
  }

  getWithPermission(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: object, permission) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload, permission);
  }

  patch(uri: string, id:string, payload: object, permission) {
    return this.http.patch(`${this.ROOT_URL}/${uri}/${id}`, payload, permission);
  }

  // Token helper methods
  setToken(token: string) {
    this.deleteToken();
    localStorage.setItem('token', token);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getTokenPayload() {
    const token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else return null;
  }

  isLoggedIn() {
    let userPayload = this.getTokenPayload();
    console.log(userPayload);
    
    if (userPayload) {
      return true;
    }
    else
      return false;
   }
}
