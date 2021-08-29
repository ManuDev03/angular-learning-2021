import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'
import { EmployeeModel } from './employee.dash board.model';
import {ApiService} from '../shared/api.service'

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(private _service:ApiService) { }
  empform:FormGroup
  employeeModelObj: EmployeeModel = new EmployeeModel()
  empData:any

  ngOnInit(): void {
    this.empform = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'mobile': new FormControl(null,Validators.required),
      'salary': new FormControl(null,Validators.required)   
    })
    this.get_emp()
  }
  add_emp(){}
  post_emp(){
    console.log(this.empform.value)
    this.employeeModelObj.firstname = this.empform.value.firstname
    this.employeeModelObj.lastname = this.empform.value.lastname
    this.employeeModelObj.email = this.empform.value.email
    this.employeeModelObj.mobile = this.empform.value.mobile
    this.employeeModelObj.salary = this.empform.value.salary

    this._service.postEmployee(this.employeeModelObj).subscribe(res=>{
      console.log(res)
      alert("employee added succesfully")
      let ref = document.getElementById('cancel')
      ref?.click()
      this.empform.reset()
    },
    err=>{
      alert("something went wrong")
    })
  }

  get_emp(){
    this._service.getEmployee().subscribe(res=>{ 
      this.empData = res

    })
  }
}
