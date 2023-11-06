import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/login/login.container').then(mod => mod.LoginContainer),
  },
  // signup route
];