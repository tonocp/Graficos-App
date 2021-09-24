import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-rosco-http',
  templateUrl: './rosco-http.component.html',
  styles: [],
})
export class RoscoHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService
      .getUsuariosRRSSRosco()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
