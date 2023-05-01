import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { LoginComponent } from './screens/login/login.component';
import { SidebarComponent } from './components/dashboard/navbar/sidebar/sidebar.component';
import { TopbarComponent } from './components/dashboard/navbar/topbar/topbar.component';
import { InputComponent } from './components/forms/input/input.component';
import { ButtonComponent } from './components/forms/button/button.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ArrivalsComponent } from './screens/arrivals/arrivals.component';
import { DeparturesComponent } from './screens/departures/departures.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/dashboard/cards/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    TopbarComponent,
    InputComponent,
    ButtonComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    ArrivalsComponent,
    DeparturesComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
