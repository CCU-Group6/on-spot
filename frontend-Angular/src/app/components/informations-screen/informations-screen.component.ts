import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informations-screen',
  templateUrl: './informations-screen.component.html',
  styleUrls: ['./informations-screen.component.css']
})
export class InformationsScreenComponent implements OnInit {

  name: string;
  phoneNumber: string;
  licensePlate: string;

  invalidMessage: string;

  public backLink;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.backLink = '../registerAccount';
  }

  validateFields() {
    if (this.name == undefined || this.phoneNumber == undefined || this.licensePlate == undefined) {
      this.invalidMessage = "Por favor preencha todos os espaços!";
      return false;
    }
    else if (this.phoneNumber.length != 9) {
      this.invalidMessage = "Introduza um Número de telemóvel válido!";
      return false;
    }
    // else if (this.licensePlate) {
    //   this.invalidMessage = "Introduza uma matrícula Válida!";
    //   return false;
    // }
    else {
      return true;
    }
  }

  registerInformation() {

    if (!this.validateFields()) {
      return false;
    }

    const values = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      licensePlate: this.licensePlate
    }

    this.registerService.setPersonalInformation(values);
    this.router.navigate(['/paymentMethod']);
  }

}
