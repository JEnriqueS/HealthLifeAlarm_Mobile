import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Hamburger_MenuModule } from './hamburger_menu/hamburger_menu.module';
import { LoginModule } from './login/login.module';
import { RecuperarClaveModule } from './recuperarClave/recuperarClave.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Hamburger_MenuModule,
    LoginModule,
    RecuperarClaveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
