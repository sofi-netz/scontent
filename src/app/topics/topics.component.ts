import { Component, OnDestroy, OnInit } from '@angular/core'
import { map, take, takeUntil } from 'rxjs/operators'
import { Topic } from '../shared/types'
import { DataService } from '../core/services/data.service'
import { Subject } from 'rxjs'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit, OnDestroy {
  topics?: Topic[]

  private _destroyed$ = new Subject()

  // @ViewChild('')
  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this._destroyed$),
        map((params) => {
          console.log('IN MAP ')
          if (params.id) {
            console.log('I HAVE ID ' + params.id)
          }
        })
      )
      .subscribe()
    this.data
      .listTopics()
      .pipe(take(1))
      .subscribe((topics) => (this.topics = topics))
  }

  ngOnDestroy() {
    this._destroyed$.next()
    this._destroyed$.unsubscribe()
  }
}
