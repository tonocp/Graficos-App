# Graficas App

Proyecto de portfolio para mostrar _Charts_ y _Graphs_ con **[ng2-charts](https://valor-software.com/ng2-charts/)** y **[Chart.js](https://www.chartjs.org/)**, sobre Angular con componentes standalone.

Incluye un gráfico de rosco que consume datos reales vía HTTP desde **[simple_mean_backend](https://github.com/tonocp/simple_mean_backend)** (Node + Express + MongoDB), usando RxJS/HttpClient.

## Requisitos

- Node 24.15.0 (ver `.nvmrc`)
- `simple_mean_backend` corriendo (en local o desplegado) para que la vista "Rosco (HTTP)" cargue datos

## Desarrollo local

```bash
npm install
npm start        # ng serve, puerto 4200
```

La URL del backend se configura en `src/environments/environment.ts` (dev) y `environment.prod.ts` (build de producción). Si `simple_mean_backend` corre en local, tiene que estar levantado en el puerto 4000 y con `CORS_ORIGIN` permitiendo `http://localhost:4200` (vacío o `*` valen).

## Build

```bash
npm run build:prod   # salida en dist/
```

## Despliegue

- Frontend en Netlify (directorio de publicación: `dist`, sin `netlify.toml`; el SPA fallback lo resuelve `public/_redirects`). El builder moderno (`@angular/build:application`) se configura con `outputPath: { base: "dist", browser: "" }` para que el build del navegador quede directamente en `dist` en vez de `dist/graficas-app/browser` — mismo directorio de publicación que en `MEAN-CRUD-SuperHeroes-App`.
- Backend en Render: https://simple-mean-backend.onrender.com — recuerda añadir el dominio de Netlify a `CORS_ORIGIN` si lo restringes en vez de dejarlo en `*`.
