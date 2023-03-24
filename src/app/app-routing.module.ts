import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarActorComponent } from './actualizar-actor/actualizar-actor.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import { RegistrarActorComponent } from './registrar-actor/registrar-actor.component';

const routes: Routes = [
  {path: 'actores', component:ListaActoresComponent},
  {path: '', redirectTo:'actores',pathMatch:'full'},
  {path: 'registrar-actor', component: RegistrarActorComponent},
  {path: 'actualizar-actor/:id', component: ActualizarActorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
