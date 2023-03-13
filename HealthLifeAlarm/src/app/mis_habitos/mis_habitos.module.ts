import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mis_habitosComponent } from './mis_habitos.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from '../app-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';


const uiModules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatChipsModule,
  MatTableModule
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

