import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone-header',
  templateUrl: './phone-header.component.html',
  styleUrls: ['./phone-header.component.css']
})
export class PhoneHeaderComponent implements OnInit {
  @Input() public title;
  @Input() public rtLink;

  constructor() { }

  ngOnInit() {
    console.log(this.rtLink);
  }

}
