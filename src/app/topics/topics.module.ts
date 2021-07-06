import { NgModule } from '@angular/core'
import { TopicAddEditComponent } from './topic-add-edit/topic-add-edit.component'
import { RouterModule, Routes } from '@angular/router'
import { TopicsComponent } from './topics.component'
import { AppSharedModule } from '../shared/shared.module'
import { TopicViewComponent } from './topic-view/topic-view.component'

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    children: [
      { path: 'view/:id', component: TopicViewComponent },
      { path: 'edit/:id', component: TopicAddEditComponent },
      { path: 'add', component: TopicAddEditComponent },
    ],
  },
]

@NgModule({
  declarations: [TopicAddEditComponent, TopicsComponent, TopicViewComponent],
  imports: [RouterModule.forChild(routes), AppSharedModule],
})
export class AppTopicsModule {}
