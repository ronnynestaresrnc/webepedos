import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CrudService } from '../../services/crud.service';


@Component({

  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
data:any
constructor(public crudService:CrudService){}

  ngOnInit(): void {
this.crudService.getR().subscribe(res=>{console.log("dime",res)
this.data=res})

  }

}
