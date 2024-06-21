import { Routes } from '@angular/router';
import { TabPage } from './tab.page';

export const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: '',
        redirectTo: '/tab/home',
        pathMatch: 'full',
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./wishlist/wishlist.page').then((m) => m.WishlistPage),
      },
      {
        path: 'chat',
        loadComponent: () => import('./chat/chat.page').then((m) => m.ChatPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account/account.page').then((m) => m.AccountPage),
      },
    ],
  },
];
