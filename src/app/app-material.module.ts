import { NgModule } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

const MAT_MODULES = [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule]

@NgModule({
  declarations: [],
  imports: MAT_MODULES,
  exports: MAT_MODULES,
})
export class AppMaterialModule {}
