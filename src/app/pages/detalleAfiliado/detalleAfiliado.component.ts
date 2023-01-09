import { Component, OnInit } from '@angular/core';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
import { Router } from '@angular/router';
import { AffiliateService } from '../../services/affiliate.service';
import { SharedService } from '../../services/shared.service';
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

  constructor(private router:Router, private affiliateService:AffiliateService, private sharedService:SharedService) { }

  ngOnInit() {
  }

  crudEvento(e){


    switch (this.crud.accion) {
      case 'INSERT':
        this.affiliateService.postInsertAfiliado(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Afiliado creado exitosamente', 'success')

        })
      break;

      /* case 'UPDATE':
        this.servicesService.putUpdateServices(crud.servicio).subscribe(res=> {
          this.servicesService.notify('Servicio actualizado exitosamente', 'success')
          this.listarServicios()
          this.servicesService.setLoadingVisible(false)
        })
      break; */
    }
    console.log(e);
    this.router.navigate(['/dashboard/affiliates']);
  }

}
