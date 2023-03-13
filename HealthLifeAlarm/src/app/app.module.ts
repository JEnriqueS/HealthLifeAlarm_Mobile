import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RecuperarClaveModule } from './recuperarClave/recuperarClave.module';
import { Mis_habitosModule } from './mis_habitos/mis_habitos.module';
import { Mi_progresoModule } from './mi_progreso/mi_progreso.module';
import { AlarmasModule } from './alarmas/alarmas.module';
import { Eliminar_cuentaModule } from './eliminar_cuenta/eliminar_cuenta.module';
import { Crear_cuentaModule } from './crear_cuenta/crear_cuenta.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RecuperarClaveModule,
    Mis_habitosModule,
    Mi_progresoModule,
    AlarmasModule,
    Eliminar_cuentaModule,
    Crear_cuentaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
