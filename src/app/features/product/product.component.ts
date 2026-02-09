import {Component, OnInit, signal} from '@angular/core';
import {ProductService} from './product.service';
import {CommonModule} from '@angular/common';
import {ProductInterface} from './product.interface';
import {State} from '../../shared/interfaces/state';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true
})

export class ProductComponent implements OnInit {

  products = signal<State<ProductInterface[]>>({
    loading: true,
    data: null,
    error: null
  });

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products.set({
          loading: false,
          data: res,
          error: null
        });
      },
      error: (err) => {
        this.products.set({
          loading: false,
          data: null,
          error: err.message ?? 'Failed to load Products'
        })
      }
    });
  }
}
