import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FieldComponent } from '../field.component';

@Component({
  selector: 'app-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent extends FieldComponent {

  @Input()
  public label: string;

  public constructor(
    ngControl: NgControl
  ) {
    super(ngControl);
  }

}
