import { Component, OnInit } from '@angular/core';
import {Member} from '../member';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  member: Member ={
    id: 1, 
    name: 'Stephen',
    avatarImageUrl: '../../assets/images/blackWolf.png',
    badges:[],
    coins: 200,
    isAdmin: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
