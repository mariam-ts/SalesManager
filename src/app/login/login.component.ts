import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';
import { validPassword, validEmail} from '../shared/Validators/validators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email, validEmail]);
  password = new FormControl('', [Validators.required, validPassword]);

  constructor(private _authservice: AuthService){}

  signIn(){
    this._authservice.login();

  }
}
