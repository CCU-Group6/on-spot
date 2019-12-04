import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { WebService } from '../../services/web.service';

@Component({
  selector: 'app-informations-screen',
  templateUrl: './informations-screen.component.html',
  styleUrls: ['./informations-screen.component.css']
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
