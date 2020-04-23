import { Component, OnInit } from '@angular/core';
import {Member} from '../member'
import {MemberService} from '../member-service'

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent  {

  member: Member ={
    id: 3, 
    name: 'Ian',
    email: 'example@example.com',
    password: 'randomPassword',
    avatarImageUrl: '../../assets/images/blackWolf.png',
    badges:[],
    coins: 500,
    isAdmin: false
  }

  members: Member[] = [];

  constructor(private memberservice: MemberService) { }
  onSubmit() {
    console.log('It is been submitted')
    //console.log(this.member)
    // this.memberservice.addMember(this.member)
    // .subscribe(member =>{
    //   console.log('subscribe member: ', member)
    // })
    this.memberservice.getmembers()
    .subscribe(data =>{
      this.members = data
      console.log(this.members)
    })
    
     
  }
  

  
}
