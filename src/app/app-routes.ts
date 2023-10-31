import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', loadChildren: () => import('./modules/feed/feed-routes').then(mod => mod.feedRoutes) },
];