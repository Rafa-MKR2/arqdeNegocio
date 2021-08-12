import { ClientesComponent } from './clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';

const routes: Routes = [
{
    path: '',
    component: ClientesComponent,

},
{
  path: 'cadastro-cliente',
  component: CadastroClienteComponent,

},

{
path: 'lista-clientes',
component: ListaClienteComponent,

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
