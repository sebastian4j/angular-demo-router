import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent implements OnInit {
  paramEstatico: string;
  paramDinamico: string;
  tipos: string;
  otros: string;
  constructor(route: ActivatedRoute) {
    // snapshot: los parametros nunca cambian luego de ser leidos
    this.paramEstatico = route.snapshot.paramMap.get('constante');
    // subscribe: cuando cambia la url (al tener el # no actualiza la pagina) cambiará el valor
    route.paramMap.subscribe(params => this.paramDinamico = params.get('dinamico'));
    this.tipos = route.snapshot.queryParamMap.get('tipo');
    route.queryParamMap.subscribe(queries => this.otros = queries.get('otro'));
  }

  ngOnInit() {
  }

}
