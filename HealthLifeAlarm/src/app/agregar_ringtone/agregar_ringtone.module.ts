import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Agregar_ringtoneComponent } from './agregar_ringtone.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

const uiModules = [
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule
]

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [Agregar_ringtoneComponent],
  exports: [Agregar_ringtoneComponent, uiModules]
})
export class Agregar_ringtoneModule { }
