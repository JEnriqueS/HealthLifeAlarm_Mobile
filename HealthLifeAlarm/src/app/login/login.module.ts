import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatInputModule} from '@angular/material/input';

const uiModules = [
  MatInputModule
];


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    uiModules
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent, uiModules]
})
export class LoginModule { }
