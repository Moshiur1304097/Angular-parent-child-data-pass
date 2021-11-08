import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers:Customer[]=[
    {customerNo: 1, name: 'Rahul Dravid', address: '', city: 'Banglaore', state: 'Karnataka', country: 'India'},
  ]

selectedCustomer: Customer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(customer:Customer){
    this.selectedCustomer= Object.assign({}, customer);
  }

  update(customer:Customer){
    console.log(customer);
    var cust = this.customers.find(e=>e.customerNo ==customer.customerNo);
    Object.assign(cust,customer);
    alert("customer saved");
  }
}
