import { NgModule, Optional, SkipSelf } from '@angular/core'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard'

const MAT_MODULES = [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule]

@NgModule({
  declarations: [],
  imports: MAT_MODULES,
  exports: MAT_MODULES,
})
export class AppMaterialModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that ModalModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: AppMaterialModule) {
    super(parentModule)
  }
}
