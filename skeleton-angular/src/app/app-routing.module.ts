import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path: 'home',loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule)},
    {path: 'course',loadChildren: ()=>import('./crud/crud.module').then(m=>m.CrudModule)},
   // {path:'cursos',loadChildren:()=>import('./course/course.module').then(m=>m.CourseModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
