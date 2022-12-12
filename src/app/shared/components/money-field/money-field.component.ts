import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FieldComponent } from '../field.component';

@Component({
  selector: 'app-money-field',
  templateUrl: './money-field.component.html',
  styleUrls: ['./money-field.component.scss']
})
export class MoneyFieldComponent extends FieldComponent{

  @Input()
  public label: string;

  public constructor(
    ngControl: NgControl
  ) {
    super(ngControl);
  }

}
