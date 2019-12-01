import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../shared-style.css']
})
export class RegisterComponent {

  constructor(private registerService: RegisterService) { }

  sendMessage(form: NgForm) {
    const f = {
      name: form.value.name,
      registerPassword: form.value.registerPassword,
    };
    console.log(f.registerPassword);
    this.registerService.setRegisterInformation(f);
  }

}
