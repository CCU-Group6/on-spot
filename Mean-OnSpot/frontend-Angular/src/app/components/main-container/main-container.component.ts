import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUser(form: NgForm) {

    const a = this.userService.LoginUser(form.value.phoneNumber, form.value.password);

  }
}
