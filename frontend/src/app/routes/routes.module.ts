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
import { DesktopComponent } from './desktop/desktop.component';
import { FolderComponent } from './folder/folder.component';
import {SharedModule} from '../shared/shared.module';
import { FindbackComponent } from './passport/findback/findback.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { CommonModule } from '@angular/common'; 


const Components = [
  LoginComponent,
  RegisterComponent,
  DocumentComponent,
  SpaceComponent,
  TrashComponent,
  DesktopComponent,
  FolderComponent
];

@NgModule({
  declarations: [...Components, FindbackComponent],
  imports: [
    RoutesRoutingModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    SharedModule,
    NzAlertModule,
    CommonModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class RoutesModule {
}
