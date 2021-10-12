
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { StoreComponent } from './pages/store/store.component';

const routes:Routes = [
    { 
      path: '', 
      children:[
      { path:'edit',component:EditComponent},
       { path:'list',component:ListComponent},
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
export class ProductsRoutingModule { }
