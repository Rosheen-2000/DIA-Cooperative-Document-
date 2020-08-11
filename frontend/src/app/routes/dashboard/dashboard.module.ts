import {NgModule} from '@angular/core';

import {OwnComponent} from './own/own.component';
import {UsedComponent} from './used/used.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../shared/shared.module';

const Components = [
  OwnComponent,
  UsedComponent,
  FavoritesComponent
];

@NgModule({
  declarations: [...Components],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule {
}
