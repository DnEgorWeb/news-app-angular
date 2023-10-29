import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { config } from '../config'
import { apiFeedItems } from '../services/api/fixtures'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    switch (req.url) {
      case `${config.BASE_URL}/feed`:
        return new Observable(subscriber => {
          setTimeout(() => {
            subscriber.next(new HttpResponse({
              body: { list: apiFeedItems, page: 1 },
            }))
          }, 1000)
        })
      default:
        return next.handle(req);
    }
  }
}