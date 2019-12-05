import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-confirm-screen',
  templateUrl: './confirm-screen.component.html',
  styleUrls: ['./confirm-screen.component.css']
})
export class ConfirmScreenComponent implements OnInit {
  private paymentMethod;
  public backLink;
  public title  = "Resumo de Estacionamento";

  constructor(private userService: UserService) { }

  ngOnInit() {
    var userDetails = this.userService.getUserProfile().subscribe(
      res => {
        var userDetails = res['user'];
        this.paymentMethod = userDetails.paymentMethod;
      },
      err => {

      }
    );
  }

  onConfirm(){
    console.log('onconfirm');
    this.userService.setConfirmParking(true);
  }
}
