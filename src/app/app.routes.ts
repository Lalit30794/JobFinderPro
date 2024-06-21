import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full',
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.routes').then((m) => m.routes),
  },
];
