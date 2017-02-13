import { Route } from '@angular/router';

export const FallbackRoute: Route = {
  path: '**', redirectTo: '/', pathMatch: 'full'
};
