import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-daily-sales',
  templateUrl: './daily-sales.page.html',
  styleUrls: ['./daily-sales.page.scss'],
})
export class DailySalesPage implements OnInit {
  fullData: any;
  region: any;
  sector: any;
  channel: any;
  units: any;
  amount: any;
  datas: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.getAllData();
  }

getAllData(){
  this.data.getdata().subscribe(res => {
    this.fullData = res;
  });
}
}
