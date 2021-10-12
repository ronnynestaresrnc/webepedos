import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';

import { ListCoursesComponent } from './pages/list-courses/list-courses.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';




@NgModule({
  declarations: [
    ListCoursesComponent,
    AddCourseComponent
  ],
 
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
