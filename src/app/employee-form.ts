import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  employee = {
    name: '',
    email: '',
    department: ''
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  addEmployee() {
    console.log('ADD EMPLOYEE CLICKED');

    const newEmployee = {
      id: Date.now(),
      name: this.employee.name,
      email: this.employee.email,
      department: this.employee.department
    };

    this.employeeService.addEmployee(newEmployee);

    alert('Employee added successfully!');

    this.router.navigate(['/employees']);
  }
}
