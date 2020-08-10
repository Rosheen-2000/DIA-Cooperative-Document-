import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './passport/login/login.component';
import {PassportComponent} from '../layout/passport/passport.component';
import {RegisterComponent} from './passport/register/register.component';
import {DefaultComponent} from '../layout/default/default.component';
import {EditorComponent} from '../layout/editor/editor.component';
import {DocumentComponent} from './document/document.component';
import {SpaceComponent} from './space/space.component';

const routes: Routes = [
  {
    path: 'passport', component: PassportComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '', component: DefaultComponent, children: [
      {path: 'dashboard'},
      {path: 'trash'}
    ]
  },
  {
    path: 'docs', component: EditorComponent, children: [
      {path: ':id', component: DocumentComponent}
    ]
  },
  {
    path: 'space', component: DefaultComponent, children: [
      {path: ':id', component: SpaceComponent}
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
