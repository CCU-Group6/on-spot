import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment-method-screen',
  templateUrl: './payment-method-screen.component.html',
  styleUrls: ['./payment-method-screen.component.css', '../shared-style.css']
})
export class PaymentMethodScreenComponent implements OnInit {
  public backLink;
  public paymentMethod;

  constructor() { }

  ngOnInit() {
    this.backLink = '../registerInformation';
  }
  buttonclick() {
    console.log(this.paymentMethod);
  }
}
