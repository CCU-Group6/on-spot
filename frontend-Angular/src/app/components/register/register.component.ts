import { Component, OnInit, Output } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string;
  password: string;
  passwordConfirm: string;

  invalidMessage: string;

  constructor(
    private registerService: RegisterService,
    private router: Router
    ) { }

  validateFields() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(this.email == undefined || this.password == undefined || this.passwordConfirm == undefined){
      this.invalidMessage = "Por favor preencha todos os espaços!";
      return false;
    }
    else if (!re.test(this.email)) {
      this.invalidMessage = "Introduza um email válido!";
      return false;
    }
    else if (this.passwordConfirm != this.password) {
      this.invalidMessage = "As passwords são diferentes!";
      return false;
    }
    else {
      return true;
    }
  }

  sendMessage() {

    if (!this.validateFields()) {
      return false;
    }

    const values = {
      email: this.email,
      password: this.password,
    }

    this.registerService.setRegisterInformation(values);
    this.router.navigate(['/registerInformation']);
  }
}
