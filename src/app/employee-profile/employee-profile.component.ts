import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Employee } from '../employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDataService } from '../employee-data.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  firstName : string = "";
  lastName : string = "";
  preferredName : string = "";

  constructor(private employeeDataService : EmployeeDataService, private matDialog: MatDialog) { }

  ngOnInit(): void {}

  employee : Employee = this.employeeDataService.fetchedEmployee;

  public editEmployeeDetails(employee : Employee) {
    this.matDialog.closeAll();
    this.employeeDataService.updateEmployeeDetails(employee.id); 
  }

  public deleteEmployee(id : number){
    this.employeeDataService.deleteEmployeeFromList(id);
  }

}
