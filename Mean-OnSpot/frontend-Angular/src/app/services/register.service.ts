import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private password: string;
  private name: string;
  private phoneNumber: string;
  private email: string;
  private licensePlate: string;
  private paymentMethod: string;

  constructor() { }

  setRegisterInformation(loginValues) {
    this.email = loginValues.email;
    this.password = loginValues.password;
  }

  setPersonalInformation(form: { phoneNumber: any; email: any; licensePlate: any; }){
    this.phoneNumber = form.phoneNumber;
    this.email = form.email;
    this.licensePlate = form.licensePlate;
  }

  setPaymentMethod(string: any){
    this.paymentMethod = string;
  }

  getRegisterInformation() {
    const form = {
      password: this.password,
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email,
      licensePlate: this.licensePlate,
      paymentMethod: this.paymentMethod
    };
    return form;
  }
}
