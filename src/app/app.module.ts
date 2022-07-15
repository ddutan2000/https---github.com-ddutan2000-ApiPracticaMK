import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { AddProductoComponent } from './producto/addProducto/add-producto/add-producto.component';
import { EditProdutoComponent } from './producto/editProducto/edit-produto/edit-produto.component';
import { ListarProductoComponent } from './producto/listarProducto/listar-producto/listar-producto.component';
import { AddPedidoComponent } from './Pedido/addPedido/add-pedido/add-pedido.component';
import { EditPedidoComponent } from './Pedido/editPedido/edit-pedido/edit-pedido.component';
import { ListarPedidoComponent } from './Pedido/listarPedido/listar-pedido/listar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddProductoComponent,
    EditProdutoComponent,
    ListarProductoComponent,
    AddPedidoComponent,
    EditPedidoComponent,
    ListarPedidoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
