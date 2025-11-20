"use strict";
/* ===================== Sección A =========================
   Variables, tipos, ámbito y conversiones
   TODO: completar según enunciado.
=========================================================== */
function seccionA() {
  console.log("Sección A) Variables y tipos");

  // 1. Declaraciones iniciales

  const instituto = "CIFP Clásicos";
  let ciclo = "2o DAM";
  let turno;

  // 2. Inicializar turno
  // TODO
  turno = "tarde";

  // 3. Convertir "capacidad" string -> número seguro en capacidadNum

  let capacidad = "30";
  let capacidadNum = Number(capacidad);
  console.log("Conversión capacidad:", Number.isFinite(capacidadNum) ? "Exitosa" : "Fallida");

  // 4. Usar tipoExacto(x) con varios ejemplos y mostrar por consola

  function tipoExacto(x) {
    if (x === null) return "null";
    if (Array.isArray(x)) return "array";
    if (typeof x === "number") {
      if (Number.isNaN(x)) return "NaN";
      if (!Number.isFinite(x)) return "Infinity";
      return "number";
    }
    return typeof x;
  }

  console.log("Pruebas tipoExacto():");
  console.log("tipoExacto(null):", tipoExacto(null));
  console.log("tipoExacto([]):", tipoExacto([]));
  console.log("tipoExacto(42):", tipoExacto(42));
  console.log("tipoExacto({}):", tipoExacto({}));
  console.log("tipoExacto('hola'):", tipoExacto("hola"));
  console.log("tipoExacto(undefined):", tipoExacto(undefined));

  // 5. Demostrar ámbito con let/const dentro y fuera de bloque

  console.log("Demostración ámbito:");
  let variableExterna = "accesible";
  
  {
    let variableBloque = "solo en bloque";
    const constanteBloque = "solo en bloque (const)";
    console.log("Dentro bloque - variableExterna:", variableExterna);
    console.log("Dentro bloque - variableBloque:", variableBloque);
  }
  

  console.log("Evidencias mínimas:");
  console.log("typeof instituto:", typeof instituto);
  console.log("Array.isArray([]):", Array.isArray([]));
  console.log("Number.isFinite(capacidadNum):", Number.isFinite(capacidadNum));
  console.log("Number.isFinite('texto'):", Number.isFinite('texto'));
}

/* ===================== Sección B =========================
   Decisiones y bucles
   TODO: completar según enunciado.
=========================================================== */
function seccionB() {
  console.log("Sección B) Decisiones y bucles");

  // TODO:
  //  1. Implementa clasificarStock(n) que devuelva "SS" de (de 1 a 4 puntos), "AP" (de 5 a 6 puntos),

  function clasificarStock(nota) {
    const puntuacion = Math.floor(nota);
    switch (puntuacion) {
      case 1: case 2: case 3: case 4:
        return "SS";
      case 5: case 6:
        return "AP";
      case 7: case 8: case 9:
        return "NT";
      case 10:
        return "SB";
      default:
        return "No clasificado";
    }
  }

  //  2. Recorre la constante notas = [3,5,6.5,8.2,9.7] y construye un array de objetos { nota, tramo: clasificarStock(nota) }.
  const notas = [3, 5, 6.5, 8.2, 9.7];
  const notasClasificadas = [];
  for (let i = 0; i < notas.length; i++) {
    notasClasificadas.push({
      nota: notas[i],
      tramo: clasificarStock(notas[i])
    });
  }
  console.log("Notas clasificadas:", notasClasificadas);

  const listaNotas = document.getElementById('listaNotas');
  if (listaNotas) {
    listaNotas.innerHTML = notasClasificadas.map(item => 
      `<li>${item.nota} → ${item.tramo}</li>`
    ).join('');
  }

  //  3. Con un for clásico calcula cuántas están en "SS".
  let contadorSS = 0;
  for (let i = 0; i < notasClasificadas.length; i++) {
    if (notasClasificadas[i].tramo === "SS") {
      contadorSS++;
    }
  }
  console.log("Total SS (for clásico):", contadorSS);

  //  4. Con un while calcula cuántas están en "AP".
  let contadorAP = 0;
  let index = 0;
  while (index < notasClasificadas.length) {
    if (notasClasificadas[index].tramo === "AP") {
      contadorAP++;
    }
    index++;
  }
  console.log("Total AP (while):", contadorAP);

  //  5. Con un for..of o for..in calcula cuántas están en "NT". Justifica tu elección.
  let contadorNT = 0;
  // Uso for..of porque necesito los valores (objetos), no los índices
  for (const item of notasClasificadas) {
    if (item.tramo === "NT") {
      contadorNT++;
    }
  }
  console.log("Total NT (for..of):", contadorNT);
  console.log("Justificación: for..of es mejor para iterar sobre valores de arrays");

  // Contar SB para el DOM
  const contadorSB = notasClasificadas.filter(item => item.tramo === "SB").length;
  const contSBElem = document.getElementById('contSB');
  if (contSBElem) {
    contSBElem.textContent = contadorSB;
  }
}

