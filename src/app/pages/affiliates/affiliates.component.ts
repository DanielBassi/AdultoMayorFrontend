import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
import { SharedService } from '../../services/shared.service';
import { AffiliateService } from '../../services/affiliate.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent implements OnInit, OnChanges{

  afiliados: IAfiliadoDTO[] = []
  popupVisible: boolean = false
  crud: any = {
    entidad: new IAfiliadoDTO(),
    accion: 'INSERT'
  }

  constructor(private affiliateService: AffiliateService, private sharedService: SharedService, private router: Router) {
    router.events.subscribe(val => { this.listarAfiliados() })
  }

  ngOnInit() {
    this.listarAfiliados();
  }
  ngOnChanges(afiliados:SimpleChanges){
    this.listarAfiliados();
  }
  listarAfiliados() {
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

  editAfiliado(afiliado: IAfiliadoDTO) {
    this.crud = {
      entidad: afiliado,
      accion: 'UPDATE'
    }
    this.router.navigate(['/affiliates/edit', afiliado.id, this.crud.accion])
  }

  detailsAfiliado(afiliado: any) {
    /* console.log(afiliado); */

    this.crud = {
      entidad: afiliado,
      accion: 'VIEW'
    }
    this.router.navigate(['/affiliates/detail', afiliado.id, this.crud.accion])

  }

  printAfiliado(afiliado: any) {
    this.router.navigate(['/reports/FichaTecnica', afiliado.id])
  }

  deleteAfiliado(afiliado: IAfiliadoDTO) {
    Swal.fire({
      title: `¿Estás seguro que deseas eliminar el afiliado (${afiliado.nombre})?`,
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.affiliateService.deleteDeleteAfiliado(afiliado.id).subscribe((res: any) => {
          this.sharedService.notify('Afiliado eliminado exitosamente', 'success')
          this.listarAfiliados();
        })
      }
    })
  }

  reactiveAfiliado(afiliado: IAfiliadoDTO) {
    Swal.fire({
      title: `¿Estás seguro que deseas reactivar el afiliado (${afiliado.nombre})?`,
      showCancelButton: true,
      confirmButtonText: 'Si, reactivar',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.affiliateService.putReactiveAfiliado(afiliado.id).subscribe((res: any) => {
          this.sharedService.notify('Afiliado reactivado exitosamente', 'success')
          this.listarAfiliados();
        })
      }
    })
  }



}
