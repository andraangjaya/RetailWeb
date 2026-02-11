import {Component, OnInit, signal} from '@angular/core';
import {Navbar} from "../navbar/navbar";
import {State} from '../../shared/interfaces/state';
import {OrderInterface} from './order.interface';
import {OrderService} from './order.service';

@Component({
  selector: 'app-order',
  imports: [
    Navbar
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {

  orders = signal<State<OrderInterface[]>>({
    loading: true,
    data: null,
    error: null
  });

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrder().subscribe({
      next: (res) => {
        this.orders.set({
          loading: false,
          data: res,
          error: null
        });
      },
      error: (err) => {
        this.orders.set({
          loading: false,
          data: null,
          error: err.getMessage('Failed to load orders')
        })
      }
    });
  }

}
