import {NgModule} from '@angular/core';
import {DefaultComponent} from './default/default.component';
import {EditorComponent} from './editor/editor.component';
import {PassportComponent} from './passport/passport.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

const Components = [
  DefaultComponent,
  EditorComponent,
  PassportComponent
];

const DefaultComponents = [
  HeaderComponent,
  SidebarComponent
];

@NgModule({
  imports: [RouterModule, NgZorroAntdModule, FormsModule, SharedModule],
  declarations: [...Components, ...DefaultComponents]
})
export class LayoutModule {}
