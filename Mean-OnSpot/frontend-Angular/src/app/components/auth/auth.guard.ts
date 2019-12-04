import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/router';
import { WebService } from '../../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private webService: WebService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.webService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.webService.deleteToken();
        return false;
      }
      return true;
  }

}
