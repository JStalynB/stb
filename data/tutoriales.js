/*
 * Tutoriales paso a paso. Un tutorial con "pasos: []" aparece como "Próximamente".
 *
 * PLANTILLA para uno nuevo (copiar, pegar y completar):
 *   { id: "mi-tutorial", titulo: "...", categoria: "...", descripcion: "...",
 *     pasos: [ { titulo: "...", detalle: "...", consejo: "(opcional)", imagen: "img/tutoriales/archivo.png" } ] }
 */
window.STB = window.STB || {};
STB.tutoriales = [
  { id: "poner-saldo", titulo: "Poner saldo en Mi Negocio Efectivo", categoria: "Recargas",
    descripcion: "Cómo acreditar saldo después de transferir a la distribuidora.",
    pasos: [
      { titulo: "Revisa el comprobante", imagen: "img/tutoriales/1-ver-destinatario.png",
        detalle: "Antes de empezar, confirma que el comprobante diga «A Distribuidora Diceltecsa S.A.»." },
      { titulo: "Entra a Herramientas", imagen: "img/tutoriales/2-herramientas.png",
        detalle: "En Mi Negocio Efectivo, haz clic en HERRAMIENTAS del menú azul de la izquierda.",
        consejo: "Si no la ves, baja con la rueda del mouse en el menú lateral." },
      { titulo: "Abre Solicitud de Acreditación", imagen: "img/tutoriales/3-solicitud-acreditacion.png",
        detalle: "Dentro de Herramientas, haz clic en SOLICITUD DE ACREDITACIÓN.",
        consejo: "Si no la ves, baja con la rueda del mouse." },
      { titulo: "Crea la nueva solicitud", imagen: "img/tutoriales/4-nueva-solicitud.png",
        detalle: "Haz clic en el botón naranja NUEVA SOLICITUD, arriba a la derecha del listado." },
      // TODO: faltan los pasos de llenar el formulario (banco, referencia, valor, comprobante) con sus capturas.
    ] },
  // TODO: completar este tutorial (pasos + capturas).
  { id: "recarga-diamantes", titulo: "Recarga de diamantes", categoria: "Recargas",
    descripcion: "Recargar diamantes de Free Fire.", pasos: [] },

    //no se abre mi negocio efecivo
    { id: "Error-login", titulo: "No se abren las recargas", categoria: "Recargas",
    descripcion: "la plataforma no se abre, pide contraseña, preguntas de segurdad",
     pasos: [
      { titulo: "Revisar la pregunta", imagen: "img/ErrorPregutnasSeguridad/caso-libro-favorito.png",
        detalle: `Contesar las preguntas de seguridad, ESCRIBIR EN MAYÚSCULAS:	

¿Cuál es su comida favorita?
KFCKFC

¿Cuál es su serie favorita?
GOTHAM
	
¿Cuál es su país favorito?
COLOMBIA `,      
      },
//paso 2
       { titulo: "Seleccionar IP", imagen: "img/ErrorPregutnasSeguridad/2-seleccionar-ip.png",
        detalle: "Seleccionar la segunda opción." },
        //paso 3
       { titulo: "Escribir PRINCIPAL", imagen: "img/ErrorPregutnasSeguridad/3-escribir-alias.png",
        detalle: "Escribir en el cuadro PRINCIPAL, así como se ve en la imagen." },
         //paso 4
       { titulo: "Aceptar", imagen: "img/ErrorPregutnasSeguridad/4-click-si.png",
        detalle: "Click en el botón SI." },
     ]   
     
    
    },
    // Escanear un documento.
  { id: "escanear-documento", titulo: "Escanear un documento", categoria: "Documentos",
    descripcion: "Cómo escanear un documento para su envío.", pasos: [
      //paso 1 escoger el escaner en la impresora 
       { titulo: "Seleccionar-escanera", imagen: "img/escanear/1-seleccionar-escaner.png",
        detalle: "En la impresora, selecciona la opción de escanear." },
        //paso 2 colocar la hoja en la impresora 
       { titulo: "Colocar hoja", imagen: "img/escanear/2-colocar-la-hoja.png",
        detalle: "Colocar la hoja en la impresora." },
        //paso 3 seleccionar  Start
        { titulo: "Seleccionar Start", imagen: "img/escanear/3-seleccionar-start.png",
        detalle: "Aplastar el botón Start para iniciar el escaneo, (Aplastar el botón por cada hoja que se desee escanear, es decir colocar una hoja aplastar Start, coloca la siguiente hoja y aplastar Start)." },
        //paso 4 seleccionar asterisco
        { titulo: "Aplastar #", imagen: "img/escanear/4-confrimar.png",
        detalle: "Aplastar el botón el Numeral (#) para guardar el documento escaneado." },
        //paso 5 seleccionar ir a aescanear
        { titulo: "Abrir Escanear", imagen: "img/escanear/5-ir-a-aescanear.png",
        detalle: `Hacer Click en:
        http://192.168.0.69/web/guest/es/websys/webArch/mainFrame.cgi.`
        },
        //paso 6 clic en document server 
        { titulo: "Clic en Document Server", imagen: "img/escanear/6-click-en-document-server.png",
        detalle: "Clic en Document Server." },
        //paso 7 seleccionar carpeta compartida
        { titulo: "Seleccionar Carpeta Compartida", imagen: "img/escanear/7-ir-a-carpeta-compartida.png",
        detalle: "Click en la carpeta compartida." },
        //paso 8 seleccionar PDF
        { titulo: "Seleccionar PDF", imagen: "img/escanear/8-clic-en-pdf.png",
        detalle: "Seleccionar PDF, hacer click en él, recordar que siempre es el primero" },
        //paso 9 guardar
        { titulo: "Guardar", imagen: "img/escanear/9-guardar.png",
        detalle: "Hacer click en el botón guardar." },
        //paso 10 aceptar
        { titulo: "Abrir Carpeta Compartida", imagen: "img/escanear/10-aceptar.png",
        detalle: "Hacer click en el botón aceptar." },
        //paso 11 pedir número de teléfono de Whatsapp
        { titulo: "Pedir número de teléfono para enviar", imagen: "img/escanear/11-pedir-numero-telefono.png",
        detalle: "Pedir el número de teléfono de Whatsapp del clientepara enviar el documento escaneado." },
        //paso 12 enviar por Whatsapp
        { titulo: "Abrir Chat de Whatsapp", imagen: "img/escanear/12-chatear.png",
        detalle: "después de hacer click en el número de teléfono hacer click en CHATEAR, con esto se va a abrir un nuevo chat." },
        //paso 13 adjuntar el documento escaneado
        { titulo: "Adjuntar el documento escaneado", imagen: "img/escanear/13-adjuntar.png",
        detalle: "Hacer click en el clip" },
        //paso 14 enviar el documento escaneado
        { titulo: "Enviar el documento escaneado", imagen: "img/escanear/14-adjuntar-documento.png",
        detalle: "Click en ADJUNTAR DOCUMENTO" },
        //paso 15 seleccionar documento escaneado
        { titulo: "Seleccionar el documento escaneado", imagen: "img/escanear/15-seleccionar-document.png",
        detalle: "Seleccionar el documento escaneado, hacer click en él, siempre va a ser el primero de arriba" },
        //paso 16 click en abrir
        { titulo: "Click en Abrir", imagen: "img/escanear/16-abrir.png",
        detalle: "Click en ABRIR" },
        //paso 17 click en enviar 
        { titulo: "Click en Enviar", imagen: "img/escanear/17-enviar.png",
        detalle: "Click en ENVIAR, con esto se va a enviar el documento escaneado al cliente." },


    ] },

    
];
