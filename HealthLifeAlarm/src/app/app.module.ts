import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { RecuperarClaveModule } from './recuperarClave/recuperarClave.module';
import { Mis_habitosModule } from './mis_habitos/mis_habitos.module';

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
    Mis_habitosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
