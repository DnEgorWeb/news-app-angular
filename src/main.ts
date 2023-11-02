import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'

import { AppComponent } from './app/app.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './app/common/http/interceptor';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    provideRouter(appRoutes)
  ],
})
