import { Injectable } from '@angular/core';

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

  setParkingTime(parkingTime){
    this.parkingTime = parkingTime;
  }

  setDiscount(discount){
    this.discount = discount;
  }
  
  getParkingInformations(){

    this.price = parseFloat(this.zoneCharge)*this.parkingTime - this.discount;
    console.log(parseFloat(this.zoneCharge)*this.parkingTime - this.discount);
    
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
