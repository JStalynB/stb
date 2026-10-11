document.addEventListener("DOMContentLoaded", () => {
  cargarEnlaces();
  cargarTutoriales();
});

const enlacesFallback = [
  {
    id: "pago-1",
    titulo: "Plataforma de Pagos",
    categoria: "Pagos",
    descripcion: "Acceso directo para realizar el pago de servicios.",
    url: "https://ejemplo.com/pagos",
    icono: "💳"
  },
  {
    id: "solicitud-1",
    titulo: "Formulario de Solicitudes",
    categoria: "Solicitudes",
    descripcion: "Portal para crear una nueva solicitud de soporte.",
    url: "https://ejemplo.com/solicitudes",
    icono: "📝"
  }
];

const tutorialesFallback = [
  {
    id: "imprimir-documento",
    titulo: "¿Cómo configurar e imprimir un documento?",
    categoria: "Soporte Técnico / Impresoras",
    descripcion: "Guía rápida paso a paso para mandar a imprimir archivos en la red local.",
    pasos: [
      {
        numero: 1,
        titulo: "Verificar la conexión de la impresora",
        detalle: "Asegúrate de que la impresora esté encendida y conectada a la misma red Wi-Fi o cable Ethernet.",
        imagen: "img/tutoriales/paso1-impresora.png",
        checklist: [
          "Cable de energía conectado",
          "Luz verde de Wi-Fi encendida"
        ]
      },
      {
        numero: 2,
        titulo: "Seleccionar la impresora en el sistema",
        detalle: "Abre el documento, presiona Ctrl + P (o Cmd + P en Mac) y selecciona la impresora correcta de la lista.",
        imagen: "img/tutoriales/paso2-impresora.png",
        checklist: [
          "Documento abierto",
          "Impresora seleccionada en el menú desplegable"
        ]
      }
    ]
  }
];

async function cargarJson(ruta, fallback) {
  try {
    const respuesta = await fetch(ruta, { cache: "no-store" });
    if (!respuesta.ok) {
      throw new Error(`No se pudo cargar ${ruta}`);
    }
    return await respuesta.json();
  } catch (error) {
    console.warn(`Usando datos de respaldo para ${ruta}:`, error);
    return fallback;
  }
}

async function cargarEnlaces() {
  const enlaces = await cargarJson("data/enlaces.json", enlacesFallback);
  renderizarEnlaces(enlaces);
}

async function cargarTutoriales() {
  const tutoriales = await cargarJson("data/tutoriales.json", tutorialesFallback);
  renderizarTutoriales(tutoriales);
}

