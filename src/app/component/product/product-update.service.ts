import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductComponent} from './product.component';
import {ProductUpdateInterface} from './product-update.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductUpdateService {

  private apiUrl = 'http://retailapp.test/api/products'

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductUpdateInterface[]> {
    return this.http.get<ProductUpdateInterface[]>(this.apiUrl);
  }
}
