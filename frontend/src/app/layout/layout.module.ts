import {NgModule} from '@angular/core';
import {DefaultComponent} from './default/default.component';
import {EditorComponent} from './editor/editor.component';
import {PassportComponent} from './passport/passport.component';
import {RouterModule} from '@angular/router';

const Components = [
  DefaultComponent,
  EditorComponent,
  PassportComponent
];

@NgModule({
  imports: [RouterModule],
  declarations: [...Components]
})
export class LayoutModule {}
