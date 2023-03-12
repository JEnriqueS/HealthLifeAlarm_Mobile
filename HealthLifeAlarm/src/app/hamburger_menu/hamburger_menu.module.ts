import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HamburgerMenuComponent } from './hamburger_menu.component';
import { HamburgerToggleDirective } from './HamburgerToggle.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [		HamburgerMenuComponent,
      HamburgerToggleDirective
   ],
  exports: [HamburgerMenuComponent]
})
export class Hamburger_MenuModule { }
