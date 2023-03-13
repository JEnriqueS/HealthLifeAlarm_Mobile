import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Crear_cuentaComponent } from './crear_cuenta.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [Crear_cuentaComponent],
  exports: [Crear_cuentaComponent]
})
export class Crear_cuentaModule { }
