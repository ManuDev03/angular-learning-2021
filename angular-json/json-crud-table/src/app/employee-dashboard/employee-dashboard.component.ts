import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor() { }
  empform:FormGroup

  ngOnInit(): void {
    this.empform = new FormGroup({
      'firstname': new FormControl(null,Validators.required),
      'lastname': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'mobileNo': new FormControl(null,Validators.required),
      'salary': new FormControl(null,Validators.required)   
    })
  }
  add_emp(){

  }

}
