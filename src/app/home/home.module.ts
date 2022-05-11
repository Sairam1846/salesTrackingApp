import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'daily-sales',
        loadChildren: () =>
          import('./daily-sales/daily-sales.module').then(
            (m) => m.DailySalesPageModule
          ),
      },
      {
        path: 'geography',
        loadChildren: () =>
          import('./geography/geography.module').then(
            (m) => m.GeographyPageModule
          ),
      },
      {
        path: 'channels',
        loadChildren: () =>
          import('./channels/channels.module').then(
            (m) => m.ChannelsPageModule
          ),
      },
      {
        path: 'regions',
        loadChildren: () =>
          import('./regions/regions.module').then((m) => m.RegionsPageModule),
      },
      {
        path: 'sectors',
        loadChildren: () =>
          import('./sectors/sectors.module').then((m) => m.SectorsPageModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: 'sales-dashboard',
        loadChildren: () =>
          import('./sales-dashboard/sales-dashboard.module').then(
            (m) => m.SalesDashboardPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home/sales-dashboard',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
