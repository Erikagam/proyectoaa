import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ddsubmarca',
  templateUrl: './ddsubmarca.component.html',
  styleUrls: ['./ddsubmarca.component.scss']
})
export class DdsubmarcaComponent {
  @Input() marcas: any  
  constructor() { }
}
