import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    if(sessionStorage.getItem('user_type') === 'admin'){
        return true;
    }
    else{
        this.router.navigate(['/home']);
        return false;
    }
  }
}