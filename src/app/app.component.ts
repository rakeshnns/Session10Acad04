import { Component, OnInit   } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmployeeMember } from './app.service';
import { Degreelist } from './app.select.service';
import { MyEmpDeg, Employeedet } from './app.member';
import { ValidateDep } from './app.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  Firstname: string;
  Lastname: string;
  Department: string;
  Degree: MyEmpDeg[];
  EMPARRAY: FormGroup[];
  EMPDeg: MyEmpDeg[];
  len: number;
  myForm: FormGroup;

  constructor(private employeemember: EmployeeMember, private degreelist: Degreelist,
              private fb: FormBuilder) {}

  ngOnInit() {
   /* this.Firstname = 'FName';
    this.Lastname = 'LName';
    this.Department = 'De';
    this.EMPDeg  = this.degreelist.getTitle();*/
    this.EMPDeg = this.degreelist.getTitle();

    this.myForm = this.fb.group({
       'Firstname': ['Fname', [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
       'Lastname': ['Lname', [Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
       'Department': ['111', [Validators.required, ValidateDep(/[1-9][0-9]{2}/)]],
       'Degree': [this.EMPDeg, Validators.required],
      });
  }

  onSubmit(myForm) {
    if (myForm.valid) {
      console.log(myForm.value);
      this.employeemember.addEmpFunction(myForm.value);
    }

    this.EMPARRAY  = this.employeemember.getEmpFunction();
    this.len = this.EMPARRAY.length;
  }
}
