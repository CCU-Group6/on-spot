import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private password;
  private name;

  constructor() { }

  setRegisterInformation(form) {
    this.password = form.registerPassword;
    this.name = form.name;
  }

  getRegisterInformation() {
    const form = {
      password: this.password,
      name: this.name
    };
    return form;
  }
}
