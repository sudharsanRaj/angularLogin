import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { MatDialogModule } from '@angular/material';
import {CalendarModule} from 'primeng/calendar';
import { CalendarModalComponent } from './calendar-modal/calendar-modal.component';
import { CalenderdashboardComponent } from './calenderdashboard/calenderdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeedetailsComponent,
    HomeComponent,
    EditEmployeeComponent,
    AlertModalComponent,
    CalendarModalComponent,
    CalenderdashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatDialogModule,
    CalendarModule,
    FormsModule 
  ],
  entryComponents: [
    AlertModalComponent,
    CalendarModalComponent
],
  providers: [],
  bootstrap: [AppComponent],
  exports:[AlertModalComponent]
})
export class AppModule { }
