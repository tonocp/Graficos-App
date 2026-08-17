import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.routes').then((m) => m.graficasRoutes),
  },
  { path: '', redirectTo: 'graficas', pathMatch: 'full' },
  { path: '**', redirectTo: 'graficas' },
];
