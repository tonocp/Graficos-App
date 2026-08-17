import { Component, inject, signal } from '@angular/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { GraficasService } from '../../services/graficas.service';
import { BackendLoader } from '../../../shared/backend-loader/backend-loader';

@Component({
  selector: 'app-rosco-http',
  imports: [BaseChartDirective, BackendLoader],
  templateUrl: './rosco-http.html',
})
export class RoscoHttp {
  private graficasService = inject(GraficasService);

  cargando = signal(true);
  error = signal(false);
  data = signal<ChartData<'doughnut'>>({ labels: [], datasets: [{ data: [] }] });

  constructor() {
    this.graficasService.getRedesSociales().subscribe({
      next: (redesSociales) => {
        this.data.set({
          labels: redesSociales.map((r) => r.red),
          datasets: [
            {
              data: redesSociales.map((r) => r.seguidores),
              backgroundColor: ['#4f46e5', '#7c3aed', '#c026d3', '#db2777', '#ea580c'],
            },
          ],
        });
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }
}
