import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListComponent } from './pages/list-course/list.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { CrudComponent } from './crud.component';




@NgModule({
  declarations: [

    ListComponent,
    AddCourseComponent,
    CrudComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CrudRoutingModule
  ],
  exports:[  FormsModule,
    ReactiveFormsModule]
})
export class CrudModule { }
