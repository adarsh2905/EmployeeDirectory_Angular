import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(private employeeDataService : EmployeeDataService) { }

  ngOnInit(): void {
  }

  employee : Employee = this.employeeDataService.fetchedEmployee;

  public deleteEmployee(id : number){
    this.employeeDataService.deleteEmployeeFromList(id);
  }

}
