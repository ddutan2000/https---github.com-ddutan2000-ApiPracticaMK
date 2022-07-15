import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Producto } from '../Modelo/Producto';
import { Pedidos } from '../Modelo/Pedido';

@Injectable()
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  //UrlPaul='http://34.230.85.161:8080/usuario';
  //Urlanahi='http://34.230.85.161:8080/usuario';
  //UrlDenys='http://34.230.85.161:8080/usuario';
  Url='http://localhost:8080/usuario';

  //cliente
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }

  //producto
  getProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }
  getProductoId(id:String){
    return this.http.get<Producto>(this.Url+"/"+id);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.codigo,producto);
  }
  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.codigo);
  }

  //pedido
  getPedidos(){
    return this.http.get<Pedidos[]>(this.Url);
  }
  createPedido(pedido:Pedidos){
    return this.http.post<Pedidos>(this.Url,pedido);
  }
  getPedidoId(id:String){
    return this.http.get<Pedidos>(this.Url+"/"+id);
  }
  updatePedido(pedido:Pedidos){
    return this.http.put<Pedidos>(this.Url+"/"+pedido.codigo,pedido);
  }
  deletePedido(pedido:Pedidos){
    return this.http.delete<Pedidos>(this.Url+"/"+pedido.codigo);
  }
}
