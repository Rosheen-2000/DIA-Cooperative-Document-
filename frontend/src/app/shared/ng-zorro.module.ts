import {NgModule} from '@angular/core';
import {NzButtonModule, NzFormModule} from 'ng-zorro-antd';
import {NzInputModule} from 'ng-zorro-antd/input';

const Modules = [
  NzButtonModule,
  NzInputModule,
  NzFormModule,
];

@NgModule({
  imports: [...Modules],
  exports: [...Modules]
})
export class NgZorroModule {}
