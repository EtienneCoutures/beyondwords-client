import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { FormControl, Validators } from '@angular/forms';
import { ConnectService } from 'src/services/connect.service';
import { UserService } from 'src/services/user.service';
import { HttpClient } from '@angular/common/http';
import { UserCoreService } from 'src/services/user-core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(
    public helper: HelperService,
    public connectService: ConnectService,
    public userService: UserService,
    public userCoreService: UserCoreService,
    public http: HttpClient,
    public router: Router
  ) { 

  }

  ngOnInit(): void {
  }

  signin() {
    this.connectService.login(this.login.value, this.password.value).subscribe(rep => {
      this.userCoreService.setUser(rep);
      return this.helper.goToPage('');
    }, err => {
      console.log('error component login :', err)
    });
  }

}
