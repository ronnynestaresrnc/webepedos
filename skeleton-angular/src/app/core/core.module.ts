import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpServiceBase } from './services/Http-service-base';
import { CursoService } from './services/curso.service';



@NgModule({
  declarations: [],
  providers:[CursoService],
  imports: [
    CommonModule
  ]
,exports:[]
})
export class CoreModule { }
