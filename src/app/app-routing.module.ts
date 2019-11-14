import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { ParametroComponent } from './parametro/parametro.component';
import { Error404Component } from './error404/error404.component';
import { SubparamComponent } from './subparam/subparam.component';
import { SubparampathComponent } from './subparampath/subparampath.component';

// queryParams no se configuran, no son del alcance de una ruta en particular
const routes: Routes = [
  {path: 'uno', component: RutaUnoComponent},
  {path: 'dos', component: RutaDosComponent},
  {path: 'parametros/:constante/:dinamico', component: ParametroComponent,
children: [
  {path: '', component: SubparamComponent},
  {path: 'path/:id', component: SubparampathComponent}
]},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
