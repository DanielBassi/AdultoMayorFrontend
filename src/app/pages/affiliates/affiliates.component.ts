import { Component, OnInit } from '@angular/core';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
import { SharedService } from '../../services/shared.service';
import { AffiliateService } from '../../services/affiliate.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent implements OnInit {

  afiliados: IAfiliadoDTO[] = []
  popupVisible: boolean = false
  crud: any = {
    entidad: new IAfiliadoDTO(),
    accion: 'INSERT'
  }

  constructor(private affiliateService: AffiliateService, private sharedService: SharedService) { }

  ngOnInit() {
    this.listarAfiliados();
  }

  private listarAfiliados() {
    this.affiliateService.getListAfiliados().subscribe((response: any) => {
      this.afiliados = response;
    })
  }

  btnCrearAfiliado() {
    this.crud = {
      entidad: new IAfiliadoDTO(),
      accion: 'INSERT'
    }
    this.popupVisible = true
  }

  editAfiliado( afiliado: IAfiliadoDTO ) {
    this.crud = {
      entidad: afiliado,
      accion: 'UPDATE'
    }
    this.popupVisible = true
  }

  detailsAfiliado( afiliado: IAfiliadoDTO ) {
    this.crud = {
      entidad: afiliado,
      accion: 'VIEW'
    }
    this.popupVisible = true
  }

  crudEvento(crud: any) {
    this.popupVisible = false
    switch (crud.accion) {
      case 'INSERT':
        this.affiliateService.postInsertAfiliado(crud.entidad).subscribe(res=> {
          this.sharedService.notify('Afiliado creado exitosamente', 'success')
          this.listarAfiliados()
        })
      break;

      case 'UPDATE':
        this.affiliateService.putEditAfiliado(crud.entidad).subscribe(res=> {
          this.sharedService.notify('Afiliado actualizado exitosamente', 'success')
          this.listarAfiliados()
        })
      break;
    }
  }

  deleteServicio( afiliado: IAfiliadoDTO ) {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar el afiliado (${afiliado.nombre})?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.affiliateService.deleteDeleteAfiliado(afiliado.id).subscribe((res: any) => {
          this.sharedService.notify('Servicio eliminado exitosamente', 'success')
          this.listarAfiliados();
        })
      }
    })
  }

}