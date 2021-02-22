import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogDatain} from '../hobbies/hobbyinterface'
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  //constructor(public dialogobj:MatDialogRef<HobbiesComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogDatain,private empservice:EmployeeService) { }
constructor(){}
  ngOnInit(): void {
  }

hobbies=['singing','listening music','reading books','playing games']
saved:string='';
@Output()
public hobbyevent=new EventEmitter();
addhobby(value:string)
{
 this.hobbyevent.emit(value);
}
onsave()
{
  this.saved='Hobbies Saved';
 
 // this.dialogobj.close();
}
/*onclose()
{
  this.dialogobj.close();
}
//checkhobby:any=[]
oncheck(hob:string)
{
this.data.checkhobby.push(hob);
this.empservice.hobbies=this.data.checkhobby;
console.log(this.data.checkhobby);
}*/
}
