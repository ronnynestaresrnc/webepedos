
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { ListComponent } from './pages/list-course/list.component';

const routes:Routes = [
    { 
      path: '',
      component:CrudComponent,
      children:[
       { path:'list',component:ListComponent},
       {path:'add',component:AddCourseComponent},
       {path:'**',redirectTo:'list'}
    ]
  },
  
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CrudRoutingModule { }
