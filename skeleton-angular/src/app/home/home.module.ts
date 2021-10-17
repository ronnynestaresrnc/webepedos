import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';

import { MasterConsultComponent } from './master-consult/master-consult.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from '../crud/services/crud.service';



@NgModule({
  declarations: [
    BlogComponent,
    CommunityComponent,
    HomeComponent,
    MasterConsultComponent,
    MainHomeComponent
  ],

providers:[CrudService],
  imports: [
          HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule

  ]
})
export class HomeModule { }
