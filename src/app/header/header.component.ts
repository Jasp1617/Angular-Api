import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
      <li class="nav-item">
          <a routerLink="actores" routerLinkActive="active" class="nav-link">Lista de actores</a>
      </li>
      <li class="nav-item">
          <a routerLink="registrar-actor" routerLinkActive="active" class="nav-link">Añadir Actor</a>
      </li>
  </ul>
</nav>`
})
export class HeaderComponent {

}
