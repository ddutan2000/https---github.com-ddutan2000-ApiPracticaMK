import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos } from 'src/app/Modelo/Pedido';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  pedido:Pedidos=new Pedidos();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createPedido(this.pedido)
    .subscribe(data=>{
      alert("Se Agrego el pedido con Exito...!!!");
      this.router.navigate(["listarPedido"]);
    })
  }

}
