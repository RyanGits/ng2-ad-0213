import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { FallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  FallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
