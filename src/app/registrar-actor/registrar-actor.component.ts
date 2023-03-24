import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ActorService from '../actor.service';
import { Actores } from '../lista-actores/actores';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-registrar-actor',
  templateUrl: './registrar-actor.component.html',
  styleUrls: ['./registrar-actor.component.css']
})
export class RegistrarActorComponent implements OnInit {

  actor: Actores = new Actores();
  constructor(private actorServicio:ActorService, private router:Router){}

  ngOnInit(): void {
  }

  /*guardarActor(){
    this.actorServicio.registrarActor(this.actor).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeActores();

    },error => console.log(error));
  }

  irALaListaDeActores(){
    this.router.navigate(['/actores']);
  }
  onSubmit(){
    this.guardarActor();
  }*/

  irALaListaDeActores(){
    this.router.navigate(['/actores']);
    swal.fire('Empleado Registrado',`El Actor ha sido registrado con exito`,`success`);
  }

  addActor(){
    console.log(this.actor);
    this.irALaListaDeActores();
    this.actorServicio.registrarActor(this.actor).subscribe(dato => {console.log(dato);},error => console.log(error));
  }

}
