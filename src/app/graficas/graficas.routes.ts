import { Routes } from '@angular/router';

export const graficasRoutes: Routes = [
  {
    path: 'barras',
    loadComponent: () => import('./pages/barras/barras').then((m) => m.Barras),
  },
  {
    path: 'barras-doble',
    loadComponent: () => import('./pages/barras-doble/barras-doble').then((m) => m.BarrasDoble),
  },
  {
    path: 'rosco',
    loadComponent: () => import('./pages/rosco/rosco').then((m) => m.Rosco),
  },
  {
    path: 'rosco-http',
    loadComponent: () => import('./pages/rosco-http/rosco-http').then((m) => m.RoscoHttp),
  },
  { path: '', redirectTo: 'barras', pathMatch: 'full' },
];
