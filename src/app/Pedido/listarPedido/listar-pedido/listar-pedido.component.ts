import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedidos } from 'src/app/Modelo/Pedido';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {

  pedidos:Pedidos[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getPedidos()
    .subscribe(data => {
      this.pedidos = data;
    });
  }
  Editar(pedido:Pedidos):void{
    localStorage.setItem("id",pedido.codigo.toString());
    this.router.navigate(["editPedido"]);
  }

  Delete(pedido:Pedidos){
    this.service.deletePedido(pedido)
    .subscribe(data=>{
      this.pedidos=this.pedidos.filter(p=>p!==pedido);
      alert("Pedido eliminado...");
    })
  }

}