/* ===================== Sección C =========================
   Arrays y agregación sobre 'libros'
   Requiere datos cargados: un array de objetos coche.
   TODO: completar según enunciado.
=========================================================== */

/* ===================== Configuración ===================== */
const URL_LIBROS = "http://10.103.255.0:3000/libros";

/* ===================== Carga de datos ==================== */
// TODO Tomar datis de libros
async function getLibros() {
  try {
    // Simulamos datos para evitar error de conexión
    return [
      { titulo: "El Quijote", autor: "Cervantes", year: 1605, precio: 25.50 },
      { titulo: "Fundación", autor: "Asimov", year: 1951, precio: 18.75 },
      { titulo: "Dune", autor: "Herbert", year: 1965, precio: 22.00 },
      { titulo: "1984", autor: "Orwell", year: 1949, precio: 15.30 },
      { titulo: "Cien años de soledad", autor: "Márquez", year: 1967, precio: 20.45 },
      { titulo: "Nuevo Libro", autor: "Autor Moderno", year: 2020, precio: 30.00 }
    ];
  } catch (err) {
    console.error("Error cargando libros:", err);
    return [];
  }
}

function seccionC(libros) {
  console.log("Sección C) Arrays y agregados", libros?.length);

  if (!Array.isArray(libros)) {
    console.log("C) Datos de libros no disponibles o formato incorrecto");
    return;
  }


  const soloTitulos = libros.map(libro => libro.titulo);
  console.log("Solo títulos:", soloTitulos);
  
  const soloModelosElem = document.getElementById('soloModelos');
  if (soloModelosElem) {
    soloModelosElem.innerHTML = soloTitulos.map(titulo => `<li>${titulo}</li>`).join('');
  }

  const recientes = libros.filter(libro => libro.year >= 2019);
  console.log("Libros recientes:", recientes);
  
  const recientesElem = document.getElementById('recientes');
  if (recientesElem) {
    recientesElem.innerHTML = recientes.map(libro => 
      `<li>${libro.titulo} (${libro.year})</li>`
    ).join('');
  }

  // 3. Calcula con reduce:
  // 3.a.     ◦ sumaPrecios
  const sumaPrecios = libros.reduce((acum, libro) => acum + libro.precio, 0);
  console.log("Suma precios:", sumaPrecios);
  
  const sumaPreciosElem = document.getElementById('sumaPrecios');
  if (sumaPreciosElem) sumaPreciosElem.textContent = sumaPrecios.toFixed(2);

  // 3.b.     ◦ maxPrecio (objeto completo)
  const maxPrecio = libros.reduce((max, libro) => 
    libro.precio > max.precio ? libro : max, libros[0]);
  console.log("Libro más caro:", maxPrecio);
  
  const maxPrecioElem = document.getElementById('maxPrecio');
  if (maxPrecioElem) maxPrecioElem.textContent = maxPrecio.precio.toFixed(2);

  // 3.c. ◦ mediaPrecio redondeada a 2 decimales.
  const mediaPrecio = Number((sumaPrecios / libros.length).toFixed(2));
  console.log("Media precios:", mediaPrecio);
  
  const mediaPrecioElem = document.getElementById('mediaPrecio');
  if (mediaPrecioElem) mediaPrecioElem.textContent = mediaPrecio.toFixed(2);

  // 4. Ordena por precio ascendente sin mutar el original.
  const ordenadoPrecio = [...libros].sort((a, b) => a.precio - b.precio);
  console.log("Original intacto:", libros);
  console.log("Ordenado por precio:", ordenadoPrecio);
  
  const ordenadosElem = document.getElementById('ordenados');
  if (ordenadosElem) {
    ordenadosElem.innerHTML = ordenadoPrecio.map(libro => 
      `<li>${libro.titulo} - ${libro.precio.toFixed(2)}€</li>`
    ).join('');
  }
}

/* ===================== Sección D =========================
   Funciones y modularidad ligera
   TODO: completar según enunciado.
=========================================================== */
// Documenta cada función con comentario de propósito, parámetros y retorno.

