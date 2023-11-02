import { first, map } from 'rxjs';
import { Injectable } from '@angular/core';

import { FeedApiService } from '../../services/feed-api.service';

@Injectable()
export class FeedService {
  constructor(private apiService: FeedApiService) {}

  public loadFeed() {
    return this.apiService
      .fetchFeed()
      .pipe(
        first(),
        map(feedDTO => feedDTO.list.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          author: item.author,
          authorImgURL: item.author_url,
          date: new Date(item.date),
        }))),
      )
  }
}