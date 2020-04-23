import { Component, OnInit } from '@angular/core';

import {Badge} from '../../Badge'

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
    badgeCost: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
