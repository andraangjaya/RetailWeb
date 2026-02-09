import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerInterface} from './customer.interface';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CustomerService {

  private apiUrl = 'http://retailapp.test/api/customers';

  constructor(private http: HttpClient) {
  }

  getCustomer(): Observable<CustomerInterface[]>{
    return this.http.get<CustomerInterface[]>(this.apiUrl);
  }



}
