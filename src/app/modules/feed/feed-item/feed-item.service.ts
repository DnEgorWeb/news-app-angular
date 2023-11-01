import { Observable, first, map } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiService } from 'src/app/common/services/api/api.service';
import { FeedItem } from './feed-item.model';

@Injectable()
export class FeedItemService {
  constructor(private apiService: ApiService) { }

  public loadFeedItem(id: number): Observable<FeedItem> {
    return this.apiService
      .fetchFeedItem(id)
      .pipe(
        first(),
        map(feedItemDTO => ({
          id: feedItemDTO.id,
          title: feedItemDTO.title,
          author: feedItemDTO.author,
          authorImgURL: feedItemDTO.author_url,
          description: feedItemDTO.description,
          content: feedItemDTO.content,
          date: new Date(feedItemDTO.date),
          comments: feedItemDTO.comments.map(commentDTO => ({
            id: commentDTO.id,
            author: commentDTO.author,
            authorImgURL: commentDTO.author_url,
            content: commentDTO.content,
            date: new Date(commentDTO.date),
          }))
        })),
      )
  }
}