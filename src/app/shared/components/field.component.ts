import { ControlValueAccessor, NgControl, NgModel } from '@angular/forms';
import { AfterViewInit, Directive, ViewChild } from '@angular/core';

@Directive()
export abstract class FieldComponent implements AfterViewInit, ControlValueAccessor {
    public value: any;

    public disabled: boolean;

    @ViewChild(NgModel)
    public ngModel: NgModel;

    protected constructor(
        public ngControl: NgControl
    ) {
        ngControl.valueAccessor = this;
    }

    public ngAfterViewInit(): void {
        this.bindNgModelToNgControl();
    }

    protected bindNgModelToNgControl(): void {
        if (!this.ngModel) {
            return;
        }

        const validator = this.ngControl.control?.validator;
        this.ngControl.control?.setValidators(control => this.ngModel.control.errors || (validator ? validator(control) : null));
    }

    protected propagateChange = (_: any) => {
    }

    protected propagateTouched = (_: any) => {
    }

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    public writeValue(obj: any): void {
        this.value = obj;
    }

    public change(value: any): void {
        this.value = value;
        this.propagateChange(value);
    }

    public blur(): void {
        this.propagateTouched(this);
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
