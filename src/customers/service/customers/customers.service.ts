import { Injectable } from '@nestjs/common';
import { CreateCustomerType } from 'src/customers/type/createCustomerType';

@Injectable()
export class CustomersService {
  customers = [
    {
      id: 1,
      name: 'Rony',
      email: 'eng.hanif.roni63@gmail.com',
    },
    {
      id: 2,
      name: 'Elma',
      email: 'hanif.rony@apsissolution.com',
    },
    {
      id: 3,
      name: 'Hanif',
      email: 'ronyhassen96@gmail.com',
    },
  ];

  getUserById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(createCustomerType: CreateCustomerType) {
    this.customers.push(createCustomerType);
  }

  getCustomer() {
    return this.customers;
  }
}
