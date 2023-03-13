import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarClaveComponent } from './recuperarClave.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [RecuperarClaveComponent],
  exports: [RecuperarClaveComponent]
})
export class RecuperarClaveModule { }
