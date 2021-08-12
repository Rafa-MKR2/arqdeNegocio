import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./modules/signin/signin.module').then((m) => m.SigninModule),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./modules/clientes/clientes.module').then((m) => m.ClientesModule),
  },
  {
    path: 'projetos',
    loadChildren: () =>
      import('./modules/projetos/projetos.module').then((m) => m.ProjetosModule),
  },
  {
    path: 'brifing',
    loadChildren: () =>
      import('./modules/briefing/briefing.module').then((m) => m.BriefingModule),
  }
  ,
  {
    path: '**',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

