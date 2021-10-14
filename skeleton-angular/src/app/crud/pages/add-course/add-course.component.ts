import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
   checkoutForm = this.formBuilder.group({
    nombre: '',
    tutor:'',
    optEspecialidad:"1"


  });
    onSubmit(): void {
    // Process checkout data here

    console.warn('Your order has been submitted', this.checkoutForm.value);
this.checkoutForm.reset({
 nombre:"dime la verdad"
})


  }
  saveCourse():any{
    console.log("dime la verdad");
  }
}
