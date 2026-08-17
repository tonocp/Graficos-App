import { Component, Input, computed, signal } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barra',
  imports: [BaseChartDirective],
  templateUrl: './grafico-barra.html',
})
export class GraficoBarra {
  @Input() titulo = '';
  @Input({ required: true }) set data(value: ChartData<'bar'>) {
    this.dataSignal.set(value);
  }
  @Input() set horizontal(value: boolean) {
    this.horizontalSignal.set(value);
  }

  protected dataSignal = signal<ChartData<'bar'>>({ labels: [], datasets: [] });
  protected horizontalSignal = signal(false);

  protected options = computed<ChartOptions<'bar'>>(() => ({
    responsive: true,
    indexAxis: this.horizontalSignal() ? 'y' : 'x',
    plugins: { legend: { display: true } },
  }));
}
