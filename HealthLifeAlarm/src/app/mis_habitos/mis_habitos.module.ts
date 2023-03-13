import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mis_habitosComponent } from './mis_habitos.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module';

const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    uiModules,
    AppRoutingModule
  ],
  declarations: [Mis_habitosComponent],
  exports: [Mis_habitosComponent, uiModules]
})
export class Mis_habitosModule { }

