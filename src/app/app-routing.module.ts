import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {AdminUserComponent} from './admin-user/admin-user.component'

const routes: Routes = [
  {path: 'adminUser', component: AdminUserComponent}
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
