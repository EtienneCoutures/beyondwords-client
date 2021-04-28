import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { FormControl, Validators} from '@angular/forms';

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
  ) { }

  ngOnInit(): void {
  }

}
