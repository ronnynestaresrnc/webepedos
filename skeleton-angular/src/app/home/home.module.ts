import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';

import { MasterConsultComponent } from './master-consult/master-consult.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainHomeComponent } from './main-home/main-home.component';



@NgModule({
  declarations: [
    BlogComponent,
    CommunityComponent,
    HomeComponent,
    MasterConsultComponent,
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
    
  ]
})
export class HomeModule { }
