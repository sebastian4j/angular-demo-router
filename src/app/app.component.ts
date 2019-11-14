import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paramEstatico = 10;
  paramDinamico = 20;
  title = 'demo-router';
  queries = {tipo:'abc', otro: 'qwerty'};
  constructor(private router:Router) {}

  navegarCompDos() {
    this.router.navigate(["/dos"]);
  }
  navegarCompUno() {
    this.router.navigate(["/uno"]);
  }
  navegarCompParametros() {
    this.router.navigate(["/parametros"], {skipLocationChange: true, queryParams: {tipo: 'def'}});
  }

}
