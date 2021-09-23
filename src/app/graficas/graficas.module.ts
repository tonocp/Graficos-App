import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { RoscoHttpComponent } from './pages/rosco-http/rosco-http.component';
import { RoscoComponent } from './pages/rosco/rosco.component';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    RoscoHttpComponent,
    RoscoComponent,
    GraficoBarraComponent,
  ],
  imports: [CommonModule, GraficasRoutingModule, ChartsModule],
})
export class GraficasModule {}
