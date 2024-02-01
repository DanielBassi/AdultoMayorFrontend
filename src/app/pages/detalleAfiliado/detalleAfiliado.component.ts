import { Component, OnInit} from '@angular/core';
import { IAfiliadoDTO } from '../../models/IAfiliadoDTO';
import { Router, ActivatedRoute, Params} from '@angular/router';
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
  id: string
  metodo: string;

  constructor(private router:Router, private affiliateService:AffiliateService, private sharedService:SharedService, private rutaActiva:ActivatedRoute ) {
  }

  ngOnInit() {
    this.id=this.rutaActiva.snapshot.paramMap.get('id')
    this.metodo=this.rutaActiva.snapshot.paramMap.get('metodo')
    if(this.id!=null){
      this.affiliateService.getInfoAfiliado(this.id).subscribe(res=>{
        this.crud.entidad=res
      })
      this.crud.accion=this.metodo
    }
  }

  recivedData(e){
    switch (this.crud.accion) {
      case 'INSERT':
        this.affiliateService.postInsertAfiliado(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Afiliado creado exitosamente', 'success')
          this.router.navigate(['/affiliates']);
        })
      break;

      case 'UPDATE':
        this.affiliateService.putEditAfiliado(this.crud.entidad).subscribe(res=> {
          this.sharedService.notify('Afiliado actualizado exitosamente', 'success')
          this.router.navigate(['/affiliates']);
        })
      break;
    }
  }
}
