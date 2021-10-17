import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = "https://androidep.herokuapp.com/courses";
    APIA: string = "https://androidep.herokuapp.com/add";

  APIES: string = "https://androidep.herokuapp.com/especialidades"
    APIEC: string = "https://androidep.herokuapp.com/courses/especialidad/"

  constructor(private clientService: HttpClient

  ) { }


  getR() {
    return this.clientService.get(this.API)

  }
    getRE() {
    return this.clientService.get(this.APIES)

  }
  addR(datos: any): Observable<any> {
    return this.clientService.post(this.APIA, datos);

  }
  productosSelect(idcategoria: number){

    return this.clientService.get(this.APIEC+idcategoria)

  }



}
