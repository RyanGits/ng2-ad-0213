import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  FallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
