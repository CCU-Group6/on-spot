import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../shared-style.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser(form: NgForm) {
    this.userService.createUser(form.value.name, form.value.resgisterPassword,
      form.value.phonenumber, form.value.email, form.value.licensePlate)
    .subscribe((response: any) => {
      console.log(response);
    });
    console.log('chegou ao register module');
  }

}
