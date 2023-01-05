import { Component, OnInit } from '@angular/core';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
@Component({
  selector: 'app-detalleAfiliado',
  templateUrl: './detalleAfiliado.component.html',
  styleUrls: ['./detalleAfiliado.component.css']
})
export class DetalleAfiliadoComponent implements OnInit {

  crud: any = {
    entidad: new IAfiliadoDTO(),
    accion: 'INSERT'
  }

  constructor() { }

  ngOnInit() {
  }

  crudEvento(e){
    console.log(e);

  }

}
