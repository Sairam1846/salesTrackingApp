import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pages = [
    {
      title: 'Sales Dashboard',
      title1: 'Revenue Snapshot',
      url: '/home/sales-dashboard',
      ionicIcon: 'trending-up-outline',
    },
    {
      title: 'Products',
      title1: 'Revenue by Product',
      url: '/home/products',
      ionicIcon: 'cube-outline',
    },
    {
      title: 'Sectors',
      title1: 'Revenue by Sector',
      url: '/home/sectors',
      ionicIcon: 'business-outline',
    },
    {
      title: 'Regions',
      url: '/home/regions',
      title1: 'Revenue by Region',
      ionicIcon: 'map-outline',
    },
    {
      title: 'Channels',
      title1: 'Revenue by Sales Channels',
      url: '/home/channels',
      ionicIcon: 'arrow-up-outline',
    },
    {
      title: 'Geography',
      title1: 'Revenue by City',
      url: '/home/geography',
      ionicIcon: 'earth-outline',
    },
    {
      title: 'DailySales',
      title1: 'Individual Sales Report',
      url: '/home/daily-sales',
      ionicIcon: 'calendar-number-outline',
    },
  ];

  dateTime;

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      this.dateTime = new Date();
    });
  }

  ngOnInIt(): void {}
}
