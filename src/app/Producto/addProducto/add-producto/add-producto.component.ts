import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  producto:Producto = new Producto();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("Se Agrego el producto con Exito...!!!");
      this.router.navigate(["listarProducto"]);
    })
  }

}
