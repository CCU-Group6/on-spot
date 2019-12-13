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
  private userId;
  public backLink = "../parkingTimeScreen";
  public title  = "Resumo de Estacionamento";
  public paymentInfo = {
    zoneTitle: "",
    zoneCharge: "",
    zoneColor: "",
    priceToPay: 0.0,
    parkingTime: "",
    discount: 0.0,
    originalprice:0.0
  }

  constructor(private userService: UserService, private paymentService: PaymentServiceService) { }

  ngOnInit() {
    var userDetails = this.userService.getUserProfile().subscribe(
      res => {
        var userDetails = res['user'];
        this.paymentMethod = userDetails.paymentMethod;
        this.userId = userDetails._id;
        console.log("user ID:   ", this.userId);


        var p = this.paymentService.getParkingInformations();

        this.paymentInfo.zoneTitle = p.zoneTitle;
        this.paymentInfo.zoneCharge = p.zoneCharge;
        this.paymentInfo.zoneColor = p.zoneColor;
        this.paymentInfo.priceToPay = Math.floor(p.price*100)/100;
        this.paymentInfo.originalprice = p.price;
        this.paymentInfo.parkingTime = this.paymentService.msToTime(p.parkingTime);

        this.paymentInfo.discount = Math.floor(this.paymentService.getParkingDiscount()*100)/100;

        console.log("desconto:",this.paymentInfo.discount  );

        if (this.paymentInfo.discount != 0 && this.paymentInfo.discount != null ) {
          this.paymentInfo.priceToPay = Math.floor((this.paymentInfo.originalprice - this.paymentInfo.discount)*100)/100
          var node = document.getElementById("discountInfo");
          var text = document.createTextNode("[" + this.paymentInfo.originalprice + " - " + this.paymentInfo.discount + "]" );

          node.appendChild(text);
        }

        console.log("user ID HERE-------:   ", this.userId);
        console.log("acumulate HERE-------:   ", this.paymentInfo.priceToPay*0.10);
        this.userService.setUserBalance(this.userId,this.paymentInfo.priceToPay*0.10);

      },
      err => {

      }
    );

  }

  onConfirm(){
    this.userService.setConfirmParking(true);



  }
}
