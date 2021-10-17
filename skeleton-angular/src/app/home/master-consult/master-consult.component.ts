import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud/services/crud.service';

@Component({
  selector: 'app-master-consult',
  templateUrl: './master-consult.component.html',
  styleUrls: ['./master-consult.component.css']
})
export class MasterConsultComponent implements OnInit {

  constructor(private ser: CrudService) { }
  data: any
  datag: any
  result: any

  categoriaElegida: any;
  ngOnInit(): void {
    this.ser.getRE().subscribe(res => {
      console.log
      ("sal de aqui pe")
    return  this.data = res
    })

  }
  seleccionar(categoriaSeleccionada: any) {

    this.categoriaElegida = categoriaSeleccionada
    let idcategoria = this.categoriaElegida.id  ;
    this.ser.productosSelect( idcategoria ).subscribe(
      (res:any) =>{

        this.result=res;

      }
    )
  }




}
