import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './app/common/http/interceptor';

bootstrapApplication(AppComponent, {
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
})
