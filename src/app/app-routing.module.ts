import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/topics' },
  { path: 'topics', loadChildren: () => import('./topics/topics.module').then((m) => m.AppTopicsModule) },

  // this has to be the last path declarations: catches all undeclared/unknown paths
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
