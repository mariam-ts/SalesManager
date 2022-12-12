import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FieldComponent } from '../field.component';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent extends FieldComponent implements OnInit {

  @Input()
  public label: string;

  @Input()
  public type: string;

  @Input()
  public maxlength: number;

  @Input()
  public autocomplete: boolean;

  public constructor(
    ngControl: NgControl
  ) {
    super(ngControl);
  }

  public ngOnInit(): void {
    this.autocomplete = coerceBooleanProperty(this.autocomplete);
  }

}
