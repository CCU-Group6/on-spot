import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MbscNumpadDecimalOptions } from '@mobiscroll/angular';


@Component({
  selector: 'app-discount-screen',
  templateUrl: './discount-screen.component.html',
  styleUrls: ['./discount-screen.component.css']
})
export class DiscountScreenComponent implements OnInit {
  public userDetails;
  
  public backLink = "../confirmScreen";

  public rtLink = "../confirmScreen"; 
  public title = "Descontar"; 

  numpad: number;
  public balanceUser=0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log("user:",this.userDetails);
         this.balanceUser = this.userDetails.balance;
         console.log("SALDO", this.balanceUser);

      },
      err => {

      }
    ) 
  }

  numpadSettings: MbscNumpadDecimalOptions = {
    theme: 'ios',
    themeVariant: 'light',
    lang: 'pt-PT',
    min: 0.01,
    max: this.balanceUser,
    scale: 2
};

}
    
