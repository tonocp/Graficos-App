import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styles: [],
})
export class GraficoBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  @Input() barChartLabels: Label[] = [
    // '2015','2016','2017','2018','2019','2020','2021'
  ];

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Datos B' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Datos C' },
  ];
  public barChartType: ChartType = 'bar';

  public barChartLegend = true;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

  public randomize(): void {
    this.barChartData.forEach((element) => {
      element.data = [
        Math.round(Math.random() * 100),
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ];
    });
  }
}
