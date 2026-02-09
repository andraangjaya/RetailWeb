import {Component, OnInit, signal} from '@angular/core';
import {CustomerService} from './customer.service';
import {CustomerInterface} from './customer.interface';
import {State} from '../../shared/interfaces/state';

@Component({
  selector: 'app-customer.component',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers = signal<State<CustomerInterface[]>>({
    loading: true,
    data: [],
    error: null
  })

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer(): void {
    this.customerService.getCustomer().subscribe({
      next: (res) => {
        this.customers.set({
          loading: false,
          data: res,
          error: null
        });
      },
      error: (err) => {
        this.customers.set({
          loading: false,
          data: null,
          error: err.getMessage("Failed to load Customers")
        })
      }
    });
  }

}
