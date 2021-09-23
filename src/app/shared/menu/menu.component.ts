import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class MenuComponent {
  menu: MenuItem[] = [
    { ruta: '/graficas/barras', texto: 'Gráfico de Barras' },
    { ruta: '/graficas/barras-dobles', texto: 'Gráficos Dobles' },
    { ruta: '/graficas/rosco', texto: 'Gráfico de Rosco' },
    { ruta: '/graficas/rosco-http', texto: 'Rosco HTTP' },
  ];
}
