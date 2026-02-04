import {Component, OnInit} from '@angular/core';
import {Navbar} from "../navbar/navbar";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductUpdateService} from './product-update.service';
import {CommonModule} from '@angular/common';
import {ProductUpdateInterface} from './product-update.interface';

@Component({
  selector: 'app-product',
  imports: [
    Navbar,
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true
})

export class ProductComponent implements OnInit {

  products: ProductUpdateInterface[] = [];
  constructor(private productService: ProductUpdateService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        console.log('RES:', res);
        console.log('IS ARRAY?', Array.isArray(res));
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
