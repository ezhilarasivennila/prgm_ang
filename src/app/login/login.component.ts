import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardserviceService } from '../authguardservice.service';
import { EmployeeService } from '../service/employee.service';
import { validateFirstName, validateLastName } from '../validator/valiidatorfunc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//user='1'
  constructor(private router:Router,private empservice:EmployeeService,private authservice:AuthguardserviceService) { }

  ngOnInit(): void {
   // localStorage.setItem('SessionUser',this.rolecheck);
    //console.log(localStorage.getItem("SessionUser"));
  }
  loginprofile = new FormGroup({
    username: new FormControl(' ', [validateFirstName, Validators.minLength(3), Validators.maxLength(15), Validators.required]),
    password: new FormControl(' ', [validateLastName, Validators.minLength(8), Validators.maxLength(15)]),
    role: new FormControl(' ')});
    rolecheck:string='';
    msg:string='';
    onlogin(uname:string,pswd:string)
    {
      this.empservice.logindata=this.loginprofile.value;
      this.rolecheck=this.empservice.logindata["role"];
      console.log(uname+" "+pswd+" "+this.rolecheck);
      var auth=this.authservice.checkusernamepassword(uname,pswd);
      console.log(auth);

      if(auth==true && this.rolecheck==="User")
      {this.router.navigate(['/employee']);}
      else if(auth==true && this.rolecheck==="Admin")
      {
        this.router.navigate(['/addemployee']);
      }
      else
      {
        this.msg="invalid username or password";
      }
    }

}
