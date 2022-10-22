import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormManualComponent } from './form-manual/form-manual.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormManualComponent],
  exports: [FormManualComponent]
})
export class ComponentsModule { }
