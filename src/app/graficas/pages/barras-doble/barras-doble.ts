import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

import { GraficoBarra } from '../../components/grafico-barra/grafico-barra';

@Component({
  selector: 'app-barras-doble',
  imports: [GraficoBarra],
  templateUrl: './barras-doble.html',
})
export class BarrasDoble {
  proveedores: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    ],
  };

  productos: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [{ data: [200, 300, 400, 300, 100], label: 'Coches', backgroundColor: '#4f46e5' }],
  };
}
