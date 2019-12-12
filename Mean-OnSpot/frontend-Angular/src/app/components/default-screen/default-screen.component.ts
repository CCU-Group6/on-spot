import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { PopupScreenComponent } from '../popup-screen/popup-screen.component';
import { MatDialog} from '@angular/material/dialog';
import { PaymentServiceService } from 'src/app/services/payment-service.service';


@Component({
  selector: 'app-default-screen',
  templateUrl: './default-screen.component.html',
  styleUrls: ['./default-screen.component.css']
})
export class DefaultScreenComponent implements OnInit {
  public mapZoom = 15;
  public isSelected;
  public backLink;
  public bool;
  public message = {
    "zoneTitle": "",
    "zoneCharge": "",
    "zoneColor": ""
  };

  userDetails;
  @Output() parkedEvent = new EventEmitter<boolean>();

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog, private paymentService: PaymentServiceService) {
    this.isSelected = false;
    this.backLink = '../registerInformation';
   }

  ngOnInit() {
   
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails)
      },
      err => {
        
      }
    )
    
    this.bool = this.userService.getConfirmParking();
    console.log(this.bool);
    if(this.bool == true){
      this.openDialog();
      this.userService.setConfirmParking(false);
    }
  }

  openMenu(){
    document.getElementById("menuIcon").style.zIndex = "-1";
    document.getElementById("sideMenu").style.width = "250px";
  }

  closeMenu(){
    document.getElementById("menuIcon").style.zIndex = "1";
    document.getElementById("sideMenu").style.width = "0px";
  }

  userLogOut(){
    this.userService.logOut();
  }

  raiseParkingButton() {
    const result = document.getElementById('parkingButton');
    result.style.height = '50px';
    result.style.bottom = '50%';
  }

  closeInformations(){
    this.isSelected = false;
    document.getElementById('zoneInformations').style.height = "0";
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupScreenComponent, {});

    // setTimeout(() => dialogRef.close(), 2500)

    this.parkedEvent.emit(true);

    if(this.userService.getConfirmParking()){
      setTimeout(function(){
        document.getElementById("myBar").style.width = "5%";
      }, 5000);
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  receiveMessage(event) {
    //dont forget
    this.message = event;
    
    this.isSelected = true;
    document.getElementById("zoneInformations").style.height = "25%";
  }

  setZoneInformation(){

    this.paymentService.setZoneInformations(this.message.zoneTitle, this.message.zoneCharge, this.message.zoneColor);
  }

  cancelPark(){
    this.userService.setConfirmParking(false);
    this.bool = false;
    document.getElementById('parkedInformations').style.height = "0"
  }
}