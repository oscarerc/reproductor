import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  // implementamos un constructor para poder acceder al servicio de cookies
  constructor(private vcookieservice: CookieService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.revisarcokkie();
  }

  revisarcokkie(): boolean {
    try {
      // creamos una constante quye revise el token
      const token: boolean = this.vcookieservice.check('token')
      console.log('todo salio bien', token);
      // verificar el token y reenviar a la pagina de auth
      if (token) {
        true
      } else {
        false
        this.router.navigate(['/', '/auth'])
      }
      return token

    } catch (e) {
      console.log('algo sucedio', e)
      return false
    }
  }

}
