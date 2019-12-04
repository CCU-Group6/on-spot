import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-payment-method-screen',
  templateUrl: './payment-method-screen.component.html',
  styleUrls: ['./payment-method-screen.component.css', '../shared-style.css']
})
export class PaymentMethodScreenComponent implements OnInit {
  public backLink;
  public paymentMethod;

  constructor(private registerService: RegisterService, private userService: UserService) { }

  ngOnInit() {
    this.backLink = '../registerInformation';
  }

  registerInformation(){
    const f = this.registerService.getRegisterInformation();
    var name = f.name;
    var password = f.password;
    var phonenumber = f.phoneNumber;
    var email = f.email;
    console.log(email);
    
    var licensePlate = f.licensePlate

    this.registerService.setPaymentMethod(this.paymentMethod);

    this.userService.createUser(name, password,
      phonenumber, email, licensePlate, this.paymentMethod)
      .subscribe((response: any) => {
        this.userService.LoginUser(phonenumber, password);
      });

  }
}
