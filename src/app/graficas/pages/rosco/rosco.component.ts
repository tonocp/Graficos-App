import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-rosco',
  templateUrl: './rosco.component.html',
  styles: [],
})
export class RoscoComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    'Ventas Digitales',
    'Ventas Físicas',
    'Ventas Mailing',
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#F81143', '#D90F9F', '#D61DF0', '#8A0FD9', '#5F11F8'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
