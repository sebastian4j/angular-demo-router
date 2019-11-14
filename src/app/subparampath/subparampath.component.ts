import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-subparampath',
  templateUrl: './subparampath.component.html',
  styleUrls: ['./subparampath.component.css']
})
export class SubparampathComponent implements OnInit {
  pathId: string;
  constructor(route: ActivatedRoute) { 
    route.paramMap.subscribe(p => this.pathId = p.get('id'));
  }

  ngOnInit() {
  }

}
