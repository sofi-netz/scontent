import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subject } from 'rxjs'
import { switchMap, takeUntil } from 'rxjs/operators'
import { Topic } from '../../shared/types'
import { DataService } from '../../core/services/data.service'

@Component({
  selector: 'app-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.scss'],
})
export class TopicViewComponent implements OnInit, OnDestroy {
  topic?: Topic

  private _destroyed$ = new Subject()

  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        takeUntil(this._destroyed$),
        switchMap((params) => this.data.getTopic(params.id))
      )
      .subscribe((topic) => (this.topic = topic))
  }

  ngOnDestroy() {
    this._destroyed$.next()
    this._destroyed$.unsubscribe()
  }
}
