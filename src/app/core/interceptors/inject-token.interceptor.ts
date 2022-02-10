import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {

  constructor(private cokkie:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const token = this.cokkie.get('token')
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders:{
            authorization:`Bearer ${token}`
          }
        }
      )
      
    } catch (e) {
      console.log('opjito error ',e)
      return next.handle(request);
    }
    // console.log('hola este es el resultado ', request)
    // return next.handle(request);
  }
}
