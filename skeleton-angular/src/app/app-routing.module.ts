import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'products',
    loadChildren: ()=>import('./products/products.module').then(m=>m.ProductsModule)
  },{
    path: 'curso',
    loadChildren: ()=>import('./course/course.module').then(m=>m.CourseModule)
  },

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