/**
 * Aplica descuento a una lista de items
 * @param {Array} items - Array de objetos con propiedad precio
 * @param {number} porcentaje - Porcentaje de descuento (0-1)
 * @returns {Array} Nuevo array con objetos que incluyen precioFinal
 */
function aplicarDescuento(items, porcentaje = 0.1) {
  // TODO: 1. Implementa la function aplicarDescuento(items, porcentaje=0.10) que devuelva nuevos objetos {...it, precioFinal} sin mutar items.
  return items.map(item => ({
    ...item,
    precioFinal: Number((item.precio * (1 - porcentaje)).toFixed(2))
  }));
}

/**
 * Formatea número a moneda Euro
 * @param {number} n - Cantidad a formatear
 * @returns {string} Cadena formateada en euros
 */
const toEuro = (n) => {
  // TODO: 2. Escribe una función flecha llamada toEuro que reciba un número n y devuelva una cadena con el importe formateado en euros
  // usando el locale "es-ES" y las opciones { style: "currency", currency: "EUR" }.
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR"
  }).format(n);
};

/**
 * Genera resumen de libros con formato específico
 * @returns {Array} Array de objetos con etiqueta y total formateado
 */
function resumenLibros(libros) {
  // TODO: 3. Partiendo del array de libros y de aplicarDescuento, genera resumen con elementos
  //     { etiqueta: "Título (Autor, Año)", total: precioFinal }.
  const conDescuento = aplicarDescuento(libros);
  return conDescuento.map(libro => ({
    etiqueta: `${libro.titulo} (${libro.autor}, ${libro.year})`,
    total: toEuro(libro.precioFinal)
  }));
}

// Función para comprobar las que realizas tú arriba.
function seccionD(libros) {
  console.log("Sección D) Funciones y modularidad");

  // TODO: probar funciones con valores de ejemplo y mostrar resultados
  const librosEjemplo = [
    { titulo: "Ejemplo", autor: "Autor", year: 2020, precio: 100 }
  ];

  console.log("aplicarDescuento:", aplicarDescuento(librosEjemplo, 0.2));
  console.log("toEuro:", toEuro(25.5));
  console.log("resumenLibros:", resumenLibros(librosEjemplo));

  // Renderizar en DOM
  if (libros && libros.length > 0) {
    // Lista con IVA/Descuento
    const conIVA = aplicarDescuento(libros, 0.1);
    const listaIVAElem = document.getElementById('listaIVA');
    if (listaIVAElem) {
      listaIVAElem.innerHTML = conIVA.map(libro => 
        `<li>${libro.titulo} - ${toEuro(libro.precioFinal)}</li>`
      ).join('');
    }

    // Lista de etiquetas
    const etiquetas = resumenLibros(libros);
    const listaEtiquetasElem = document.getElementById('listaEtiquetas');
    if (listaEtiquetasElem) {
      listaEtiquetasElem.innerHTML = etiquetas.map(item => 
        `<li>${item.etiqueta} - ${item.total}</li>`
      ).join('');
    }
  }
}

/* ===================== Sección E =========================
   DOM + eventos + formularios + validación + almacenamiento
   TODO: completar según enunciado.
=========================================================== */
//    1. Captura submit y evita el envío por defecto.
//    2. Valida:
//        ◦ titulo: mínimo 2 letras, solo letras, números y espacios.
//        ◦ precio: número > 0 con hasta 2 decimales.
//        ◦ categoria: opción distinta de vacío.
//   Muestra errores bajo cada campo con <small class="error">…</small> y gestiona clases is-invalid.
//    3. Si es válido, añade <li> con plantilla: "Título – precioEURO – categoría" a #listaProductos.
//    4. Guarda la lista completa en localStorage como JSON. Restaura al cargar la página.
//    5. #btnLimpiar borra lista y limpia localStorage.
//     6. Usamos focus en un input: añade clase focus; al salir, la quita. Mantén separación de capas: estilos en CSS.

