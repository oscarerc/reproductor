import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';
import { SessionGuard } from './guards/session.guard';

// rutas padre router outlet

const routes: Routes = [
  // aqui estan los modulos mayopres los que pueden destruir
  {
    path:'auth',
    loadChildren: ()=>import(`../app/modules/auth/auth.module`).then(m=>m.AuthModule)
  },
  {
    // este es el que va a hacer referencia a nivel de raiz
    path:'',
    component: HomepageComponent,
    loadChildren: ()=>import(`../app/modules/home/home.module`).then(m=>m.HomeModule),
    // guard que contiene guardianes
    canActivate:[SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
