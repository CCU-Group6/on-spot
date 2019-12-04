import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WebService } from '../../services/web.service';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private webService: WebService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.headers.get('noauth')) {
      return next.handle(req.clone());
    }
    else {
      //console.log(this.webService.getToken());
      const clonereq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + this.webService.getToken())
      } );
      return next.handle(clonereq).pipe(
        tap(
          event => { },
          err => {
            if (err.error.auth == false) {
              this.router.navigateByUrl('/login');
            }
          }
        )
      )
    }
  }
}
