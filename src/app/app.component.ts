import { Component , ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
import { DdsubmarcaComponent } from './ddsubmarca/ddsubmarca.component';
import { DdacuraComponent } from './ddacura/ddacura.component';
import {Response} from './interphaces/response'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  as: Response
  title = 'examen';
  readonly api: string ="https://apitestcotizamatico.azurewebsites.net/api/catalogos";
  marcas: Observable<any>
  constructor(private http:HttpClient){
      }
  getmarca( ){
     this.http.post(this.api, {
      NombreCatalogo:"Marca",
      Filtro:"1",
      IdAplication:2
    }).subscribe((data: any)=> {
      let x: Response = data
      let y= JSON.parse(x.CatalogoJsonString)
      let marcas= Object.values(y)
      let c: Array<any>=[]
      marcas.map(value => {
        c.push(value)
      })
      let limpio: Response={
        CatalogoJsonString: c,
        Error: null
      }
      this.as=limpio
    
      return limpio
    })
  }
}
