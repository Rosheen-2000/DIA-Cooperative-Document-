import {NgModule} from '@angular/core';

import {LogoComponent} from './logo/logo.component';
import { DocItemComponent } from './doc-item/doc-item.component';
import { FileSystemComponent } from './file-system/file-system.component';

const Components = [
  LogoComponent,
  DocItemComponent,
  FileSystemComponent
];

@NgModule({
  exports: [
    ...Components
  ],
  declarations: [...Components]
})
export class SharedModule {}
