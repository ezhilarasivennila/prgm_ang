import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateFirstName, validateLastName } from '../validator/valiidatorfunc';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addemployeeprofile = new FormGroup({
    id:new FormControl(' ',Validators.minLength(5)),
    fname: new FormControl(' ', [validateFirstName, Validators.minLength(3), Validators.maxLength(15), Validators.required]),
    lname: new FormControl(' ', [validateLastName, Validators.minLength(3), Validators.maxLength(15)]),
    designation: new FormControl('', Validators.required),
    experience: new FormControl(' ', Validators.required),
    gender:new FormControl(' ',Validators.required)
  });
  designationList: string[] = ['B.E', 'B.TECH', 'M.E', 'M.TECH', 'B.SC', 'BCA'];
  experienceList: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];
  add=false;
  adddisplay:string='';
  onadd()
  {
this.add=true;
this.adddisplay="Employee added successfully";
  }
}
