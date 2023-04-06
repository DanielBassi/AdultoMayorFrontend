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
import { IProgramaDTO } from 'src/app/models/IProgramaDTO';

@Component({
  selector: 'app-form-manual',
  templateUrl: './form-manual.component.html',
  styleUrls: ['./form-manual.component.css']
})
export class FormManualComponent implements OnInit {

  @Input() programa: IProgramaDTO;
  @Output() manualEvent: EventEmitter<IManualDTO> = new EventEmitter<IManualDTO>();

  constructor() { }

  ngOnInit() {
  }

  onUploadedFormatASQ = async (e: File) => {
    debugger
    const reader = new FileReader();
    let base64Data;
    reader.onloadend = () => {
      base64Data = reader.result

      this.manualEvent.emit({
          nombre: e.name,
          tipo: e.type,
          base64: reader.result,
        },
      );
    };

    reader.readAsDataURL(e);
  };

}

