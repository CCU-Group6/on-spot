import { Injectable } from '@angular/core';
import { min } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  private zoneTitle;
  private zoneCharge;
  private zoneColor;

  //backend should do this probably
  private price;
  //from parking Time Screen
  private parkingTime = 1;
  //not implemented yet
  private discount = 0.09;

  constructor() { }

  setZoneInformations(zoneTitle, zoneCharge, zoneColor){
    this.zoneTitle = zoneTitle;
    this.zoneCharge = zoneCharge;
    this.zoneColor = zoneColor;
  }

  setParkingInfo(parkingTime, parkingPrice){
    this.parkingTime = parkingTime; //This time is in milliseconds
    this.price = parkingPrice;
  }
   msToTime(parkingTime) {
    var  minutes = (Math.floor((parkingTime/(1000*60))%60)).toString()
        , hours = (Math.floor((parkingTime/(1000*60*60))%24)).toString();

    hours = (parseInt(hours) < 10) ? "0" + hours : hours;
    minutes = (parseInt(minutes) < 10) ? "0" + minutes : minutes;
    return hours + "h" + minutes + "min";
}

  setDiscount(discount){
    this.discount = discount;
  }
  
  getParkingInformations(){

    //this.price = parseFloat(this.zoneCharge)*this.parkingTime - this.discount;
    //console.log(parseFloat(this.zoneCharge)*this.parkingTime - this.discount);
    
    return {
      zoneTitle: this.zoneTitle,
      zoneCharge: this.zoneCharge,
      zoneColor: this.zoneColor,
      price: this.price,
      parkingTime: this.parkingTime,
      discount: this.discount
    }
  }


}
