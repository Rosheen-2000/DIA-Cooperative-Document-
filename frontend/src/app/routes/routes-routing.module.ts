import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './passport/login/login.component';
import {PassportComponent} from '../layout/passport/passport.component';
import {RegisterComponent} from './passport/register/register.component';

const routes: Routes = [
  {
    path: '', component: PassportComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesRoutingModule {
}
