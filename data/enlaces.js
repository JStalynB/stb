/* Trámites y pagos. Cada tarjeta puede tener varios enlaces (se muestran numerados). */
window.STB = window.STB || {};
STB.enlaces = [
  { categoria: "Solicitudes", icono: "📁", titulo: "Sacar la carpeta con todos los documentos",
    descripcion: "Primero el formulario de la Función Judicial, luego el documento de solicitud.", abrirJuntos: true,  
    links: [
      { label: "Formulario Función Judicial", url: "https://appsj.funcionjudicial.gob.ec/documentosExtraviados/publico/formulario.jsf" },
      { label: "Documento de solicitud", url: "https://docs.google.com/document/d/1HL4vYEd1YoOtoS2H-q0OPbyhxmE-4b0oe86ir3rlJao/edit?usp=sharing" },
    ] },
  { categoria: "Solicitudes", icono: "📝", titulo: "Justificar faltas",  abrirJuntos: true, 
    descripcion: "Primero el formulario de la Función Judicial, luego el documento de justificación.",
    links: [
      { label: "Formulario Función Judicial", url: "https://appsj.funcionjudicial.gob.ec/documentosExtraviados/publico/formulario.jsf" },
      { label: "Documento de justificación", url: "https://docs.google.com/document/d/12eYFjFYA-F73fNYXF0-wqTQT1SPYIBkZpaGXGpbte7s/edit?usp=sharing" },
    ] },
  { categoria: "Pagos", icono: "💳", titulo: "Pagar Claro",
    descripcion: "Pago con tarjeta de crédito del servicio hogar.",
    links: [{ label: "Ir a Mi Claro", url: "https://miclaro.com.ec/pagoparcialhogar/" }] },
  { categoria: "Pagos", icono: "💳", titulo: "Pagar CNT",
    descripcion: "Pago con tarjeta de crédito de facturas CNT.",
    links: [{ label: "Ir a CNT", url: "https://pagarmisfacturas.cnt.gob.ec/cntpagos/php/" }] },
  { categoria: "Pagos", icono: "🏛️", titulo: "Municipio de Quito",
    descripcion: "Impuestos, multas, patente, predio y órdenes de pago.",
    links: [{ label: "Consultar obligaciones", url: "https://pam.quito.gob.ec/Consultaobligaciones/" }] },
  { categoria: "Otros", icono: "📄", titulo: "Hoja de vida",
    descripcion: "Documento en Google Docs. para hacer la hoja de vida ",
    links: [{ label: "Abrir documento", url: "https://docs.google.com/document/d/1VI47ktQKVT-Yx6mZfJ_M9U6uPjyHMXQVe_zOD-JQ7F4/edit?usp=sharing" }] },
];
