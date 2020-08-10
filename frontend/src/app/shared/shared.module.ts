import {NgModule} from '@angular/core';

import {LogoComponent} from './logo/logo.component';

const Components = [
  LogoComponent
];

@NgModule({
  declarations: [...Components]
})
export class SharedModule {}
