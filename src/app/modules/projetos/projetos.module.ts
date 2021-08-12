import { ProjetosComponent } from './projetos.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { CadastroProjetosComponent } from './cadastro-projetos/cadastro-projetos.component';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListaProjetosComponent,
    CadastroProjetosComponent,
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjetosRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule
  ]

})
export class ProjetosModule { }
