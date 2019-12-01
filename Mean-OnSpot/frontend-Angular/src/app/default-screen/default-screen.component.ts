import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-screen',
  templateUrl: './default-screen.component.html',
  styleUrls: ['./default-screen.component.css', '../shared-style.css']
})
export class DefaultScreenComponent implements OnInit {
  public isSelected;
  public backLink;
  constructor() {
    this.isSelected = false;
    this.backLink = '../registerInformation';
   }

  ngOnInit() {

  }

  raiseParkingButton() {
    const result = document.getElementById('parkingButton');
    result.style.height = '50px';
    result.style.bottom = '50%';
  }
}
