import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { ClientProfileComponent } from './user-profile/client-profile/client-profile.component';
import { ClientsComponent } from './admin-dashboard/clients/clients.component';
import { CoachesComponent } from './admin-dashboard/coaches/coaches.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';

import { StaticdashComponent } from './admin-dashboard/staticdash/staticdash.component';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    ClientProfileComponent,
    ClientsComponent,
    CoachesComponent,
    DashboardComponent,
    StaticdashComponent,
    AdminloginComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
