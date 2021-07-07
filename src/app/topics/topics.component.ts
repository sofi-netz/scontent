import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { take } from 'rxjs/operators'
import { Topic } from '../shared/types'
import { DataService } from '../core/services/data.service'
import { Subject } from 'rxjs'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss'],
})
export class TopicsComponent implements OnInit, OnDestroy {

  topics?: Topic[]
  private _destroyed$ = new Subject()

  constructor(
    private data: DataService,
              private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
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

// TODO FIX: navbar on mobile should not slide but overlay
// TODO FIX extra horizontal scroll?
