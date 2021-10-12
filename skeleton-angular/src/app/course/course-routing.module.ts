import { NgModule } from '@angular/core';

import {  RouterModule, Routes } from '@angular/router';



import { AddCourseComponent } from './pages/add-course/add-course.component';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';


const routes:Routes = [
    { 
      path: '', 
      children:[
      { path:'list-courses',component:ListCoursesComponent},
      {path:'add-course',component:AddCourseComponent},
      {path:'**',redirectTo:'list-courses'}
    ]
  },
  
]

@NgModule({
  imports: [
 RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CourseRoutingModule { }
