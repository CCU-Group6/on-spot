import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscTimespanOptions } from '@mobiscroll/angular';

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


  material: number;
  constructor() { 
    this.backLink = "../defaultScreen";
    this.frontLink = "../confirmScreen";
  }

  ngOnInit() {
  }

  timespanInlineSettings: MbscTimespanOptions = {
    wheelOrder: 'hhii',
    display: 'inline',
    max:14400000,
    min:60000
  };

}
