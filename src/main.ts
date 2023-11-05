import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'

import { AppComponent } from './app/app.component'
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './app/common/http/interceptor';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([requestInterceptor])),
  ],
})
