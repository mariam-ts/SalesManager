import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  product = undefined;

  constructor(){}

  public form: FormGroup= new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(undefined, [Validators.required]),
    quantity: new FormControl(undefined, [Validators.required]),
  })

}
