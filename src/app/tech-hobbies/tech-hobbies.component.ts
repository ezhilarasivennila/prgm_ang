import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { TechnologyComponent } from '../technology/technology.component';
import { EmployeeService } from '../service/employee.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-tech-hobbies',
  templateUrl: './tech-hobbies.component.html',
  styleUrls: ['./tech-hobbies.component.css']
})
export class TechHobbiesComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion;
  constructor(private router: Router, private dialog: MatDialog, private dialog1: MatDialog,private location:Location,private empservice:EmployeeService) { }

  ngOnInit(): void {
  }
  hobbies: any = []
  view=false;
  /*opendialoghobbies(): void {
    let dialogobj = this.dialog.open(HobbiesComponent, {
      height: '380px',
      width: '320px',
      data: { checkhobby: this.hobbies }
     
    });
  

  }*/
  technologies: string[] = []
 /* opendialogtechnology(): void {
    let dialogobj1 = this.dialog1.open(TechnologyComponent, {
      height: '380px',
      width: '320px',
      data: { checktechnology: this.technologies }
    });
   
    dialogobj1.afterClosed().subscribe(result => {
      console.log('dialog is closed');
      this.technologies = result;
      console.log(this.technologies);
    }); 

  }*/
  onclickconfirm() {
    this.router.navigate(["/display"]);
  }

addtechnologyevent(technology:string)
{
  this.technologies.push(technology);
  this.empservice.technologies=this.technologies;
}
deletehobby(hobby:string,i:number)
{
this.hobbies.splice(i,1);
this.empservice.hobbies=this.hobbies;
}
addhobbyevent(hobby:string)
{
  this.hobbies.push(hobby);
  this.empservice.hobbies=this.hobbies;
}
deletetechnology(technology:string,i:number)
{
this.technologies.splice(i,1);
this.empservice.technologies=this.technologies;
}
displayhobbystring:string='After selecting hobby and techology click confirm and move to next page';
  onclickback() {
    this.router.navigate(["/employee"]);
    this.empservice.getBackvalue();

    //this.location.back();
    //window.history.pushState(this.empservice.employeeFormData.value,"/");
  }
  books = ['juliusceaser', 'wingsoffire'];

  addBookevent(newbook: string) {
    this.books.push(newbook);
  }
}
