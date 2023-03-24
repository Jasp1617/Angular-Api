import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarActorComponent } from './registrar-actor/registrar-actor.component';
import { FormsModule } from '@angular/forms';
import { ActualizarActorComponent } from './actualizar-actor/actualizar-actor.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaActoresComponent,
    RegistrarActorComponent,
    ActualizarActorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
