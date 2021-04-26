import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo: string = "assets/img/logo.png"
  constructor() { 

  }

  ngOnInit(): void {
  }

}
