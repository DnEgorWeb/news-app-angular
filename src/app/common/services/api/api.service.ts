import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable, catchError, map, throwError } from 'rxjs';

import { ApiError, ApiErrorType } from './api-response';

export abstract class ApiService {
  constructor(private client: HttpClient) {}

  protected fetch<T>(url: string): Observable<T> {
    return this.client
      .get<T>(url)
      .pipe(catchError(this.handleError))
  }

  protected post(url: string, data: Record<string, unknown> = {}) {
    return this.client.post(url, data).pipe(catchError(this.handleError))
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
    return throwError(() => new ApiError(error.statusText, errorType, error.error))
  }
}