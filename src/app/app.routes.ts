import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./component/home/home').then((m) => m.Home)
  },

  {
    path: 'product',
    loadComponent: () => import('./component/product/product.component').then((m) => m.ProductComponent)
  },

  {
    path: 'order',
    loadComponent: () => import('./component/order/order').then((m) => m.Order)
  },

  {
    path: 'receipt',
    loadComponent: () => import('./component/receipt/receipt').then((m) => m.Receipt)
  },

];
