import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from './routes-routing.module';
import {LoginComponent} from './passport/login/login.component';
import {RegisterComponent} from './passport/register/register.component';


const Components = [
  LoginComponent,
  RegisterComponent
];

@NgModule({
  declarations: [...Components],
  imports: [
    RoutesRoutingModule
  ]
})
export class RoutesModule {
}
