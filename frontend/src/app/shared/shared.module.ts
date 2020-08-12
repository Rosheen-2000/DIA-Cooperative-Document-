import {NgModule} from '@angular/core';

import {LogoComponent} from './logo/logo.component';
import {DocItemComponent} from './doc-item/doc-item.component';
import {FileSystemComponent} from './file-system/file-system.component';
import {NgZorroAntdModule, NzButtonModule, NzIconModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import { FolderItemComponent } from './folder-item/folder-item.component';

const Components = [
  LogoComponent,
  DocItemComponent,
  FileSystemComponent,
  FolderItemComponent
];

@NgModule({
  exports: [
    ...Components
  ],
  declarations: [...Components],
    imports: [
        RouterModule,
        NzIconModule,
        NgZorroAntdModule
    ]
})
export class SharedModule {
}
