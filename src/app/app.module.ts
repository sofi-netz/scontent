import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppCoreModule } from './core/core.module'
import { AppSharedModule } from './shared/shared.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppCoreModule, AppRoutingModule, AppSharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
