import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from './routes-routing.module';
import {LoginComponent} from './passport/login/login.component';
import {RegisterComponent} from './passport/register/register.component';
import { DocumentComponent } from './document/document.component';


const Components = [
  LoginComponent,
  RegisterComponent,
  DocumentComponent
];

@NgModule({
  declarations: [...Components],
  imports: [
    RoutesRoutingModule
  ]
})
export class RoutesModule {
}
