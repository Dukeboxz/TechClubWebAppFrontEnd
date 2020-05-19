import { Component, OnInit } from '@angular/core';
import {Badge} from '../../Badge';
import {BadgeService} from '../../badge.service'

@Component({
  selector: 'app-badge-create',
  templateUrl: './badge-create.component.html',
  styleUrls: ['./badge-create.component.css']
})
export class BadgeCreateComponent implements OnInit {

  badge: Badge = {
    id : null,
    name : '',
    badgeImageUrl : '', 
    badgeCost: 0,
    badgeDescription: ''
  }

  constructor(private badgeService: BadgeService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.badgeService.createBadge(this.badge)
    .subscribe((result)=>{
      
    })
  }

  newBadge(){
    this.badge = {
      id : null,
      name : '',
      badgeImageUrl : '', 
      badgeCost: 0,
      badgeDescription: ''
    }
  }

}
