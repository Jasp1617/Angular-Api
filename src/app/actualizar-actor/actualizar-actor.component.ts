import  swal  from 'sweetalert2';
import { Component } from '@angular/core';
import { Actores } from '../lista-actores/actores';
import ActorService from '../actor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-actor',
  templateUrl: './actualizar-actor.component.html',
  styleUrls: ['./actualizar-actor.component.css']
})
export class ActualizarActorComponent {
  id:number;
  actores:Actores = new Actores();
  constructor(private actorService:ActorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.actorService.obtenerActorPorId(this.id).subscribe(dato =>{
      this.actores = dato;
    },error => console.log(error));
  }

  irAlaListaDeActores(){
    this.router.navigate(['/actores']);
    swal.fire('Empleado actualizado',`El empleado ${this.actores.firstName} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.actorService.actualizarActor(this.id,this.actores).subscribe(dato => {
      this.irAlaListaDeActores();
    },error => console.log(error));
  }
}


