import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OwnComponent} from './own/own.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {UsedComponent} from './used/used.component';

const routes: Routes = [
  {path: 'own', component: OwnComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'used', component: UsedComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
