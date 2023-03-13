import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmasComponent } from './alarmas/alarmas.component';
import { LoginComponent } from './login/login.component';
import { Mis_habitosComponent } from './mis_habitos/mis_habitos.component';
import { Mi_progresoComponent } from './mi_progreso/mi_progreso.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'mis_habitos',
    component: Mis_habitosComponent,
    pathMatch: 'full'
  },
  {
    path: 'mi_progreso',
    component: Mi_progresoComponent,
    pathMatch: 'full'
  },
  {
    path: 'alarmas',
    component: AlarmasComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
