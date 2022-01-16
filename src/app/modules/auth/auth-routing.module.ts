import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path:'loguin', //localhost:4200/auth/loguin
    component:AuthPageComponent
  },
  // redireccionar cuando una ruta no existe
  {
    path:'**', //hace referencia a cuando no esiste una ruta
    redirectTo:'auth/loguin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
