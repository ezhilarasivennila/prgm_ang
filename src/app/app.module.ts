import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {TouchedErrorStateMatcher} from './touched-error-state.matcher';
import {MatExpansionModule} from '@angular/material/expansion';
import { TechHobbiesComponent } from './tech-hobbies/tech-hobbies.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { TechnologyComponent } from './technology/technology.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DisplaydetailsComponent } from './displaydetails/displaydetails.component';
import { EmployeeService } from './service/employee.service';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthguardserviceService } from './authguardservice.service';
import {MatRadioModule} from '@angular/material/radio';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AuthenticationGuard } from './authentication.guard';
import { HobbychildComponent } from './hobbychild/hobbychild.component';
import { BookchildComponent } from './bookchild/bookchild.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeedetailsComponent,
    TechHobbiesComponent,
    HobbiesComponent,
    TechnologyComponent,
    DisplaydetailsComponent,
    LoginComponent,
    AddemployeeComponent,
    HobbychildComponent,
    BookchildComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatSelectModule,MatIconModule,MatExpansionModule,
    AppRoutingModule,MatNativeDateModule,MatDialogModule,MatCheckboxModule,
    BrowserAnimationsModule,MatDatepickerModule,FlexLayoutModule,
    MatSliderModule,MatCardModule,HttpClientModule,
    MatInputModule,NgbModule,MatTableModule,
    FormsModule,MatFormFieldModule,
    ReactiveFormsModule,MatRadioModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: TouchedErrorStateMatcher },EmployeeService,AuthguardserviceService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
