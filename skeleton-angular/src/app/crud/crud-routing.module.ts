
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CrudComponent } from './crud.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { ListComponent } from './pages/list-course/list.component';

const routes:Routes = [
    {
      path: '',
      component:CrudComponent,
      children:[
    {  path:"courses",component:ListComponent},
              {  path:"add",component:AddCourseComponent},

      {path:'**',component:ListComponent}

      ]


  }

]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CrudRoutingModule { }
