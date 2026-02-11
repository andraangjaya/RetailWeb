import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home)
  },

  {
    path: 'product',
    loadComponent: () => import('./features/product/product.component').then((m) => m.ProductComponent)
  },

  {
    path: 'order',
    loadComponent: () => import('./features/order/order.component').then((m) => m.OrderComponent)
  },

  {
    path: 'receipt',
    loadComponent: () => import('./features/receipt/receipt.component').then((m) => m.ReceiptComponent)
  },

  {
    path: 'customer',
    loadComponent: () => import('./features/customer/customer.component').then((m) => m.CustomerComponent)
  },

];
