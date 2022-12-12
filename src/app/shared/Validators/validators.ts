import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

var password = 'someth123';
var email = 'tsirekidze.ma@gmail.com';

export function validPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const equal = (control.value === password)
      return equal ? null: {incorrectPass: {value: control.value}} ;
    };
  }

  export function validEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const equal = (control.value === email)
      return equal ? null: {incorrectEmail: {value: control.value}} ;
    };
  }

