import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent),
  },
  // signup route
];