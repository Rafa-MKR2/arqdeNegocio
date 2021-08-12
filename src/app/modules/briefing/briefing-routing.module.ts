import { BriefingComponent } from './briefing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarBriefingComponent } from './listar-briefing/listarbriefing.component';
import { EnviarBriefingComponent } from './enviar-briefing/enviar-briefing.component';
import { CriarFormularioComponent } from './criar-formulario/criar-formulario.component';


const routes: Routes = [
{
    path: '',
    component: BriefingComponent,

},
{
  path: 'listar-briefing',
  component: ListarBriefingComponent,

},

{
path: 'envia-briefing',
component: EnviarBriefingComponent,

},

{
  path: 'cria-formulario',
  component: CriarFormularioComponent,

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BriefingRoutingModule { }
