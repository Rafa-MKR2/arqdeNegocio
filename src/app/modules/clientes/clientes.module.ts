import { ClientesComponent } from './clientes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientesRoutingModule } from './clientes-routing.module';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDataTemplate } from 'src/app/components/alerts/alert-dialog/alert-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    CadastroClienteComponent,
    ListaClienteComponent,
    ClientesComponent,
    DialogDataTemplate
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ClientesRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule
  ]

})
export class ClientesModule { }
