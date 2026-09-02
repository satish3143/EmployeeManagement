import { Routes } from '@angular/router';
import { EmployeeList } from './employee-list';
import { EmployeeForm } from './employee-form';

export const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeList
  },
  {
    path: 'employees/add',
    component: EmployeeForm
  }
];
