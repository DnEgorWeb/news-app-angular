import { Route } from '@angular/router';

export const feedRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./feed/feed.container').then(mod => mod.FeedContainer),
  },
  {
    path: ':id',
    loadComponent: () => import('./feed-item/feed-item.component').then(mod => mod.FeedItemComponent),
  },
];