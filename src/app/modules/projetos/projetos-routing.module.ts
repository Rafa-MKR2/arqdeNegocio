import { ProjetosComponent } from './projetos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProjetosComponent } from './cadastro-projetos/cadastro-projetos.component';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';

const routes: Routes = [
{
    path: '',
    component: ProjetosComponent,

},
{
  path: 'cadastro-projetos',
  component: CadastroProjetosComponent,

},

{
  path: 'lista-projetos',
  component: ListaProjetosComponent,

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
