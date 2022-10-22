import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IManualDTO } from '../../models/IManualDTO';
import { dxFileUploaderOptions } from 'devextreme/ui/file_uploader';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-form-manual',
  templateUrl: './form-manual.component.html',
  styleUrls: ['./form-manual.component.css']
})
export class FormManualComponent implements OnInit {
  
  @Input() manuales: IManualDTO[] = [];
  @Output() manualEvent: EventEmitter<IManualDTO[]> = new EventEmitter<
    IManualDTO[]
  >();
 


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(manuales: SimpleChanges) {}


  onUploadedFormatASQ = async (e: File) => {
    const reader = new FileReader();
    let base64Data;
    reader.onloadend = () => {
      base64Data = reader.result

      this.manualEvent.emit([
        ...this.manuales,
        {
          nombre: e.name,
          tipo: e.type,
          base64: reader.result,
        },
      ]);
    };
    reader.readAsDataURL(e);
  };

  quitarRecurso(manualQuitar: any) {
    this.manuales.splice(this.manuales.indexOf(manualQuitar), 1);
    this.manualEvent.emit([...this.manuales]);
  }

}

