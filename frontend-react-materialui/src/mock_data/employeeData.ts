import { Employee } from '../pages/EmployeePage';

export const employeeDummyData: Employee[] = [
  {
    id: 1,
    name: 'Kingshuk Nandy',
    department: 'Admin',
    contact: { email: 'king@12134' },
    hireDate: new Date('2015-03-25'),
  },
  {
    id: 2,
    name: 'Ram Sharma',
    department: 'Admin',
    contact: { email: 'ram@12134', mobileNumber: 905678898 },
    hireDate: new Date('2015-03-29'),
  },
  {
    id: 3,
    name: 'Virat Kohli ',
    department: 'Software',
    contact: { email: 'virat@12134' },
    hireDate: new Date(),
  },
  {
    id: 4,
    name: 'Anurah Basu',
    department: 'Hardware',
    contact: { email: 'basu@12134' },
    hireDate: new Date(),
  },
];
