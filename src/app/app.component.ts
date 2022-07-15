import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  ListarProducto(){
    this.router.navigate(["listarProducto"]);
  }
  NuevoProducto(){
    this.router.navigate(["addProducto"]);
  }
  ListarPedido(){
    this.router.navigate(["listarPedido"]);
  }
  NuevoPedido(){
    this.router.navigate(["addPedido"]);
  }

}
