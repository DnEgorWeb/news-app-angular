import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { FeedItem } from './feed.model';
import { FeedService } from './feed.service';
import { Subscription, catchError, of, tap, throwError } from 'rxjs';
import { ApiError, ApiErrorType } from 'src/app/common/services/api/api-response';
import { LoadingIndicator } from 'src/app/common/components/loading-indicator/loading-indicator.component';
import { FeedComponent } from './feed.component'
import { FeedApiService } from '../../services/feed-api.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, NgFor, LoadingIndicator, FeedComponent],
  providers: [FeedService, FeedApiService],
  templateUrl: './feed.container.html',
})
export class FeedContainer implements OnInit, OnDestroy {
  private feedSubscription: Subscription | null = null
  list: FeedItem[] = []
  loading: boolean = false
  loadError: string | null = null

  constructor(private feedService: FeedService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true
    this.feedSubscription = this.feedService
      .loadFeed()
      .pipe(
        catchError(err => {
          if (err instanceof ApiError && err.type === ApiErrorType.Connection) {
            this.loadError = err.message
            return of([])
          }
          return throwError(() => err)
        }),
        tap(() => {
          this.loading = false
        }),
      )
      .subscribe(result => {
        this.list = result
      })
  }

  ngOnDestroy(): void {
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe()
    }
  }

  openItem(id: number) {
    this.router.navigate([id], { relativeTo: this.route })
  }
}
