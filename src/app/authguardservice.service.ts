import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {

  constructor() { }
  checkusernamepassword(usname:string,pwd:string)
  {
    console.log(usname+""+pwd);
    console.log(typeof(usname));
    usname="admin";
    //usname="ezhilarasi";
   // console.log(usname=='ezhilarasi');
    //console.log(pwd=="abc1234562");
    
    if(usname=="admin" && pwd=="abc1234562")
    {
      //console.log(usname);
      localStorage.setItem('username',"admin");
     // console.log(localStorage.getItem('username'));
      return true;
    }
    else
    {
      console.log("false");
      return false;
    }

  }
}
