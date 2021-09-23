import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { RoscoHttpComponent } from './pages/rosco-http/rosco-http.component';
import { RoscoComponent } from './pages/rosco/rosco.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barras', component: BarrasComponent },
      { path: 'barras-dobles', component: BarrasDobleComponent },
      { path: 'rosco', component: RoscoComponent },
      { path: 'rosco-http', component: RoscoHttpComponent },
      { path: '**', redirectTo: 'barras' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficasRoutingModule {}
