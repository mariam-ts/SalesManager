import { Component, OnInit } from '@angular/core';
import { currency } from '@app/shared/models/currency';
import { IAppstate } from '@app/shared/store/app.state';
import { ProductManagementService } from '@app/shared/store/services/products.service';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, tap } from 'rxjs';
import { data } from './data';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  data$: Observable<Product[]>;
  buy$: Subject<Product> = new Subject<Product>();

  constructor(private products$: ProductManagementService, private store: Store<IAppstate>) {
    this.data$ = store.pipe(select('products'))
  }

  ngOnInit(): void {
    this.products$.updateProductStore(data);
  }

  boughtProduct$ = this.buy$
    .pipe(tap((p) => this.products$.buyProduct(p)))
    .subscribe();

  currency = currency;
  displayedColumns = [
    "id",
    "name",
    "quantity",
    "price",
    "action"
  ]
}
