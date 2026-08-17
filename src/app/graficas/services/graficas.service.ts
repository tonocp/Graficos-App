import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '../../../environments/environment';
import { RedSocial } from '../interfaces/red-social.interface';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  getRedesSociales() {
    return this.http.get<RedSocial[]>(`${this.baseUrl}/api/graficas/redes-sociales`);
  }
}
