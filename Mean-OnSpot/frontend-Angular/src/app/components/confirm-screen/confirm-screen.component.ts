import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PaymentServiceService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-confirm-screen',
  templateUrl: './confirm-screen.component.html',
  styleUrls: ['./confirm-screen.component.css']
})
export class ConfirmScreenComponent implements OnInit {
  private paymentMethod;
  public backLink = "../parkingTimeScreen";
  public title  = "Resumo de Estacionamento";
  public paymentInfo = {
    zoneTitle: "",
    zoneCharge: "",
    zoneColor: "",
    price: 0.0,
    parkingTime: "",
    discount: 0.0,
  }

  constructor(private userService: UserService, private paymentService: PaymentServiceService) { }

  ngOnInit() {
    var userDetails = this.userService.getUserProfile().subscribe(
      res => {
        var userDetails = res['user'];
        this.paymentMethod = userDetails.paymentMethod;
      },
      err => {

      }
    );
    var p = this.paymentService.getParkingInformations();

    this.paymentInfo.zoneTitle = p.zoneTitle;
    this.paymentInfo.zoneCharge = p.zoneCharge;
    this.paymentInfo.zoneColor = p.zoneColor;
    this.paymentInfo.price = p.price;
    this.paymentInfo.parkingTime = this.paymentService.msToTime(p.parkingTime);
    this.paymentInfo.discount = p.discount;
    
  }

  onConfirm(){
    this.userService.setConfirmParking(true);
  }
}
