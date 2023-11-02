import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from 'src/app/common/services/api/api.service';
import { FeedDto } from '../types/feed-dto';
import { FeedItemDto } from '../types/feed-item-dto'
import { config } from '../../../common/config';

@Injectable()
export class FeedApiService extends ApiService {
  constructor(client: HttpClient) {
    super(client)
  }

  public fetchFeed(): Observable<FeedDto> {
    return this.fetch<FeedDto>(`${config.BASE_URL}/feed`)
  }

  public fetchFeedItem(id: number): Observable<FeedItemDto> {
    return this.fetch<FeedItemDto>(`${config.BASE_URL}/feed/${id}`)
  }
}