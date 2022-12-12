import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class AuthService{
  constructor(private _router: Router) {

  }
  private _authenticated = false;

  getAuthStatus(){
    return this._authenticated;
  }

  login(){
    this._authenticated = true;
    this._router.navigateByUrl('/products');
  }
}
