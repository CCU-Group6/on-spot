import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private password;
  private name;
  private phoneNumber;
  private email;
  private licensePlate;

  constructor() { }

  setRegisterInformation(form) {
    this.password = form.registerPassword;
    this.name = form.name;
  }

  setPersonalInformation(form){
    this.phoneNumber = form.phoneNumber;
    this.email = form.email;
    this.licensePlate = form.licensePlate;
  }

  getRegisterInformation() {
    const form = {
      password: this.password,
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email,
      licensePlate: this.licensePlate
    };
    return form;
  }
}
