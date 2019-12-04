import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { WebService } from '../web.service';

@Component({
  selector: 'app-informations-screen',
  templateUrl: './informations-screen.component.html',
  styleUrls: ['./informations-screen.component.css', '../shared-style.css']
})
export class InformationsScreenComponent implements OnInit {

  public backLink;
  constructor(private userService: UserService, private resgisterService: RegisterService, private webService: WebService) { }

  ngOnInit() {
    this.backLink = '../registerAccount';
  }

  registerInformation(form: NgForm) {
    var f = {
      phoneNumber: form.value.phonenumber,
      email: form.value.email,
      licensePlate: form.value.licensePlate
    }
    
    this.resgisterService.setPersonalInformation(f);
  }

}
