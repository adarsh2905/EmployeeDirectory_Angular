import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-alpha-button',
  templateUrl: './alpha-button.component.html',
  styleUrls: ['./alpha-button.component.scss']
})
export class AlphaButtonComponent implements OnInit {
  alphabets : string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(private employeeDataService : EmployeeDataService) { }
  
  ngOnInit(): void {
  }

  getAllEmployees(){
    this.employeeDataService.getAllEmployeesOnReset();
  }

  getFilteredData(alphabet:string){
    this.employeeDataService.filterEmployees(alphabet, this.employeeDataService.filterValue);
  }

}
