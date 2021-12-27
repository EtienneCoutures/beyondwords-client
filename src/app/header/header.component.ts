import { Component, OnInit } from '@angular/core';
import { UserCoreService } from 'src/services/user-core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = "assets/img/logo.png"
  constructor(
    public userCoreService: UserCoreService,
  ) {

  }

  ngOnInit(): void {
  }

}
