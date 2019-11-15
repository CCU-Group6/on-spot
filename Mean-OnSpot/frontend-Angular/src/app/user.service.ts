import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webService: WebService) { }

  get() {
    return this.webService.get('users');
  }

  createUser(name: string, password: string, phoneNumber: string, email: string, licensePlate: string) {
    console.log('chegou ao user service');
    return this.webService.post('users', { name, password , phoneNumber, email, licensePlate });
  }

  checkUser(phoneNumber:string, password: string){
    console.log(phoneNumber);
    
    return this.webService.get(`users/${phoneNumber}`)
      .subscribe((user: any) => {
        console.log(user);
      });
    ;
  }
}
