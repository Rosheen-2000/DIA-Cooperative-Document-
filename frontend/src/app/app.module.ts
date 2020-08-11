import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SafetyPipe} from './core/html/safety.pipe';
import {RoutesModule} from './routes/routes.module';
import {LayoutModule} from './layout/layout.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SafetyPipe
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    LayoutModule,
    RouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
