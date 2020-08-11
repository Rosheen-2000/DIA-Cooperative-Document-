import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SafetyPipe} from './core/html/safety.pipe';
import {RoutesModule} from './routes/routes.module';
import {LayoutModule} from './layout/layout.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {DefaultInterceptor} from './core/net/default.interceptor';

registerLocaleData(zh);

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
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
