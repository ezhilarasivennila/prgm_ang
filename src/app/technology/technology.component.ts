import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../service/employee.service';
import {  DialogDatainput } from './technologyinterface';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(public dialogobj:MatDialogRef<TechnologyComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogDatainput,private empservice:EmployeeService) { }

  ngOnInit(): void {
  }
  technology:string='';
  technologies=[
    'java','c','c++','c#','python'
  ]
  saved:string='';
  onsave()
  {
    this.saved='Technologies known Saved';
   
   // this.dialogobj.close();
  }
  onclose(selecttech:string[])
  {
    this.dialogobj.close();
    return selecttech;
  }
  oncheck(tech:string)
{
this.data.checktechnology.push(tech);
this.empservice.technologies=this.data.checktechnology;
console.log(this.data.checktechnology);
}
}
