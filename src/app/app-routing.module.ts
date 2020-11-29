import { Routes, RouterModule } from '@angular/router';
import * as fromComponents from './component';

const routes: Routes = [
  {
    path: 'home',
    component: fromComponents.HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'index.html',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

export const AppRoutes = RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' });

