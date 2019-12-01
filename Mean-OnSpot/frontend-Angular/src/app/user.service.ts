import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webService: WebService) { }

  /*get() {
    return this.webService.get('users');
  }*/

  createUser(name: string, password: string, phoneNumber: string, email: string, licensePlate: string) {
    console.log("--77777777777777777-------");

    console.log(name);
    console.log(password);
    console.log(phoneNumber);
    console.log(email);
    console.log(licensePlate);
    return this.webService.post('users', { name, password , phoneNumber, email, licensePlate });
  }

  checkUser(phoneNumber: string, password: string) {
    console.log(phoneNumber);

    return this.webService.get(`users/${phoneNumber}`, {phoneNumber, password})
      .subscribe((user: any) => {
        console.log(user);
      });
  }
}
