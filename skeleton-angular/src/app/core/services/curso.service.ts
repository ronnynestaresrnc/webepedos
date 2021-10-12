import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceBase } from './Http-service-base';

@Injectable({
  providedIn: 'root'
})
export class CursoService  extends HttpServiceBase<any>{

    constructor(protected httpClient: HttpClient ) { 
    super(httpClient);
  }
  
  getResourceUrl(): string {
    return 'posts';
  }
}
