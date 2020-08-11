import {NgModule} from '@angular/core';
import {RoutesRoutingModule} from './routes-routing.module';
import {LoginComponent} from './passport/login/login.component';
import {RegisterComponent} from './passport/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DocumentComponent } from './document/document.component';
import { SpaceComponent } from './space/space.component';
import { TrashComponent } from './trash/trash.component';
import {EditorModule, TINYMCE_SCRIPT_SRC} from '@tinymce/tinymce-angular';
import {NgZorroAntdModule, NzFormModule} from 'ng-zorro-antd';


const Components = [
  LoginComponent,
  RegisterComponent,
  DocumentComponent,
  SpaceComponent,
  TrashComponent
];

@NgModule({
  declarations: [...Components],
  imports: [
    RoutesRoutingModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class RoutesModule {
}
