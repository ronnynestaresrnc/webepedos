import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MasterConsultComponent } from './master-consult/master-consult.component';

const routes:Routes = [
    { 
      path: '', 
      component:HomeComponent,
      children:[
      { path:'master-consult',component:MasterConsultComponent},
      { path:'blog',component:BlogComponent},
      {path:'**',component:MainHomeComponent}
      
   
    
    ]
  },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
