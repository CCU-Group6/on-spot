import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css', '../shared-style.css'],
})
export class MainContainerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUser(form: NgForm) {
    console.log(form.value.phoneNumber);
    
    var a = this.userService.checkUser(form.value.phoneNumber, form.value.password)
    console.log(a);
    
  }
}
