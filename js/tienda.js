(() => {
  const { el, productos } = STB;
  const usd = (n) => `$${n.toFixed(2)}`;

  const tarjeta = (p) => el("article", { class: "card producto" },
    el("img", { src: p.imagen, alt: p.nombre, loading: "lazy" }),
    el("h3", {}, p.nombre),
    el("p", { class: "desc" }, p.descripcion),
    el("p", { class: "precio" },
      el("strong", {}, usd(p.precioStb)), el("s", {}, usd(p.precioNormal)),
      el("span", { class: "ahorro" }, `-${Math.round((1 - p.precioStb / p.precioNormal) * 100)}%`)));

  document.getElementById("productos").append(...productos.map(tarjeta));
})();
