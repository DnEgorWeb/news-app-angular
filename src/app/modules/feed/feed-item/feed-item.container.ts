import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedItem } from './feed-item.model';
import { Subscription, catchError, finalize, of, tap, throwError } from 'rxjs';
import { FeedItemService } from './feed-item.service';
import { FeedItemComponent } from './feed-item.component';
import { ApiService } from 'src/app/common/services/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiError, ApiErrorType } from 'src/app/common/services/api/types/api-response';

@Component({
  selector: 'app-feed-item-container',
  standalone: true,
  imports: [CommonModule, FeedItemComponent, HttpClientModule],
  providers: [FeedItemService, ApiService],
  templateUrl: './feed-item.container.html',
  styleUrls: ['./feed-item.component.css']
})
export class FeedItemContainer implements OnInit, OnDestroy {
  private feedItemSubscription: Subscription | null = null
  feedItem: FeedItem | null = null
  loading: boolean = false
  loadError: string | null = null

  constructor(private feedItemService: FeedItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (!params['id']) {
        throw new Error('Unexpected null for "feedItemId"')
      }

      this.loading = true
      this.feedItemSubscription = this.feedItemService
        .loadFeedItem(params['id'])
        .pipe(
          catchError(err => {
            if (err instanceof ApiError && err.type === ApiErrorType.Connection) {
              this.loadError = err.message
              return of(null)
            }
            return throwError(() => err)
          }),
          finalize(() => {
            this.loading = false
          }),
        )
        .subscribe(feedItem => {
          this.feedItem = feedItem
        })
    })
  }

  ngOnDestroy(): void {
    if (this.feedItemSubscription) {
      this.feedItemSubscription.unsubscribe()
    }
  }
}
