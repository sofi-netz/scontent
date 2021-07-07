import { NgModule } from '@angular/core'
import { AppMaterialModule } from './material.module'
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component'

const APP_COMPONENTS = [ButtonComponent]
@NgModule({
  declarations: APP_COMPONENTS,
  imports: [],
  exports: [CommonModule, AppMaterialModule, APP_COMPONENTS],
})
export class AppSharedModule {}
