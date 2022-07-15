import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarProductoComponent } from './producto/listarProducto/listar-producto/listar-producto.component';
import { AddProductoComponent } from './producto/addProducto/add-producto/add-producto.component';
import { EditProdutoComponent } from './producto/editProducto/edit-produto/edit-produto.component';
import { ListarPedidoComponent } from './Pedido/listarPedido/listar-pedido/listar-pedido.component';
import { AddPedidoComponent } from './Pedido/addPedido/add-pedido/add-pedido.component';
import { EditPedidoComponent } from './Pedido/editPedido/edit-pedido/edit-pedido.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  {path:'listarProducto', component:ListarProductoComponent},
  {path:'addProducto',component:AddProductoComponent},
  {path:'editProducto',component:EditProdutoComponent},
  {path:'listarPedido', component:ListarPedidoComponent},
  {path:'addPedido',component:AddPedidoComponent},
  {path:'editPedido',component:EditPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
