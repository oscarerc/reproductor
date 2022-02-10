
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  sessionError:boolean= false;
  formLogin: FormGroup = new FormGroup({});
  constructor(private _authService:AuthService, private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(

      {
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(13)
        ])
      }
    )
  }

  sendLogin():void{
    const {email,password} =this.formLogin.value
    this._authService.sendCredentials(email,password)
    .subscribe(response =>{
      //dentra cuando el usuario ingresa sus credenciales correctas
      //codigo 200 a 400
      //guardar token del lado del componente
      console.log('session iniciada correctamente',response);
      const {tokenSession,data}= response
      this.cookie.set("token",tokenSession,4,'/') //agregamos el cookie
      this.router.navigate(['/','tracks'])
      
    },
    //400 = o >
    err =>{
      this.sessionError=true;
      console.log('la session no se pudo iniciar  error: ',err)
    })
  }

}
