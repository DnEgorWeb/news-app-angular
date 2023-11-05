import { HttpRequest, HttpResponse, HttpInterceptorFn, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { config } from '../config'
import { apiFeedItems, apiFeedItem } from '../services/api/fixtures'

export const requestInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    if (req.url === `${config.BASE_URL}/login`) {
      return new Observable(subscriber => {
        setTimeout(() => {
          const payload = req.body as Record<string, unknown>
          if (payload['email'] === 'super@admin.com' && payload['password'] === 'Password') {
            subscriber.next(new HttpResponse({
              status: 200,
              body: {},
            }))
          } else {
            subscriber.error(new HttpErrorResponse({
              statusText: 'Invalid credentials',
              status: 422,
              error: {
                email: 'The account is not found or password does not match',
              }
            }))
          }
        }, 1000)
      })
    } else if (req.url === `${config.BASE_URL}/logout`) {
      return new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next(new HttpResponse({ status: 200 }))
        }, 1000)
      })
    } else if (req.url === `${config.BASE_URL}/feed`) {
      return new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next(new HttpResponse({
            status: 200,
            body: { list: apiFeedItems, page: 1 },
          }))
        }, 1000)
      })
    } else if (req.url.includes(`${config.BASE_URL}/feed/`)) {
      return new Observable(subscriber => {
        setTimeout(() => {
          subscriber.next(new HttpResponse({
            status: 200,
            body: apiFeedItem,
          }))
        }, 1000)
      })
    } else {
      return next(req);
    }
}