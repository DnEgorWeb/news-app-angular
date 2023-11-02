import { Route } from '@angular/router';

export const feedRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/feed/feed.container').then(mod => mod.FeedContainer),
  },
  {
    path: ':id',
    loadComponent: () => import('./components/feed-item/feed-item.container').then(mod => mod.FeedItemContainer),
  },
];