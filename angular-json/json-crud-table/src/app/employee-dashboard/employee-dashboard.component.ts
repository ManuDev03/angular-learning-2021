import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'

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
      'firstname': new FormControl(''),
      'lastname': new FormControl(''),
      'email': new FormControl(''),
      'mobileNo': new FormControl(''),
      'salary': new FormControl('')

    })
  }
  add_emp(){
    
  }

}
