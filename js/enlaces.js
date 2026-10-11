(() => {
  const { el, normalizar, enlaces, tutoriales } = STB;
  const $ = (id) => document.getElementById(id);
  const textoBusqueda = (...partes) => normalizar(partes.join(" "));
  const irALista = () => { location.hash = "#tutoriales"; };

  /* ---------- Tarjetas ---------- */
    /** Abre todos los enlaces con un solo clic. Si el navegador bloquea alguna ventana, avisa. */
  const abrirTodos = (links) => {
    const ventanas = links.map((l) => window.open(l.url, "_blank"));
    ventanas.forEach((v) => { if (v) v.opener = null; });
    if (ventanas.includes(null)) {
      alert("El navegador bloqueó una ventana. Permite las ventanas emergentes para este sitio y vuelve a intentar.");
    }
  };

  const botonesEnlace = (e) => e.abrirJuntos
    ? [el("button", { class: "btn", type: "button", onclick: () => abrirTodos(e.links) },
        `Abrir los ${e.links.length} enlaces`)]
    : e.links.map((l, i) =>
        el("a", { class: "btn btn-sec", href: l.url, target: "_blank", rel: "noopener noreferrer" },
          e.links.length > 1 ? `${i + 1}. ${l.label}` : l.label));

  const tarjetaEnlace = (e) => el("article", { class: "card", "data-texto": textoBusqueda(e.titulo, e.descripcion, e.categoria) },
    el("span", { class: "badge" }, `${e.icono} ${e.categoria}`),
    el("h3", {}, e.titulo),
    el("p", {}, e.descripcion),
    el("div", { class: "acciones" }, botonesEnlace(e)));

  const tarjetaTutorial = (t) => el("button", {
      class: "card card-tutorial", type: "button", disabled: !t.pasos.length,
      "data-texto": textoBusqueda(t.titulo, t.descripcion, t.categoria),
      onclick: () => { location.hash = `#tutorial-${t.id}`; } },
    el("span", { class: "badge" }, t.categoria),
    el("h3", {}, t.titulo),
    el("p", {}, t.descripcion),
    el("small", {}, t.pasos.length ? `${t.pasos.length} pasos →` : "Próximamente"));

      /** Convierte las URL dentro de un texto en enlaces que abren en una pestaña nueva. */
  const conEnlaces = (texto) =>
    texto.split(/(https?:\/\/[^\s]*[^\s.,;:)])/g).map((parte, i) =>
      i % 2
        ? el("a", { href: parte, target: "_blank", rel: "noopener noreferrer" }, parte)
        : parte);

  /* ---------- Visor paso a paso ---------- */
  let tutorial = null;
  let paso = 0;

  const ir = (delta) => { paso += delta; renderVisor(); visor.scrollIntoView({ block: "start" }); };

  function renderVisor() {
    const p = tutorial.pasos[paso];
    const total = tutorial.pasos.length;
    visor.replaceChildren(
      el("button", { class: "btn-link", onclick: irALista }, "← Todos los tutoriales"),
      el("h3", {}, tutorial.titulo),
      el("div", { class: "progreso", role: "progressbar", "aria-valuemin": 1, "aria-valuenow": paso + 1, "aria-valuemax": total },
        el("span", { style: `width:${((paso + 1) / total) * 100}%` })),
      el("div", { class: "paso" },
        el("div", {},
          el("span", { class: "paso-num" }, `Paso ${paso + 1} de ${total}`),
          el("h4", {}, p.titulo),
                    el("p", {}, conEnlaces(p.detalle)),
          p.consejo && el("p", { class: "consejo" }, `💡 ${p.consejo}`)),
        p.imagen && el("button", { class: "paso-img", type: "button", onclick: () => ampliar(p) },
          el("img", { src: p.imagen, alt: p.titulo }),
          el("small", {}, "🔍 Clic para ampliar"))),
      el("div", { class: "nav-pasos" },
        el("button", { class: "btn btn-sec", disabled: paso === 0, onclick: () => ir(-1) }, "← Anterior"),
        paso < total - 1
          ? el("button", { class: "btn", onclick: () => ir(1) }, "Siguiente →")
          : el("button", { class: "btn", onclick: irALista }, "✔ Terminar")));
  }

  /** La URL manda: #tutorial-<id> abre el visor, cualquier otra cosa muestra la lista. */
  function sincronizarConUrl() {
    const id = location.hash.startsWith("#tutorial-") ? location.hash.slice("#tutorial-".length) : null;
    tutorial = tutoriales.find((t) => t.id === id && t.pasos.length) || null;
    paso = 0;
    lista.hidden = !!tutorial;
    visor.hidden = !tutorial;
    if (tutorial) { renderVisor(); visor.scrollIntoView({ block: "start" }); }
  }

  /* ---------- Zoom de imagen ---------- */
  const zoom = $("zoom");
  const ampliar = (p) => { const img = zoom.querySelector("img"); img.src = p.imagen; img.alt = p.titulo; zoom.showModal(); };
  zoom.addEventListener("click", () => zoom.close());

  /* ---------- Buscador ---------- */
  $("buscador").addEventListener("input", (e) => {
    const q = normalizar(e.target.value.trim());
    let visibles = 0;
    document.querySelectorAll("[data-texto]").forEach((n) => {
      const coincide = n.dataset.texto.includes(q);
      n.hidden = !coincide;
      visibles += coincide;
    });
    $("sinResultados").hidden = visibles > 0;
  });

  /* ---------- Menú móvil y teclado ---------- */
  $("btnMenu").addEventListener("click", () => document.body.classList.toggle("menu-abierto"));
  $("menu").addEventListener("click", () => document.body.classList.remove("menu-abierto"));
  document.addEventListener("keydown", (e) => {
    if (!tutorial || zoom.open || e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight" && paso < tutorial.pasos.length - 1) ir(1);
    if (e.key === "ArrowLeft" && paso > 0) ir(-1);
  });

  /* ---------- Arranque ---------- */
  const lista = $("listaTutoriales");
  const visor = $("visor");
  $("listaEnlaces").append(...enlaces.map(tarjetaEnlace));
  lista.append(...tutoriales.map(tarjetaTutorial));
  window.addEventListener("hashchange", sincronizarConUrl);
  sincronizarConUrl();
})();
