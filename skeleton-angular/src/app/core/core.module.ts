import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [

  ],
  providers:[CourseService],
  imports: [
    CommonModule
  ]
,exports:[


]
})
export class CoreModule { }
