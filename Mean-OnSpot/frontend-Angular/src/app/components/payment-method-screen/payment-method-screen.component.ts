import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-payment-method-screen',
  templateUrl: './payment-method-screen.component.html',
  styleUrls: ['./payment-method-screen.component.css']
})
export class PaymentMethodScreenComponent implements OnInit {
  public backLink;
  public paymentMethod;

  public showMessage;
  public serverError;

  constructor(private registerService: RegisterService, private userService: UserService) { }

  ngOnInit() {
    this.backLink = '../registerInformation';
  }

  registerInformation(){
    this.registerService.setPaymentMethod(this.paymentMethod);

    const f = this.registerService.getRegisterInformation();
    var name = f.name;
    var password = f.password;
    var phonenumber = f.phoneNumber;
    var email = f.email;
    var licensePlate = f.licensePlate

    this.userService.createUser(name, password,
      phonenumber, email, licensePlate, this.paymentMethod)
      .subscribe((response: any) => {
        res =>{
          this.showMessage = true;
        }
        err =>{
          if(err.status === 422){
            this.serverError = err.err.join('<br/>');
          }
        }
        this.userService.LoginUser(phonenumber, password).subscribe(
          res => {
            this.userService.setToken(res['token']);        
          },
          err => { 
          }
        );    ;
      });

  }
}
