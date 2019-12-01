import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../register.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-informations-screen',
  templateUrl: './informations-screen.component.html',
  styleUrls: ['./informations-screen.component.css', '../shared-style.css']
})
export class InformationsScreenComponent implements OnInit {

  public backLink;
  constructor(private userService: UserService, private resgisterService: RegisterService) { }

  ngOnInit() {
    this.backLink = '../registerAccount';
  }

  registerInformation(form: NgForm) {
    const f = this.resgisterService.getRegisterInformation();
    const name = f.name;
    const password = f.password;

    this.userService.createUser(name, password,
      form.value.phonenumber, form.value.email, form.value.licensePlate)
    .subscribe((response: any) => {
      console.log(response);
    });
    console.log('chegou ao register module');
  }

}
