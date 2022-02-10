import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor(private hhtp: HttpClient, private cookie:CookieService) { }

  sendCredentials(email: string, password: string): Observable<any> {
    console.log('', email, password)

    const body = {
      email,
      password
    }
    //+4807994621
    // ENVIAMOS LOS DATOS Y LE DECIMOS A DONDE NOS VAMOS A CONECTAR
    //guardar tokn del lado del servicio
    return this.hhtp.post(`${this.URL}/auth/login`, body)
      .pipe(
        tap((response: any) => {
          const {tokenSession,data}= response
          this.cookie.set("token",tokenSession,4,'/')
        })
      )
  }

}
