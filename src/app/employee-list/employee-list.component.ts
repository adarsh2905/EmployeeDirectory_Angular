import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Employee } from '../employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employeeList! : Employee[];

  employeeSubsciption!: Subscription;

  constructor( private employeeDataService : EmployeeDataService) { }

  ngOnInit(): void {
    this.employeeDataService.getAllEmployees().subscribe(res => {
      this.employeeList = res;
    });

    this.employeeSubsciption = this.employeeDataService.displayEmployees.subscribe(res => {
      this.employeeList = res;
    });
  }
  
  openProfile(id:number) {
    this.employeeDataService.getEmployeeById(id);
  }

  ngOnDestroy(): void {
    this.employeeSubsciption.unsubscribe();
  }

}
