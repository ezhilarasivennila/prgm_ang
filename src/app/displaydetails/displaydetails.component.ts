import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {

  constructor(public empservice:EmployeeService) { }

  ngOnInit(): void {
  }
firstname=this.empservice.employeeFormData["fname"];
lastname=this.empservice.employeeFormData["lname"];
dob=this.empservice.employeeFormData["dob"];
designation=this.empservice.employeeFormData["designation"];
exp=this.empservice.employeeFormData["experience"];
state=this.empservice.employeeFormData["state"];
city=this.empservice.employeeFormData["city"];
empimg=this.empservice.emplimg;
hobby=this.empservice.hobbies;
technology=this.empservice.technologies;
}
