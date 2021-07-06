import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppMaterialModule } from './app-material.module'
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard'
import { BaseUrlService } from './interceptors/base-url.service'

// This module should me loaded only once.
// It exports and declares "singleton" like entities: used or created only once
//  and used mostly through the entire application

@NgModule({
  declarations: [],
  imports: [CommonModule, AppMaterialModule, HttpClientModule],
  exports: [AppMaterialModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlService, multi: true },
    { provide: 'Window', useFactory: () => window },
  ], // these should be singleton
})
export class AppCoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: AppCoreModule) {
    super(parentModule)
  }
}
