import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
    constructor(private authService: AuthService, private navCtrl: NavController) {

    }
  canActivate(
    next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isLogged()) {
          return true;
      }
      this.navCtrl.navigateRoot('');
      return false;
  }
}
