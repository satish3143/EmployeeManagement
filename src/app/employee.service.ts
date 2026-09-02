import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: Employee[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@gmail.com',
      department: 'IT'
    },
    {
      id: 2,
      name: 'Sarah Lee',
      email: 'sarah@gmail.com',
      department: 'HR'
    },
    {
      id: 3,
      name: 'David Kumar',
      email: 'david@gmail.com',
      department: 'Finance'
    }
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
}
