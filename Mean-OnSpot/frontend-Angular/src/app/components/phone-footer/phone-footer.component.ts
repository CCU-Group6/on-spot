import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phone-footer',
  templateUrl: './phone-footer.component.html',
  styleUrls: ['./phone-footer.component.css']
})
export class PhoneFooterComponent implements OnInit {
  @Input() public rtLink;
  @Input() public title;
  constructor() { 
  }

  ngOnInit() {
  }

}
