import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {
  public showErrorMessage;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUser(form: NgForm) {

    const response = this.userService.LoginUser(form.value.phoneNumber, form.value.password).subscribe(
      res => {
        this.userService.setToken(res['token']);        
      },
      err => { 
        this.showErrorMessage = err.error;
      }
    );    

  }
}
