import { Component, OnInit } from '@angular/core';
import {MemberLogin} from '../memberLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new MemberLogin('','')

  constructor() { }

  onSubmit() {
    
  }

  ngOnInit(): void {
  }

}
