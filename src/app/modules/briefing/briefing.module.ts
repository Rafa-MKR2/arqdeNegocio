import { MatDialogModule } from '@angular/material/dialog';
import { BriefingComponent } from './briefing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnviarBriefingComponent } from './enviar-briefing/enviar-briefing.component';
import { CriarFormularioComponent } from './criar-formulario/criar-formulario.component';
import { ListarBriefingComponent } from './listar-briefing/listarbriefing.component';
import { BriefingRoutingModule } from './briefing-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SelectBriefingComponent } from './select-briefing/select-briefing.component';



@NgModule({
  declarations: [
    BriefingComponent,
    EnviarBriefingComponent,
    ListarBriefingComponent,
    CriarFormularioComponent,
    SelectBriefingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BriefingRoutingModule,
    MatDialogModule,
    MatButtonModule


  ]

})
export class BriefingModule { }
