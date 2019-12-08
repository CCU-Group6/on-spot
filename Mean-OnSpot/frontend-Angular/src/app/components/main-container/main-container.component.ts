import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
})
export class MainContainerComponent implements OnInit {

  phoneNumber: string;
  password: string;

  invalidMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  checkUser(form: NgForm) {

    if (this.phoneNumber == undefined || this.password == undefined) {
      this.invalidMessage = "Por favor preencha todos os espaços!"
      return false;
    }

    const response = this.userService.LoginUser(this.phoneNumber, this.password).subscribe(
      res => {
        this.userService.setToken(res['token']);        
      },
      err => { 
        this.invalidMessage = "Número de Telefone ou Password Erradas"
        return false;
      }
    );    

  }
}
