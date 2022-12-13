import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductManagementService } from '@app/shared/store/services/products.service';
import { Subject, tap } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  product = undefined;
  creaateProduct$: Subject<any> = new Subject<any>();

  constructor(private products$: ProductManagementService) { }

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(undefined, [Validators.required]),
    quantity: new FormControl(undefined, [Validators.required]),
  });

  addproduct = this.creaateProduct$
    .pipe(tap((_) => this.products$.addProduct(this.form.getRawValue())))
    .subscribe();

}