function renderizarEnlaces(lista) {
  const contenedor = document.getElementById("contenedorEnlaces");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (!lista || lista.length === 0) {
    contenedor.innerHTML = '<p class="text-slate-400 text-sm">No hay enlaces registrados aún.</p>';
    return;
  }

  lista.forEach((item) => {
    const card = document.createElement("a");
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = "bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md hover:border-indigo-500 transition block item-busqueda";
    card.setAttribute("data-texto", `${item.titulo} ${item.descripcion} ${item.categoria}`.toLowerCase());

    card.innerHTML = `
      <div class="flex items-start gap-3">
        <span class="text-2xl">${item.icono || "🔗"}</span>
        <div>
          <span class="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full inline-block mb-1">${item.categoria}</span>
          <h3 class="font-bold text-slate-800 text-base">${item.titulo}</h3>
          <p class="text-xs text-slate-500 mt-1">${item.descripcion}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(card);
  });
}

function renderizarTutoriales(lista) {
  const contenedor = document.getElementById("contenedorTutoriales");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (!lista || lista.length === 0) {
    contenedor.innerHTML = '<p class="text-slate-400 text-sm">No hay tutoriales disponibles por ahora.</p>';
    return;
  }

  lista.forEach((tutorial) => {
    const article = document.createElement("article");
    article.className = "tutorial-card bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden";
    article.setAttribute("data-texto", `${tutorial.titulo} ${tutorial.descripcion} ${tutorial.categoria}`.toLowerCase());

    const header = document.createElement("button");
    header.type = "button";
    header.className = "w-full flex justify-between items-center p-4 text-left hover:bg-slate-50 transition";
    header.innerHTML = `
      <div>
        <span class="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full inline-block mb-2">${tutorial.categoria}</span>
        <h3 class="text-lg font-semibold text-slate-800">${tutorial.titulo}</h3>
      </div>
      <span class="text-xl text-slate-500">▾</span>
    `;

    const body = document.createElement("div");
    body.className = "hidden p-4 border-t border-slate-200 bg-slate-50";

    const descripcion = document.createElement("p");
    descripcion.className = "text-sm text-slate-600 mb-4";
    descripcion.textContent = tutorial.descripcion;
    body.appendChild(descripcion);

    const pasos = document.createElement("div");
    pasos.className = "space-y-4";

    (tutorial.pasos || []).forEach((paso) => {
      const cardPaso = document.createElement("div");
      cardPaso.className = "bg-white border border-slate-200 rounded-xl p-4";

      const encabezado = document.createElement("div");
      encabezado.className = "flex items-center justify-between gap-3 mb-2";
      encabezado.innerHTML = `
        <h4 class="font-semibold text-slate-800">Paso ${paso.numero}: ${paso.titulo}</h4>
        ${paso.imagen ? '<button type="button" class="text-xs text-indigo-600 hover:underline" data-imagen="' + paso.imagen + '">Ver imagen</button>' : ""}
      `;

      const detalle = document.createElement("p");
      detalle.className = "text-sm text-slate-600 mb-3";
      detalle.textContent = paso.detalle;

      const checklist = document.createElement("ul");
      checklist.className = "list-disc list-inside text-sm text-slate-600 space-y-1";

      (paso.checklist || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        checklist.appendChild(li);
      });

      cardPaso.appendChild(encabezado);
      cardPaso.appendChild(detalle);
      cardPaso.appendChild(checklist);
      pasos.appendChild(cardPaso);
    });

    body.appendChild(pasos);
    article.appendChild(header);
    article.appendChild(body);
    contenedor.appendChild(article);

    header.addEventListener("click", () => {
      body.classList.toggle("hidden");
      header.querySelector("span:last-child").textContent = body.classList.contains("hidden") ? "▾" : "▴";
    });

    body.querySelectorAll("[data-imagen]").forEach((boton) => {
      boton.addEventListener("click", (event) => {
        abrirImagen(event.currentTarget.getAttribute("data-imagen"));
      });
    });
  });
}

function filtrarContenido() {
  const input = document.getElementById("inputBuscador");
  const termino = input ? input.value.trim().toLowerCase() : "";

  const elementos = document.querySelectorAll(".item-busqueda, .tutorial-card");

  elementos.forEach((elemento) => {
    const texto = (elemento.getAttribute("data-texto") || "").toLowerCase();
    const coincide = !termino || texto.includes(termino);
    elemento.style.display = coincide ? "block" : "none";
  });
}

function abrirImagen(ruta) {
  const modal = document.getElementById("modalImagen");
  const img = document.getElementById("imgAmpliada");

  if (!modal || !img || !ruta) return;

  img.src = ruta;
  modal.classList.remove("hidden");
}

function cerrarImagen() {
  const modal = document.getElementById("modalImagen");
  if (modal) {
    modal.classList.add("hidden");
  }
}
// Abrir / Cerrar submenús del Sidebar lateral
function toggleSidebarMenu(idMenu) {
  const menu = document.getElementById(idMenu);
  const flecha = document.getElementById(`flecha-${idMenu}`);
  
  if (menu) {
    const estaOculto = menu.classList.contains("hidden");
    if (estaOculto) {
      menu.classList.remove("hidden");
      if (flecha) flecha.style.transform = "rotate(180deg)";
    } else {
      menu.classList.add("hidden");
      if (flecha) flecha.style.transform = "rotate(0deg)";
    }
  }
}

window.toggleSidebarMenu = toggleSidebarMenu;

window.filtrarContenido = filtrarContenido;
window.abrirImagen = abrirImagen;
window.cerrarImagen = cerrarImagen;
