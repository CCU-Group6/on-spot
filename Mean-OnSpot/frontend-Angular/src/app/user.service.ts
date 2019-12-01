import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Router, RouterLink } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webService: WebService, private router: Router) { }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True'})};

  createUser(name: string, password: string, phoneNumber: string, email: string, licensePlate: string) {
    return this.webService.post('users', { name, password , phoneNumber, email, licensePlate }, this.noAuthHeader);
  }

  LoginUser(phoneNumber: string, password: string) {
    console.log(phoneNumber);

    return this.webService.post('authenticate', {phoneNumber, password}, this.noAuthHeader)
      .subscribe(
        res => {
          this.webService.setToken(res['token']);
          console.log(this.webService.isLoggedIn());

          this.router.navigateByUrl('/defaultScreen');
        },
        err => { }
      );
  }

  getUserProfile() {
    return this.webService.getWithPermission('userProfile');
  }
}
