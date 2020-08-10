import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { MyspaceComponent } from './routes/myspace/myspace.component';
import { TeamspaceComponent } from './routes/teamspace/teamspace.component';
import { WorkspaceComponent } from './routes/workspace/workspace.component';
import { MyinfoComponent } from './routes/myspace/myinfo/myinfo.component';
import { RecentdeleteComponent } from './routes/workspace/recentdelete/recentdelete.component';
import { MystardocComponent } from './routes/workspace/mystardoc/mystardoc.component';
import { MyteamdocComponent } from './routes/workspace/myteamdoc/myteamdoc.component';
import { TeaminfoComponent } from './routes/teamspace/teaminfo/teaminfo.component';
import { TeammemberComponent } from './routes/teamspace/teammember/teammember.component';
import { TeamdocComponent } from './routes/teamspace/teamdoc/teamdoc.component';
import { TeammanageComponent } from './routes/teamspace/teammanage/teammanage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MyspaceComponent,
    TeamspaceComponent,
    WorkspaceComponent,
    MyinfoComponent,
    RecentdeleteComponent,
    MystardocComponent,
    MyteamdocComponent,
    TeaminfoComponent,
    TeammemberComponent,
    TeamdocComponent,
    TeammanageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
