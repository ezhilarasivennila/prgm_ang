import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateFirstName, validateLastName } from '../validator/valiidatorfunc';
import { MatTableDataSource } from '@angular/material/table';
export interface Formdetail {
    fname: string;
    lname: string;
}
const detail: Formdetail[] = [];
@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    employeeFormData: any = [];
    public emplimg: any;
    hobbies: any;
    technologies: any = [];
    logindata:any=[];
    employeeprofile = new FormGroup({
        fname: new FormControl(' ', [validateFirstName, Validators.minLength(3), Validators.maxLength(15), Validators.required]),
        lname: new FormControl(' ', [validateLastName, Validators.minLength(3), Validators.maxLength(15)]),
        dob: new FormControl(' '),
        designation: new FormControl('', Validators.required),
        experience: new FormControl(' ', Validators.required),
        img: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required)
    });
    public state2: any = [];
    datasource = new MatTableDataSource(detail);
   public dispimg:any;
    getBackvalue() {

        this.employeeprofile.setValue(this.employeeFormData.value);
        this.employeeprofile.controls['city'].setValue(this.employeeFormData["city"]);
        this.employeeprofile.controls['img'].setValue(this.dispimg.value);
        //this.employeeprofile.patchValue({img:this.dispimg.value});
        //this.employeeprofile.controls['city'].patchValue({ city: this.employeeFormData["city"].value });
        //this.employeeprofile.controls['img'].patchValue({ img: this.dispimg.value });
        //this.employeeprofile.patchValue({img:this.emplimg, city:this.employeeFormData["city"]});
        //this.employeeprofile.controls.city.setValue(this.employeeFormData["city"]);
        //this.employeeprofile.controls.img.setValue(this.emplimg);
        //this.employeeprofile.get('img')?.setValue(this.emplimg.value);
        //this.employeeprofile.get('city')?.setValue(this.employeeFormData["city"].value);


    }
}