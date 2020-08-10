import {NgModule} from '@angular/core';
import {DefaultComponent} from './default/default.component';
import {EditorComponent} from './editor/editor.component';
import {PassportComponent} from './passport/passport.component';
import {RoutesRoutingModule} from '../routes/routes-routing.module';

const Components = [
  DefaultComponent,
  EditorComponent,
  PassportComponent
];

@NgModule({
  imports: [
    RoutesRoutingModule
  ],
  declarations: [...Components]
})
export class LayoutModule {}
