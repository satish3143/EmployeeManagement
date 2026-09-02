import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService, Employee } from './employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.getEmployees();
  }
}
