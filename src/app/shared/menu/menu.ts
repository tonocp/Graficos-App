import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  menu: MenuItem[] = [
    { ruta: 'barras', texto: 'Barras' },
    { ruta: 'barras-doble', texto: 'Barras dobles' },
    { ruta: 'rosco', texto: 'Rosco' },
    { ruta: 'rosco-http', texto: 'Rosco (HTTP)' },
  ];
}
