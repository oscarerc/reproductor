import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '@shared/components/sidebar/sidebar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  // {
  //   path:'dashboard',//como tenemos la raiz aqui y en el routing se carga primero= http://localhost:4200/home/dashboard
  //  //path:':username' asi mandamos parametros
  //   component:HomepageComponent
  // }
  // como creamos otro rouyter aqui llamamos los modulos que se vana renderizar
{
  path:'tracks',
  loadChildren:()=>import('@modules/tracks/tracks.module').then(m=>m.TracksModule)
},
{
  path:'favorites',
  loadChildren:()=>import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
},
{
  path:'history',
  loadChildren:()=>import('@modules/history/history.module').then(m=>m.HistoryModule)
},
{
  path: '**',//TODO 404 cuando no existe la ruta
  redirectTo: '/tracks'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
