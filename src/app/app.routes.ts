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
    loadComponent: () => import('./features/order/order').then((m) => m.Order)
  },

  {
    path: 'receipt',
    loadComponent: () => import('./features/receipt/receipt').then((m) => m.Receipt)
  },

];
