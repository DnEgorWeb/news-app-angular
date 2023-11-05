import { Route } from '@angular/router';
import { canActivate } from './modules/auth/guards/auth.guard';
import { AuthService } from './modules/auth/services/auth.service';
import { AuthApiService } from './modules/auth/services/auth-api.service';
import { LocalStorageService } from './common/services/storage/local-storage.service';
import { WrapperComponent } from './modules/feed/components/wrapper/wrapper.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then(mod => mod.authRoutes),
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full',
  },
  {
    path: 'feed',
    component: WrapperComponent,
    loadChildren: () => import('./modules/feed/feed.routes').then(mod => mod.feedRoutes),
    canActivate: [canActivate],
    providers: [AuthService, AuthApiService, LocalStorageService]
  },
];