import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-screen',
  templateUrl: './default-screen.component.html',
  styleUrls: ['./default-screen.component.css', '../shared-style.css']
})
export class DefaultScreenComponent implements OnInit {
  public isSelected;
  public backLink;
  userDetails;
  constructor(private userService: UserService, private router: Router) {
    this.isSelected = false;
    this.backLink = '../registerInformation';
   }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);

      },
      err => {

      }
    )
  }

  openMenu(){
    document.getElementById("sideMenu").style.width = "250px";
  }

  closeMenu(){
    document.getElementById("sideMenu").style.width = "0px";
  }

  raiseParkingButton() {
    const result = document.getElementById('parkingButton');
    result.style.height = '50px';
    result.style.bottom = '50%';
  }
}
