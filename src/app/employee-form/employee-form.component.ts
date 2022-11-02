import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Employee } from '../employee.model';
import { EmployeeDataService } from '../employee-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { sideBarData } from '../sidebar-data';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  encodedImageUrl!: string;

  constructor(private employeeDataService: EmployeeDataService, public dialogRef: MatDialogRef<EmployeeFormComponent>, private sideBarData : sideBarData) { }

  offices = this.sideBarData.offices;
  departments = this.sideBarData.departments;
  jobTitles = this.sideBarData.jobTitles;

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      preferredName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]),
      jobTitle: new FormControl('', [Validators.required]),
      office: new FormControl('', [Validators.required]),
      department: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
      skypeId: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEmployeeDetails(employeeForm: Employee) {
    let firstName = this.employeeForm.get('firstName')?.value;
    let lastName = this.employeeForm.get('lastName')?.value;
    let preferredName = this.employeeForm.get('preferredName')?.value;
    if (preferredName === "") {
      preferredName = `${firstName} ${lastName}`;
    }
    let email = this.employeeForm.get('email')?.value;
    let jobTitle = this.employeeForm.get('jobTitle')?.value;
    let office = this.employeeForm.get('office')?.value;
    let department = this.employeeForm.get('department')?.value;
    let telephone = this.employeeForm.get('telephone')?.value;
    let skypeId = this.employeeForm.get('skypeId')?.value;
    let imageUrl = this.encodedImageUrl;
    let newEmployee = { firstName, lastName, preferredName, email, jobTitle, office, department, telephone, skypeId, imageUrl } as Employee;
    this.employeeDataService.createEmployee(newEmployee);
  }

  generateImageUrl(event: any) {
    const setImageUrl = (url: any) => this.encodedImageUrl = url;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      setImageUrl(reader.result);
    }
    reader.readAsDataURL(file);
  }

}
