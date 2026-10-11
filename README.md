# STB

Sitio de Ciber STB: tienda (`index.html`) y centro de trámites/tutoriales (`enlaces.html`).
Sin build ni dependencias: se abre con doble clic o se publica tal cual en GitHub Pages.

```
css/   base.css (tokens y componentes) · tienda.css · enlaces.css
data/  productos.js · enlaces.js · tutoriales.js   ← aquí se edita el contenido
js/    utils.js (helpers) · tienda.js · enlaces.js
img/   tutoriales/  (nombres en minúscula, sin espacios)
```

- **Producto nuevo:** copiar un bloque en `data/productos.js`.
- **Enlace nuevo:** copiar un bloque en `data/enlaces.js`.
- **Tutorial nuevo:** usar la plantilla al inicio de `data/tutoriales.js` y guardar las capturas en `img/tutoriales/`.
- Los datos son `.js` (no `.json`) para que funcionen sin servidor local (`fetch` falla con `file://`).
