import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { CalenderdashboardComponent } from './calenderdashboard/calenderdashboard.component';


const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addemployee', component: EmployeedetailsComponent },
  { path: 'editemployee/:id', component: EditEmployeeComponent },
  { path: 'calendarView', component: CalenderdashboardComponent },
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule ]
})
export class AppRoutingModule { }
