import {NgModule} from '@angular/core';

import {LogoComponent} from './logo/logo.component';
import { DocItemComponent } from './doc-item/doc-item.component';

const Components = [
  LogoComponent,
  DocItemComponent
];

@NgModule({
  declarations: [...Components]
})
export class SharedModule {}
