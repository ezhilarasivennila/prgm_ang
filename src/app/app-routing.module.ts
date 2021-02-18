import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthenticationGuard } from './authentication.guard';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { LoginComponent } from './login/login.component';
import { TechHobbiesComponent } from './tech-hobbies/tech-hobbies.component';

const routes: Routes = [
  {path:"employee",component:EmployeedetailsComponent,canActivate:[AuthenticationGuard]},
  {path:"tech-hobbies",component:TechHobbiesComponent},
  {path:"display",component:DisplaydetailsComponent},
  {path:"",redirectTo:"login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"addemployee",component:AddemployeeComponent,canActivate:[AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
