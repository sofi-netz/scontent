import { NgModule } from '@angular/core'
import { TopicAddEditComponent } from './topic-add-edit/topic-add-edit.component'
import { RouterModule, Routes } from '@angular/router'
import { TopicsComponent } from './topics.component'
import { AppSharedModule } from '../shared/shared.module'
import { TopicViewComponent } from './topic-view/topic-view.component';
import { RequirementCardComponent } from './requirement-card/requirement-card.component';
import { StatusIconComponent } from './status-icon/status-icon.component'

const routes: Routes = [
  {
    path: '',
    component: TopicsComponent,
    children: [
      { path: ':id', component: TopicViewComponent },
      { path: ':id/edit', component: TopicAddEditComponent },
      { path: 'add', component: TopicAddEditComponent },
    ],
  },
]

@NgModule({
  declarations: [TopicAddEditComponent, TopicsComponent, TopicViewComponent, RequirementCardComponent, StatusIconComponent],
  imports: [RouterModule.forChild(routes), AppSharedModule],
})
export class AppTopicsModule {}
