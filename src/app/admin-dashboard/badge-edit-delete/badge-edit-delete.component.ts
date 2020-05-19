import { Component, OnInit } from '@angular/core';

import {Badge} from '../../Badge'
import {BadgeService} from '../../badge.service'

@Component({
  selector: 'app-badge-edit-delete',
  templateUrl: './badge-edit-delete.component.html',
  styleUrls: ['./badge-edit-delete.component.css']
})
export class BadgeEditDeleteComponent implements OnInit {

  badge: Badge = {
    id: null, 
    name: '', 
    badgeImageUrl: '', 
    badgeCost: 0, 
    badgeDescription: null
  }

  badgeImage: File; 

  constructor(private badgeService:BadgeService) { }

  ngOnInit(): void {
  }

  fileChange(element){

    this.badgeImage = element.target.files[0];
    let returnq = this.badgeService.uploadBadgeImage(this.badgeImage, this.badge);
  }

  editBadge() {

    this.badgeService.updateBadge(this.badge)
    .subscribe((result)=>{
      console.log(result);
    })
  }

  deleteBadge() {
    this.badgeService.deleteBadge(this.badge)
    .subscribe((result)=> {
      console.log(result)
    })
  }

}
