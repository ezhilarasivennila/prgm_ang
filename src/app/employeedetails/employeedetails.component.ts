import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { validateFirstName, validateLastName } from '../validator/valiidatorfunc';
import statejson from '../../assets/state.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { getJSDocTemplateTag } from 'typescript';
import { Observable } from 'rxjs';
import { Istate } from './stateinterface';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private router: Router, public empservice: EmployeeService, private route: ActivatedRoute, public http: HttpClient) { }
  private dynam: any;
  public state1: any;
  ngOnInit(): void {
    //this.employeeprofile=this.empservice.employeeFormData.value;
    /*this.dynam=this.route.params.subscribe(params=>
      {
        //this.employeeprofile=params['empservice.employeeFormData'];
        if(params){
         this.employeeprofile=params['empservice.employeeFormData'];
        }
        console.log(params);
      });*/
    console.log("hi");
    //this.getstate().subscribe(res=>this.state1=res);
    console.log(this.state1);

  }


  /* ngOnDestroy() {
     this.dynam.unsubscribe();
   }*/
  employeeprofile = this.empservice.employeeprofile;
  /*employeeprofile = new FormGroup({
    fname: new FormControl(' ', [validateFirstName, Validators.minLength(3), Validators.maxLength(15), Validators.required]),
    lname: new FormControl(' ', [validateLastName, Validators.minLength(3), Validators.maxLength(15)]),
    dob: new FormControl(' '),
    designation: new FormControl('', Validators.required),
    experience: new FormControl(' ', Validators.required),
    img: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required)
  });*/
  designationList: string[] = ['B.E', 'B.TECH', 'M.E', 'M.TECH', 'B.SC', 'BCA'];
  experienceList: string[] = ['0', '1', '2', '3', '4', '5', '6', '7'];
  filename: any;
@Input()
displayname:string='';
  stateList: any = []
  getstate() {
    return this.http.get<any>("../../assets/state.json").subscribe(data => { this.empservice.state2 = data; this.stateList = this.empservice.state2.states; console.log(this.empservice.state2) });
  }


  cities = []
  //private files: Array<FileUploadModel> = [];
  public uploadmsg: string = '';
  onimgclick() {
    const imupload = document.getElementById('imgUpload') as HTMLInputElement;

    imupload.click();
  }


  public statejsonobj = this.getstate();
  public selectedfile: any;
  onsubmit() {
    this.empservice.employeeFormData = this.employeeprofile.value;
    console.log(this.empservice.employeeFormData);
    this.empservice.datasource.data.push(this.employeeprofile.get('fname')?.value);
    this.empservice.datasource.data.push(this.employeeprofile.get('lname')?.value);

    this.router.navigate(['/tech-hobbies']);
  }
  onselect(event: any) {
    this.stateList.map((state: any) => {
      if (state.state === this.employeeprofile.value.state) {
        this.cities = state.cities
      }
    })
  }
  onFileChanged(event: any) {
    this.uploadmsg = "image uploaded";
    console.log(event.target);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.empservice.dispimg=event.target.files[0].name;
      //this.getstate();
      //console.log(this.empservice.state2.states);
      //console.log(this.stateList);
      reader.onload = (event: any) => {
        this.empservice.emplimg = event.target.result;
      }
    }
  }
}
