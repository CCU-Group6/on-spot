import { Component, OnInit, Inject} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { PopupScreenComponent } from '../popup-screen/popup-screen.component';
import { MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-default-screen',
  templateUrl: './default-screen.component.html',
  styleUrls: ['./default-screen.component.css']
})
export class DefaultScreenComponent implements OnInit {
  public isSelected;
  public backLink;
  userDetails;

  animal: string;
  name: string;

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {
    this.isSelected = false;
    this.backLink = '../registerInformation';
   }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {
        
      }
    )
    
    var bool = this.userService.getConfirmParking();
    console.log(bool);
    if(bool == true){
      this.openDialog();
      this.userService.setConfirmParking(false);
    }
  }

  openMenu(){
    document.getElementById("sideMenu").style.width = "250px";
  }

  closeMenu(){
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

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupScreenComponent, {
      width: '250px',
    });

    setTimeout(() => dialogRef.close(), 2500)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}