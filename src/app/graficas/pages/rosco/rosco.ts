import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-rosco',
  imports: [BaseChartDirective],
  templateUrl: './rosco.html',
})
export class Rosco {
  data: ChartData<'doughnut'> = {
    labels: ['Ventas Digitales', 'Ventas Físicas', 'Ventas Mailing'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#4f46e5', '#7c3aed', '#c026d3'],
      },
    ],
  };
}