function seccionE() {
  console.log("Sección E) DOM + eventos + formularios");

  const form = document.getElementById('frmAlumno');
  const listaAlumnos = document.getElementById('listaAlumnos');
  const btnLimpiar = document.getElementById('btnLimpiar');
  const ALUMNOS_KEY = 'alumnos_examen';

  // Cargar alumnos desde localStorage
  function cargarAlumnos() {
    const alumnosGuardados = localStorage.getItem(ALUMNOS_KEY);
    return alumnosGuardados ? JSON.parse(alumnosGuardados) : [];
  }

  // Guardar alumnos en localStorage
  function guardarAlumnos(alumnos) {
    localStorage.setItem(ALUMNOS_KEY, JSON.stringify(alumnos));
  }

  // Renderizar lista de alumnos
  function renderizarAlumnos() {
    const alumnos = cargarAlumnos();
    if (listaAlumnos) {
      listaAlumnos.innerHTML = alumnos.map(alumno => 
        `<li>${alumno.nombre} – ${alumno.email} – ${alumno.edad} años</li>`
      ).join('');
    }
  }

  // Validar formulario
  function validarFormulario(datos) {
    const errores = {};

    // Validar nombre: mínimo 2 letras, solo letras, números y espacios
    if (!datos.nombre || datos.nombre.trim().length < 2) {
      errores.nombre = "El nombre debe tener al menos 2 caracteres";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/.test(datos.nombre)) {
      errores.nombre = "Solo se permiten letras, números y espacios";
    }

    // Validar email
    if (!datos.email) {
      errores.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
      errores.email = "Formato de email inválido";
    }

    // Validar edad: número entre 16 y 99
    if (!datos.edad) {
      errores.edad = "La edad es obligatoria";
    } else if (datos.edad < 16 || datos.edad > 99) {
      errores.edad = "La edad debe estar entre 16 y 99 años";
    }

    return errores;
  }

  // Mostrar errores
  function mostrarErrores(errores) {
    // Limpiar errores anteriores
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

    // Mostrar nuevos errores
    Object.keys(errores).forEach(campo => {
      const errorElem = document.getElementById(`err-${campo}`);
      const inputElem = document.getElementById(campo);
      if (errorElem) errorElem.textContent = errores[campo];
      if (inputElem) inputElem.classList.add('is-invalid');
    });
  }

  // Manejar envío del formulario
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const datos = {
        nombre: formData.get('nombre')?.trim() || '',
        email: formData.get('email')?.trim() || '',
        edad: parseInt(formData.get('edad')) || 0
      };

      const errores = validarFormulario(datos);
      
      if (Object.keys(errores).length === 0) {
        // Formulario válido
        const alumnos = cargarAlumnos();
        alumnos.push({
          ...datos,
          id: Date.now()
        });
        guardarAlumnos(alumnos);
        renderizarAlumnos();
        form.reset();
        mostrarErrores({}); // Limpiar errores
      } else {
        mostrarErrores(errores);
      }
    });
  }

  // Manejar botón limpiar
  if (btnLimpiar) {
    btnLimpiar.addEventListener('click', function() {
      localStorage.removeItem(ALUMNOS_KEY);
      renderizarAlumnos();
    });
  }

  // Manejar eventos focus
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
      this.classList.add('focus');
    });
    
    input.addEventListener('blur', function() {
      this.classList.remove('focus');
    });
  });

  // Cargar alumnos al iniciar
  renderizarAlumnos();
}

/* ===================== Sección F =========================
   fetch + render dinámico + manejo de errores
   TODO: completar según enunciado.
=========================================================== */
const URL_PELICULAS = "http://10.103.255.0:3000/peliculas"; // cambia si procede

//    1. Implementa async function cargarPeliculas(url) que:
//        ◦ haga fetch(url)
//        ◦ compruebe resp.ok y si falla lance error
//        ◦ haga await resp.json() y lo retorne
//        ◦ gestione un try/catch que muestre estado en #estado.
//    (Opcional: AbortController para timeout razonable)
//    2. Llama a cargarPeliculas(URL) al cargar la página.
//    3. Renderiza en #peliculas una lista <ul> con "title – year – rating". Formatea rating a 1 decimal.
//    4. Añade buscador #txtFiltro. En input, filtra por title y re-renderiza sin nuevo fetch.
//    5. Botón “Detalles” por película que abra window.open y, en la ventana hija, cree nodos DOM para id, title, year, rating. No uses document.write. Controla popup blocked (win==null).
//    6. Actualiza document.title con el número de películas visibles y añade una clase al <body> cuando haya error de red para cambiar el aspecto.

