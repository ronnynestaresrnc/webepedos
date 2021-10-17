import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    public routers:Router,
    private src:CrudService) { }

  ngOnInit(): void {
  }
   checkoutForm = this.formBuilder.group({
    nombre: '',
    tutor:'',
    idespecialidad:1,
    precio:0,
    valoracion:0,
    duracion:""
  });
    onSubmit(): void {
    // Process checkout data here

     console.warn('Your order has been submitted', this.checkoutForm.value);
     const {idespecialidad} = this.checkoutForm.value
     console.log(idespecialidad)


this.src.addR(this.checkoutForm.value).subscribe()


         this.routers.navigateByUrl("/course/list");


  }

}
