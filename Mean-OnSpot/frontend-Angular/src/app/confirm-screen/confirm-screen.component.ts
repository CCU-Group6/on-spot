import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-confirm-screen',
  templateUrl: './confirm-screen.component.html',
  styleUrls: ['./confirm-screen.component.css']
})
export class ConfirmScreenComponent implements OnInit {
  private paymentMethod;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    var f =this.registerService.getRegisterInformation();
    this.paymentMethod = f.paymentMethod;
    
  }
  

}
