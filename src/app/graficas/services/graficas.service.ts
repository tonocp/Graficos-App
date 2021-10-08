import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getDatosRosco() {
    return this.http.get(this.baseUrl);
  }

  getUsuariosRRSSRosco() {
    return this.getDatosRosco().pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }
}
