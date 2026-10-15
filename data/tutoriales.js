/*
 * Tutoriales paso a paso. Un tutorial con "pasos: []" aparece como "Próximamente".
 *
 * Guía de redacción: títulos cortos que empiezan con un verbo ("Abre...", "Selecciona..."),
 * detalle en una o dos frases dirigidas al lector ("Haz clic en..."), y los nombres de botones
 * escritos tal como se ven en pantalla.
 *
 * PLANTILLA para uno nuevo (copiar, pegar y completar):
 *   { id: "mi-tutorial", titulo: "...", categoria: "...", descripcion: "...",
 *     pasos: [ { titulo: "...", detalle: "...", consejo: "(opcional)", imagen: "img/tutoriales/archivo.png" } ] }
 */
window.STB = window.STB || {};
STB.tutoriales = [

  /* ---------- Recargas ---------- */
  { id: "poner-saldo", titulo: "Poner saldo en Mi Negocio Efectivo", categoria: "Recargas",
    descripcion: "Cómo acreditar saldo después de transferir a la distribuidora.",
    pasos: [
      { titulo: "Revisa el comprobante", imagen: "img/tutoriales/1-ver-destinatario.png",
        detalle: "Antes de empezar, confirma que el comprobante diga «A Distribuidora Diceltecsa S.A.»." },
      { titulo: "Entra a Herramientas", imagen: "img/tutoriales/2-herramientas.png",
        detalle: "En Mi Negocio Efectivo, haz clic en HERRAMIENTAS, en el menú azul de la izquierda.",
        consejo: "Si no la ves, baja con la rueda del mouse en el menú lateral." },
      { titulo: "Abre Solicitud de Acreditación", imagen: "img/tutoriales/3-solicitud-acreditacion.png",
        detalle: "Dentro de Herramientas, haz clic en SOLICITUD DE ACREDITACIÓN.",
        consejo: "Si no la ves, baja con la rueda del mouse." },
      { titulo: "Crea la nueva solicitud", imagen: "img/tutoriales/4-nueva-solicitud.png",
        detalle: "Haz clic en el botón naranja NUEVA SOLICITUD, arriba a la derecha del listado." },
      // TODO: faltan los pasos para llenar el formulario (banco, referencia, valor y comprobante) con sus capturas.
    ] },

  // TODO: completar pasos y capturas.
  { id: "recarga-diamantes", titulo: "Recarga de diamantes Free Fire", categoria: "Recargas",
    descripcion: "Cómo recargar diamantes de Free Fire.", pasos: [] },

  { id: "error-login", titulo: "No se abren las recargas", categoria: "Recargas",
    descripcion: "La plataforma no abre y pide la contraseña o las preguntas de seguridad.",
    pasos: [
      { titulo: "Responde las preguntas de seguridad", imagen: "img/ErrorPregutnasSeguridad/caso-libro-favorito.png",
        detalle: `Responde las preguntas de seguridad. Escribe las respuestas en MAYÚSCULAS:

¿Cuál es su comida favorita?
KFCKFC

¿Cuál es su serie favorita?
GOTHAM

¿Cuál es su país favorito?
COLOMBIA` },
      { titulo: "Selecciona la IP", imagen: "img/ErrorPregutnasSeguridad/2-seleccionar-ip.png",
        detalle: "Selecciona la segunda opción." },
      { titulo: "Escribe PRINCIPAL", imagen: "img/ErrorPregutnasSeguridad/3-escribir-alias.png",
        detalle: "En el cuadro de texto, escribe PRINCIPAL tal como se ve en la imagen." },
      { titulo: "Acepta", imagen: "img/ErrorPregutnasSeguridad/4-click-si.png",
        detalle: "Haz clic en el botón SÍ." },
    ] },

  /* ---------- Documentos ---------- */
  { id: "escanear-documento", titulo: "Escanear un documento", categoria: "Documentos",
    descripcion: "Cómo escanear un documento y enviarlo al cliente por WhatsApp.",
    pasos: [
      { titulo: "Elige Escáner en la impresora", imagen: "img/escanear/1-seleccionar-escaner.png",
        detalle: "En la impresora, selecciona la opción de escanear." },
      { titulo: "Coloca la hoja", imagen: "img/escanear/2-colocar-la-hoja.png",
        detalle: "Coloca la hoja en la impresora." },
      { titulo: "Presiona Start", imagen: "img/escanear/3-seleccionar-start.png",
        detalle: `Presiona el botón Start para iniciar el escaneo.

Si son varias hojas, escanéalas una por una: coloca una hoja, presiona Start, coloca la siguiente y vuelve a presionar Start.` },
      { titulo: "Presiona #", imagen: "img/escanear/4-confrimar.png",
        detalle: "Presiona la tecla numeral (#) para guardar el documento escaneado." },
      { titulo: "Abre la página del escáner", imagen: "img/escanear/5-ir-a-aescanear.png",
        detalle: `En la computadora, abre en otra pestaña este enlace:
http://192.168.0.69/web/guest/es/websys/webArch/mainFrame.cgi` },
      { titulo: "Haz clic en Document Server", imagen: "img/escanear/6-click-en-document-server.png",
        detalle: "Haz clic en Document Server." },
      { titulo: "Abre la carpeta compartida", imagen: "img/escanear/7-ir-a-carpeta-compartida.png",
        detalle: "Haz clic en la carpeta compartida." },
      { titulo: "Selecciona el PDF", imagen: "img/escanear/8-clic-en-pdf.png",
        detalle: "Haz clic en el PDF. Recuerda que siempre es el primero de la lista." },
      { titulo: "Guarda el documento", imagen: "img/escanear/9-guardar.png",
        detalle: "Haz clic en el botón Guardar." },
      { titulo: "Acepta", imagen: "img/escanear/10-aceptar.png",
        detalle: "Haz clic en el botón Aceptar." },
      { titulo: "Pide el número de WhatsApp", imagen: "img/escanear/11-pedir-numero-telefono.png",
        detalle: "Pide al cliente su número de WhatsApp para enviarle el documento escaneado." },
      { titulo: "Abre el chat de WhatsApp", imagen: "img/escanear/12-chatear.png",
        detalle: "Haz clic en el número de teléfono y luego en CHATEAR. Se abrirá un chat nuevo." },
      { titulo: "Haz clic en el clip", imagen: "img/escanear/13-adjuntar.png",
        detalle: "Haz clic en el clip para adjuntar un archivo." },
      { titulo: "Elige Documento", imagen: "img/escanear/14-adjuntar-documento.png",
        detalle: "Haz clic en ADJUNTAR DOCUMENTO." },
      { titulo: "Selecciona el documento escaneado", imagen: "img/escanear/15-seleccionar-document.png",
        detalle: "Haz clic en el documento escaneado. Siempre es el primero de la lista." },
      { titulo: "Haz clic en Abrir", imagen: "img/escanear/16-abrir.png",
        detalle: "Haz clic en ABRIR." },
      { titulo: "Envía el documento", imagen: "img/escanear/17-enviar.png",
        detalle: "Haz clic en ENVIAR. Con esto, el cliente recibe el documento escaneado." },
    ] },

  /* ---------- Copias (TODO: completar pasos y capturas) ---------- */
  { id: "copias-cedula", titulo: "Copias de cédula", categoria: "Copias",
    descripcion: "Cómo sacar copias de la cédula.", pasos: [] },
//copias examenes de un solo lado 
    { id: "copias-examenes", titulo: "Copias de exámenes (un lado)", categoria: "Copias",
    descripcion: "Cómo sacar copias de exámenes por un solo lado de la hoja.",
    pasos: [
      { titulo: "Selecciona Copiadora", imagen: "img/copias-examenes-un-lado/1-seleccionar-impresora.png",
        detalle: "En la pantalla de la impresora, selecciona la opción de copiar." },
      { titulo: "Coloca la hoja", imagen: "img/copias-examenes-un-lado/2-colocar-hoja.png",
        detalle: "Coloca la hoja del examen en la impresora." },
      { titulo: "Selecciona Clasificar", imagen: "img/copias-examenes-un-lado/3-seleccionar-clasificar.png",
        detalle: "En la pantalla, selecciona la opción Clasificar." },
      { titulo: "Escribe la cantidad de copias", imagen: "img/copias-examenes-un-lado/4-tipear-cantidad-copias.png",
        detalle: "Escribe la cantidad de copias que necesitas." },
      { titulo: "Presiona Start", imagen: "img/copias-examenes-un-lado/5-aplastar-boton-Start.png",
        detalle: "Presiona el botón Start para iniciar las copias, debe de sacar copias de todas las hojas de los exámenes, va a salir una sola hoja, es normal, hasta que saque todas las hojas, avanzar al siguiente paso para sacar el resto de hojas" },
      { titulo: "Presiona #", imagen: "img/copias-examenes-un-lado/6-aplastar-boton-numeral-para-confirmar.png",
        detalle: "Presiona la tecla numeral (#) para confirmar." },
    ] },
    //copias examenes de ambos lados
  { id: "copias-examenes-ambas-caras", titulo: "Copias de exámenes (ambos lados)", categoria: "Copias",
    descripcion: "Cómo sacar copias de exámenes por los dos lados de la hoja.",
    pasos: [
      { titulo: "Selecciona Copiadora", imagen: "img/copias-examenes-ambos-lados/1-seleccionar-impresora.png",
        detalle: "En la pantalla principal de la impresora, toca el primer ícono de la izquierda, el que está marcado con el recuadro rojo. Con eso se abre la pantalla de copias." },
      { titulo: "Coloca la hoja en el cristal", imagen: "img/copias-examenes-ambos-lados/2-colocar-hoja.png",
        detalle: `Levanta la tapa de la impresora y coloca la primera hoja del examen sobre el cristal, en la posición que se ve en la imagen.

Después baja la tapa con cuidado.`,
        consejo: "Revisa que la hoja no quede torcida, porque la copia saldrá torcida también." },
      { titulo: "Selecciona Clasificar", imagen: "img/copias-examenes-ambos-lados/3-seleccionar-clasificar.png",
        detalle: `En la pantalla, toca el botón Clasificar, abajo a la izquierda (marcado en rojo).

Esta opción hace que las copias salgan ordenadas, en juegos completos: primero todas las hojas del examen, luego otro juego igual, y así sucesivamente.` },
      { titulo: "Selecciona las dos caras", imagen: "img/copias-examenes-ambos-lados/4-selecionar-dos-caras.png",
        detalle: "Toca el botón de 2 caras (marcado en rojo) para que cada copia salga impresa por los dos lados de la hoja." },
      { titulo: "Escribe la cantidad de copias", imagen: "img/copias-examenes-ambos-lados/8-tipear-cantidad-copias.png",
        detalle: "Con el teclado numérico, a la derecha de la pantalla (zona marcada en rojo), escribe cuántas copias necesitas.",
        consejo: "Revisa que el número aparezca en la pantalla antes de continuar." },
      { titulo: "Presiona Start (primera cara)", imagen: "img/copias-examenes-ambos-lados/5-aplastar-boton-Start.png",
        detalle: "Presiona el botón azul Start, abajo a la derecha del panel (marcado en rojo). Así se copia la primera cara de la hoja." },
      { titulo: "Dale la vuelta a la hoja", imagen: "img/copias-examenes-ambos-lados/6-dar-vuelta-la-hoja.png",
        detalle: `Levanta la tapa, voltea la hoja para que quede la otra cara hacia abajo y colócala de nuevo en el cristal.

Baja la tapa con cuidado.` },
      { titulo: "Presiona Start otra vez (segunda cara)", imagen: "img/copias-examenes-ambos-lados/5-aplastar-boton-Start.png",
        detalle: "Presiona de nuevo el botón azul Start. Así se copia la segunda cara de la hoja." },
      { titulo: "Repite con las demás hojas", imagen: "img/copias-examenes-ambos-lados/2-colocar-hoja.png",
        detalle: `Si el examen tiene más hojas, repite el proceso con cada una:
1. Coloca la siguiente hoja en el cristal y presiona Start.
2. Dale la vuelta a la hoja y presiona Start otra vez.

Hazlo hasta terminar todas las hojas.`,
        consejo: "No presiones # todavía: eso se hace solo cuando ya escaneaste todas las hojas." },
      { titulo: "Presiona # para confirmar", imagen: "img/copias-examenes-ambos-lados/7-aplastar-boton-numeral-para-confirmar.png",
        detalle: "Cuando ya no queden hojas por copiar, presiona la tecla numeral (#) del teclado para confirmar y que se impriman las copias.",
        consejo: "Al terminar, retira las copias de la bandeja y tu última hoja original del cristal." },
    ] },

];
