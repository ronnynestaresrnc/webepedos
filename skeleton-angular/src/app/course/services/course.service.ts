import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpServiceBase } from 'src/app/core/services/Http-service-base';
interface Curso {
  id:number,
  title:string
}

@Injectable({
  providedIn: 'root'
})
export class CourseService extends HttpServiceBase<Curso> {

   constructor(protected httpClient: HttpClient ) { 
    super(httpClient);
  }
  
  getResourceUrl(): string {
    return 'posts';
  }
}
