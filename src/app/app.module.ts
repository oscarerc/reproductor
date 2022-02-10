import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectTokenInterceptor } from './core/interceptors/inject-token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //solo se importan modulos
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:InjectTokenInterceptor,
    //pro si llegamos a usar varios intereptores
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
