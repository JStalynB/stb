/* Utilidades compartidas por todas las páginas. Se cargan antes que el resto. */
window.STB = window.STB || {};

/** Crea un nodo DOM sin innerHTML: el("a", {href:"#"}, "texto", otroNodo) */
STB.el = (tag, props = {}, ...hijos) => {
  const nodo = document.createElement(tag);
  for (const [clave, valor] of Object.entries(props)) {
    if (clave.startsWith("on")) nodo.addEventListener(clave.slice(2), valor);
    else if (valor !== false && valor != null) nodo.setAttribute(clave, valor);
  }
  nodo.append(...hijos.flat().filter((h) => h != null && h !== false));
  return nodo;
};

/** Minúsculas y sin tildes, para que "acreditacion" encuentre "acreditación". */
STB.normalizar = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
