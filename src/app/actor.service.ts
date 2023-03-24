import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actores } from './lista-actores/actores';

@Injectable({
  providedIn: 'root'
})
export default class ActorService {
  //url con el listado de actores del backend
  private baseURL = "http://localhost:9090/sakila/actor";

  constructor(private httpClient: HttpClient) {}
  //obtener los actores
  obtenerListadoDeActores():Observable<Actores[]> {
    return this.httpClient.get<Actores[]>(`${this.baseURL}`);
  }
  //registrar un actor
  registrarActor(actor:Actores):Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, actor);
  }
  //actualizar un actor
  actualizarActor(id:number, actor:Actores): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, actor);
  }
  //este metodo sirve para obtener o buscar un empleado
  obtenerActorPorId(id:number):Observable<Actores>{
    return this.httpClient.get<Actores>(`${this.baseURL}/${id}`);
  }
  eliminarActor(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
