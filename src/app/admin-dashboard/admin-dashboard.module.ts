import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { BadgeEditDeleteComponent } from './badge-edit-delete/badge-edit-delete.component';
import { BadgeCreateComponent } from './badge-create/badge-create.component';



@NgModule({
  declarations: [BadgeEditDeleteComponent, BadgeCreateComponent],
  imports: [
    CommonModule
  ]
})
export class AdminDashboardModule { }
