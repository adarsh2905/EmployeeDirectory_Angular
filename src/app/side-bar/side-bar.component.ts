import { Component, OnInit } from '@angular/core';
import { sideBarData } from '../sidebar-data';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private sideBarData : sideBarData, private employeeDataService : EmployeeDataService) { }
  offices = this.sideBarData.offices;
  departments = this.sideBarData.departments;
  jobTitles = this.sideBarData.jobTitles;
  displayJobTitles : string[] = this.displayVisibleList(this.jobTitles);
  hiddenJobTitle : string[] = this.displayHiddenList(this.jobTitles);

  ngOnInit(): void {
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
}
