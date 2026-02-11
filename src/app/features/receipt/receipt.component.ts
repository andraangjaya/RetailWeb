import {Component, OnInit, signal} from '@angular/core';
import {Navbar} from "../navbar/navbar";
import {ReceiptInterface} from './receipt.interface';
import {State} from '../../shared/interfaces/state';
import {ReceiptService} from './receipt.service';

@Component({
  selector: 'app-receipt',
  imports: [
    Navbar
  ],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css',
})
export class ReceiptComponent implements OnInit {

  receipts = signal<State<ReceiptInterface[]>>({
    loading: true,
    data: null,
    error: null
  });

  constructor(private receiptService: ReceiptService) {
  }

  ngOnInit(): void {
    this.loadReceipts();
  }

  loadReceipts(): void {
    this.receiptService.getReceipts().subscribe({
      next: (res) => {
        this.receipts.set({
          loading: false,
          data: res,
          error: null
        });
      },
      error: (err) => {
        this.receipts.set({
          loading:false,
          data: null,
          error: err.getMessage('Failed to load receipts')
        })
      }
    });
  }
}
