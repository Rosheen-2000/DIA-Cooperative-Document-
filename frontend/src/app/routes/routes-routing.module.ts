import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './passport/login/login.component';
import {PassportComponent} from '../layout/passport/passport.component';
import {RegisterComponent} from './passport/register/register.component';
import {DefaultComponent} from '../layout/default/default.component';
import {EditorComponent} from '../layout/editor/editor.component';
import {DocumentComponent} from './document/document.component';
import {SpaceComponent} from './space/space.component';
import {TrashComponent} from './trash/trash.component';
import {DesktopComponent} from './desktop/desktop.component';
import {FolderComponent} from './folder/folder.component';

const routes: Routes = [
  {
    path: 'passport', component: PassportComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  },
  {
    path: '', component: DefaultComponent, children: [
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'trash', component: TrashComponent},
      {path: 'space/:id', component: SpaceComponent},
      {path: 'desktop', component: DesktopComponent},
      {path: 'folder/:id', component: FolderComponent}
    ]
  },
  {
    path: '', component: EditorComponent, children: [
      {path: 'docs/:id', component: DocumentComponent}
    ]
  },
  {
    path: '**', redirectTo: 'dashboard/own'
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