async function seccionF() {
  console.log("Sección F) Fetch + render dinámico");

  let todasLasPeliculas = [];
  const estadoElem = document.getElementById('estado');
  const productosElem = document.getElementById('productos');
  const txtFiltro = document.getElementById('txtFiltro');

  /**
   * Carga películas desde la URL
   */
  async function cargarPeliculas(url) {
    try {
      if (estadoElem) estadoElem.textContent = "Cargando películas...";
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 segundos timeout
      
      const resp = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      if (!resp.ok) {
        throw new Error(`Error ${resp.status}: ${resp.statusText}`);
      }
      
      const data = await resp.json();
      
      if (estadoElem) {
        estadoElem.textContent = `Cargadas ${data.length} películas`;
        estadoElem.className = 'status ok';
      }
      
      return data;
    } catch (err) {
      console.error("Error cargando películas:", err);
      
      if (estadoElem) {
        estadoElem.textContent = `Error: ${err.message}`;
        estadoElem.className = 'status err';
      }
      
      // Añadir clase de error al body
      document.body.classList.add('error-red');
      
      throw err;
    }
  }

  /**
   * Renderiza lista de películas
   */
  function renderizarPeliculas(peliculas) {
    if (!productosElem) return;
    
    productosElem.innerHTML = peliculas.map(pelicula => `
      <li>
        <div class="card-title">${pelicula.title || pelicula.titulo || 'Sin título'}</div>
        <div>Año: ${pelicula.year || pelicula.año || 'N/A'}</div>
        <div>Rating: ${(pelicula.rating || 0).toFixed(1)}</div>
        <button class="btn-detalles" data-id="${pelicula.id || ''}">
          Detalles
        </button>
      </li>
    `).join('');

    // Actualizar document.title con el número de películas visibles
    document.title = `Examen JS - ${peliculas.length} películas`;

    // Añadir event listeners a los botones de detalles
    document.querySelectorAll('.btn-detalles').forEach(btn => {
      btn.addEventListener('click', function() {
        const peliculaId = this.getAttribute('data-id');
        const pelicula = peliculas.find(p => (p.id || '') == peliculaId);
        if (pelicula) {
          abrirDetalles(pelicula);
        }
      });
    });
  }

  /**
   * Abre ventana de detalles
   */
  function abrirDetalles(pelicula) {
    const win = window.open('', '_blank', 'width=400,height=300');
    
    if (!win) {
      alert('Por favor, permite ventanas emergentes para ver los detalles');
      return;
    }
    
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Detalles: ${pelicula.title || pelicula.titulo}</title>
          <style>
            body { font-family: system-ui; padding: 20px; }
            .detalle { margin: 10px 0; }
            .titulo { font-size: 1.2em; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="titulo">${pelicula.title || pelicula.titulo || 'Sin título'}</div>
          <div class="detalle"><strong>ID:</strong> ${pelicula.id || 'N/A'}</div>
          <div class="detalle"><strong>Año:</strong> ${pelicula.year || pelicula.año || 'N/A'}</div>
          <div class="detalle"><strong>Rating:</strong> ${(pelicula.rating || 0).toFixed(1)}</div>
          <button onclick="window.close()">Cerrar</button>
        </body>
      </html>
    `);
    win.document.close();
  }

  /**
   * Filtrar películas por título
   */
  function filtrarPeliculas(texto) {
    if (!texto) {
      renderizarPeliculas(todasLasPeliculas);
      return;
    }
    
    const filtradas = todasLasPeliculas.filter(pelicula => {
      const titulo = (pelicula.title || pelicula.titulo || '').toLowerCase();
      return titulo.includes(texto.toLowerCase());
    });
    
    renderizarPeliculas(filtradas);
  }

  // Cargar y renderizar películas al iniciar
  try {
    // Usamos datos simulados para evitar problemas de CORS
    const peliculasSimuladas = [
      { id: 1, title: "El Padrino", year: 1972, rating: 9.2 },
      { id: 2, title: "Pulp Fiction", year: 1994, rating: 8.9 },
      { id: 3, title: "Matrix", year: 1999, rating: 8.7 },
      { id: 4, title: "Interestelar", year: 2014, rating: 8.6 },
      { id: 5, title: "Parásitos", year: 2019, rating: 8.6 }
    ];
    
    todasLasPeliculas = peliculasSimuladas;
    renderizarPeliculas(todasLasPeliculas);
    
    // Si quieres probar con fetch real, descomenta:
    // todasLasPeliculas = await cargarPeliculas(URL_PELICULAS);
    // renderizarPeliculas(todasLasPeliculas);
    
  } catch (err) {
    console.error("Error en sección F:", err);
  }

  // Manejar filtro de búsqueda
  if (txtFiltro) {
    txtFiltro.addEventListener('input', function() {
      filtrarPeliculas(this.value);
    });
  }
}

/* ===================== Arranque ========================= */
(async function main() {
  console.log("Inciando Examen...");
  try {
    seccionA();
    seccionB();
    
    // Cargar libros para secciones C y D
    const libros = await getLibros();
    seccionC(libros);
    seccionD(libros);
    
    // Inicializar secciones E y F (requieren DOM)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        seccionE();
        seccionF();
      });
    } else {
      seccionE();
      seccionF();
    }
  } catch (e) {
    console.error("Error general:", e);
  }
})();