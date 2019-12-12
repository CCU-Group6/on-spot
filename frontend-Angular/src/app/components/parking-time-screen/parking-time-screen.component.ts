import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscTimespanOptions } from '@mobiscroll/angular';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { UserService } from '../../services/user.service';

mobiscroll.settings = {
  lang: 'pt-PT',
  theme: 'ios',
  themeVariant: 'light'
};
@Component({
  selector: 'app-parking-time-screen',
  templateUrl: './parking-time-screen.component.html',
  styleUrls: ['./parking-time-screen.component.css']
})
export class ParkingTimeScreenComponent implements OnInit {
  public title = "Tempo de Estacionamento";
  public backLink = "";
  public frontLink;
  public timespan;
  public selectedTime = {
    zoneCharge: 0.0,
    parkingTime: 0,
    price: 0.0,
  }


  material: number;
  constructor(private userService: UserService, private paymentService: PaymentServiceService) {
    this.backLink = "../defaultScreen";
    this.frontLink = "../confirmScreen";
  }

  ngOnInit() {
    var userDetails = this.userService.getUserProfile().subscribe();
    var p = this.paymentService.getParkingInformations();

    this.selectedTime.zoneCharge = p.zoneCharge;
  }

  timespanInlineSettings: MbscTimespanOptions = {
    wheelOrder: 'hhii',
    display: 'inline',
    max: 14400000,
    min: 60000,
    onChange: (event, inst) => {
      this.selectedTime.price = Math.floor((inst.getVal() * this.selectedTime.zoneCharge) / 3600000 * 100) / 100;
      var price = this.selectedTime.price;
      this.paymentService.setParkingInfo(inst.getVal(), this.selectedTime.price);
    }
  };

}

