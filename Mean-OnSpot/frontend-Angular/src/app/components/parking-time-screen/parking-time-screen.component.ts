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
  material: number;
  constructor() { }

  ngOnInit() {
  }

  materialSettings: MbscTimespanOptions = {
    theme: 'material',
    themeVariant: 'light',
    display: 'inline',
    touchUi: false
  };
}
