import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './admin-dashboard/dashboard/dashboard.component';
import { ClientProfileComponent } from './user-profile/client-profile/client-profile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClientsComponent } from './admin-dashboard/clients/clients.component';
import { CoachesComponent } from './admin-dashboard/coaches/coaches.component';
import { StaticdashComponent } from './admin-dashboard/staticdash/staticdash.component';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';
import { LoginService } from './service/login.service';
import { LoginGuard } from './service/guards/login.guard.service';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginadmin', component: AdminloginComponent },
    { path: 'client-profile/:id', component: ClientProfileComponent , canActivate:[LoginGuard]},
    { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'static', pathMatch: 'full' },
      { path: 'static' , component : StaticdashComponent},
      { path: 'clients', component : ClientsComponent  },
      { path: 'coachs', component : CoachesComponent  }

  ]},

  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })
],
  exports: [RouterModule],


})
export class AppRoutingModule { }
