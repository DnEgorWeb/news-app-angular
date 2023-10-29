import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';

import { FeedDto } from './types/feed-dto';
import { ApiError, ApiErrorType } from './types/api-response';
import { config } from '../../config';

@Injectable()
export class ApiService {
  constructor(private client: HttpClient) {}

  public fetchFeed(): Observable<FeedDto> {
    return this.client
      .get<FeedDto>(`${config.BASE_URL}/feed`)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    let errorType: ApiErrorType
    if (error.status === 0) {
      errorType = ApiErrorType.Connection
    } else if (error.status === 401 || error.status === 403) {
      errorType = ApiErrorType.Auth
    } else if (error.status === 404) {
      errorType = ApiErrorType.NotFound
    } else if (error.status > 403 && error.status < 500) {
      errorType = ApiErrorType.Client
    } else {
      errorType = ApiErrorType.Server
    }
    setTimeout(() => {
      console.log(errorType)
    }, 0)
    return throwError(() => new ApiError(error.message, errorType))
  }
}