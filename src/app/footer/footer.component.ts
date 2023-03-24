import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="bg-dark text-center text-lg-start text-white mt-5">
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
  </footer>`,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
