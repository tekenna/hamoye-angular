import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ArrivalsComponent } from './screens/arrivals/arrivals.component';
import { DeparturesComponent } from './screens/departures/departures.component';
import { LoginComponent } from './screens/login/login.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
// import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:"login", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: AppLayoutComponent },
  { path: 'arrivals', component: ArrivalsComponent },
  { path: 'departures', component: DeparturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
