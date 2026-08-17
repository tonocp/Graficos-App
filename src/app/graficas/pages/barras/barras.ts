import { Component, signal } from '@angular/core';
import { ChartData } from 'chart.js';

import { GraficoBarra } from '../../components/grafico-barra/grafico-barra';

const ETIQUETAS = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

const datosAleatorios = (): number[] => ETIQUETAS.map(() => Math.round(Math.random() * 100));

@Component({
  selector: 'app-barras',
  imports: [GraficoBarra],
  templateUrl: './barras.html',
})
export class Barras {
  data = signal<ChartData<'bar'>>({
    labels: ETIQUETAS,
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Datos A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Datos B' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Datos C' },
    ],
  });

  randomizar(): void {
    this.data.update((actual) => ({
      ...actual,
      datasets: actual.datasets.map((dataset) => ({ ...dataset, data: datosAleatorios() })),
    }));
  }
}
