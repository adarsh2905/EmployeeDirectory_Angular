import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Employee } from './employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  public displayEmployees = new Subject<Employee[]>();
  public filterValue: string = "First Name";
  fetchedEmployee! : Employee;
  newEmployeeList! : Employee[]
  constructor(private matDialog : MatDialog) {}

  public createEmployee(employee: Employee) {
    employee.id = this.getLatestId() + 1;
    localStorage.setItem(JSON.stringify(this.getLatestId() + 1), JSON.stringify(employee));
    localStorage.setItem('latestId', JSON.stringify(this.getLatestId() + 1));
    this.getAllEmployeesOnReset();
  }

  public getLatestId(): number {
    const value = localStorage.getItem('latestId');
    if (value) {
      return parseInt(value);
    }
    else {
      localStorage.setItem('latestId', "0");
      return 0;
    }
  }

  public getData() {
    let employeeList: Employee[] = [];
    let latestEmployeeId: number = parseInt(localStorage.getItem('latestId')!);
    for (let i = 1; i <= latestEmployeeId; i++) {
      if(localStorage.getItem(`${i}`) != null){
        employeeList.push(JSON.parse(localStorage.getItem(`${i}`)!) as Employee);
      }
      else
      continue;
    }
    return employeeList;
  }

  public getAllEmployees(): Observable<Employee[]>{
    const employees = this.getData();
    return of(employees);
  }

  public getAllEmployeesOnReset() {
    let allEmployees : Employee[] = this.getData();
    this.displayEmployees.next(allEmployees);
  }

  public getEmployeeById(id: number){
    let stringId = id.toString();
    this.fetchedEmployee = JSON.parse(localStorage.getItem(stringId)!) as Employee;
    this.matDialog.open(EmployeeProfileComponent,{
      "width": '25%',
      "height": '90%'
    });
    event?.preventDefault();
  }

  getUpdatedFilter(filter: string): string {
    let obj: any = {
      "First Name": "firstName",
      "Last Name": "lastName",
      "Preferred Name": "preferredName",
      "Email": "email",
      "Job Title": "jobTitle",
      "Office": "office",
      "Department": "department"
    };
    return obj[filter] as string;
  }

  public filterEmployees(searchKey: string, filter: string) {
    let employeeList: Employee[] = this.getData();
    let filteredEmployeeList: Employee[] = [];
    let text: string = searchKey.toLowerCase();
    let mappedFilterValue = this.getUpdatedFilter(filter);
    employeeList.forEach((item: any) => {
      if (item[mappedFilterValue].toLowerCase().includes(text)) {
        filteredEmployeeList.push(item as Employee);
      }
    });
    this.displayEmployees.next(filteredEmployeeList);
  }

  public deleteEmployeeFromList(id : number){
    let stringId: string = id.toString();
    localStorage.removeItem(stringId);
    this.newEmployeeList = this.getData();
    console.log(this.newEmployeeList);
    this.displayEmployees.next(this.newEmployeeList);
  }
}



