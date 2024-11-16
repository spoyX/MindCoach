import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { ClientProfileComponent } from './user-profile/client-profile/client-profile.component';
import { CoachProfileComponent } from './user-profile/coach-profile/coach-profile.component';
import { ClientsComponent } from './admin-dashboard/clients/clients.component';
import { CoachesComponent } from './admin-dashboard/coaches/coaches.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';


import { StaticdashComponent } from './admin-dashboard/staticdash/staticdash.component';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    
  
    NotfoundComponent,
    ClientProfileComponent,
    CoachProfileComponent,
    ClientsComponent,
    CoachesComponent,
    DashboardComponent,
  
    StaticdashComponent,
        AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
