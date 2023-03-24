import  swal  from 'sweetalert2';
import { Component } from '@angular/core';
import ActorService from '../actor.service';
import { Actores } from './actores';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent {
  pageActual:number=1;
  actores:Actores[];

  constructor(private actorServicio:ActorService, private router:Router){}

  ngOnInit():void {
    this.obtenerActores();
  }

  actualizarActor(id:number){
    this.router.navigate(['actualizar-actor',id]);
  }

  eliminarActor(id:number){
      Swal.fire({
        title: '¿Estás seguro de elimnarlo?',
        text: 'Confirma si deseas eliminar al Actor',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminalo!',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
      if(result.value){
        this.actorServicio.eliminarActor(id).subscribe(dato => {
        console.log(dato);
        this.obtenerActores();
      });
      }
    })
  }

  private obtenerActores(){
    this.actorServicio.obtenerListadoDeActores().subscribe(dato => {
      this.actores = dato;
    });
  }
}
