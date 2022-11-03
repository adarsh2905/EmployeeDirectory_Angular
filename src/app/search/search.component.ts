import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private matDialog: MatDialog, private employeeDataService : EmployeeDataService
  ) { }

  filters = ['First Name', 'Last Name', 'Preferred Name', 'Email', 'Job Title', 'Office', 'Department'];

  ngOnInit(): void {}

  openFormDialog() {
    this.matDialog.open(EmployeeFormComponent, {
      "width": '40%',
      "height": '80%'
    });
  }

  filterByKeyword(searchKey:string, filter:string){
    this.employeeDataService.filterEmployees(searchKey, filter);
  }

  setFilterValue(e: Event){
    this.employeeDataService.filterValue = (e.target as HTMLSelectElement).value;
  }

  @ViewChild("toggleButton")
  filter!: ElementRef;
  clearInput(){
    this.employeeDataService.getAllEmployeesOnReset();
    this.filter.nativeElement.value = this.filters[0];
  }
 
}
