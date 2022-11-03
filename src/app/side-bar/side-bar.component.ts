import { Component, OnInit } from '@angular/core';
import { sideBarData } from '../sidebar-data';
import { Subscription } from 'rxjs';
import { EmployeeDataService } from '../employee-data.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  departments = this.sideBarData.departments;
  offices = this.sideBarData.offices;
  jobTitles = this.sideBarData.jobTitles;
  displayJobTitles : string[] = this.displayVisibleList(this.jobTitles);
  hiddenJobTitle : string[] = this.displayHiddenList(this.jobTitles);
  viewLess : boolean = false;

  departmentMap = new Map<string, number>();
  officeMap = new Map<string, number>();
  jobTitleMap = new Map<string, number>();
  employeeSubsciption!: Subscription;
  displayEmployeeSubscription!: Subscription;

  constructor(private sideBarData : sideBarData, private employeeDataService : EmployeeDataService) { }
  
  employeeList : Employee[] = this.employeeDataService.getData();

  ngOnInit(): void {
    this.displayEmployeeSubscription = this.employeeDataService.getAllEmployees().subscribe(res => {
      this.employeeList = res;
      this.getEmployeeCount();
    });

    this.employeeSubsciption = this.employeeDataService.allEmployees.subscribe(res => {
      this.employeeList = res;
      this.getEmployeeCount();
    });
  }

  getEmployeeCount() {
    for(let i = 0; i < this.departments.length; i++){
      this.departmentMap.set(this.departments[i], 0);
    }

    for(let i = 0; i < this.offices.length; i++){
      this.officeMap.set(this.offices[i], 0);
    }

    for(let i = 0; i < this.jobTitles.length; i++){
      this.jobTitleMap.set(this.jobTitles[i], 0);
    }

    for(let i = 0; i < this.employeeList.length; i++){
      let empDept = this.employeeList[i].department;
      let empOffice = this.employeeList[i].office;
      let empJobTitle = this.employeeList[i].jobTitle;
      if(this.departmentMap.has(empDept)){
        this.departmentMap.set(empDept, this.departmentMap.get(empDept)! + 1);
      }
      if(this.officeMap.has(empOffice)){
        this.officeMap.set(empOffice, this.officeMap.get(empOffice)! + 1);
      }
      if(this.jobTitleMap.has(empJobTitle)){
        this.jobTitleMap.set(empJobTitle, this.jobTitleMap.get(empJobTitle)! + 1);
      }
    }
  }

  displayVisibleList(jobTitles : string[]) : string[] {
    let displayList : string[] = [];
    for(let i = 0; i < 5; i++){
      displayList[i] = jobTitles[i];
    }
    return displayList;
  }

  displayHiddenList(jobTitles : string[]) : string[] {
    let hiddenList : string[] = [];
    for(let i = 5; i < jobTitles.length; i++){
      hiddenList[i - 5] = jobTitles[i];
    }
    return hiddenList;
  }
  
  getFilteredEmployeeList(searchKey : string, filter : string){
    this.employeeDataService.filterEmployees(searchKey, filter);
    event?.preventDefault();
  }

  toggleList(){
    this.viewLess = !this.viewLess;
  }

  ngOnDestroy(){
    this.employeeSubsciption.unsubscribe();
    this.displayEmployeeSubscription.unsubscribe();
  }
}
