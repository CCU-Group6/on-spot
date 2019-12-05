import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';
import { UserService } from 'src/app/services/user.service';
import { log } from 'util';

@Component({
  selector: 'app-discount-screen',
  templateUrl: './discount-screen.component.html',
  styleUrls: ['./discount-screen.component.css']
})
export class DiscountScreenComponent implements OnInit {
  public userDetails;

  public rtLink = "../confirmScreen"; 
  public title = "Descontar"; 

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => {

      }
    )
  }

}
