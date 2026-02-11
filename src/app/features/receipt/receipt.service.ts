import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReceiptInterface} from './receipt.interface';

@Injectable({
  providedIn: 'root',
})

export class ReceiptService {

  private apiUrl = 'http://retailapp.test/api/receipts';

  constructor(private http: HttpClient) {
  }

  getReceipts(): Observable<ReceiptInterface[]>{
    return this.http.get<ReceiptInterface[]>(this.apiUrl);
  }

}
