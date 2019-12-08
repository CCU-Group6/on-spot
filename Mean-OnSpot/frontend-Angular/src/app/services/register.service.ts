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

  setRegisterInformation(values) {
    this.email = values.email;
    this.password = values.password;
  }
  
  setPersonalInformation(values){
    this.phoneNumber = values.phoneNumber;
    this.name = values.name;
    this.licensePlate = values.licensePlate;
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
