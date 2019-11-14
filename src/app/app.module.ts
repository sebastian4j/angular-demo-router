import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { ParametroComponent } from './parametro/parametro.component';
import { Error404Component } from './error404/error404.component';
import { LocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HashLocationStrategy } from '@angular/common';
import { SubparamComponent } from './subparam/subparam.component';
import { SubparampathComponent } from './subparampath/subparampath.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaUnoComponent,
    RutaDosComponent,
    ParametroComponent,
    Error404Component,
    SubparamComponent,
    SubparampathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy} // para hash location strategy (agrega el #), si se borra queda x defecto sin el #
    , {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
