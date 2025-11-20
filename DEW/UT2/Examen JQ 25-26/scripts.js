"use strict";

//******************   NOTA   ****************
// Haz uso de las funciones existentes. En caso de necesitar alguna
// extrea creala.
//
// De las funciones existente puedes hacer que retornen datos con return
//   o asignarlo a una variable, por ejemplo "let libros = function getFromLocalStorage(){}".
//   Usa lo que mejor se adapte a tu solución.
// ******************************************************

const URL_BOOKS = "http://10.103.255.0:3000/libros";

// ===== Referencias DOM (ids exigidos en el enunciado) =====
const btnCargar = document.querySelector("#btnCargar");
const btnLimpiar = document.querySelector("#btnLimpiar");
const listaLibros = document.querySelector("#libros");
const msgError = document.querySelector("#msgError");
const numEjemplares = document.querySelector("#numEjemplares");
const precioTotal = document.querySelector("#precioTotal");


// Apartado B el apartado A lo puse abajo
// apartado del A-1 al A-3
async function getBooksFromURL(URL_BOOKS) {
    try {
        const resp = await fetch(URL_BOOKS);
        if (!resp.ok) {
            throw new Error(`Error HTTP: ${resp.status} ${resp.statusText}`);
        }
        const data = await resp.json();
        const transformedBooks = data.map(book => ({
            id: book.isbn,
            titulo: book.titulo,
            autor: book.autor,
            precio: book.precio,
            year: book.year,
            igic: (book.precio * 0.07)
        }));
        saveToLocalStorage(transformedBooks);
        renderBooks();
        msgError.textContent = ""; 
    } catch (error) {
        msgError.textContent = `Error al cargar libros: ${error.message}`;
        console.error(error);
    }
}

//apartado A-4
function saveToLocalStorage(arrayBooks) {
    localStorage.setItem("libros", JSON.stringify(arrayBooks));
}

function getFromLocalStorage() {
    const data = localStorage.getItem("libros");
    return data ? JSON.parse(data) : null;
}

//apartado B-5 y apartado C  
function renderBooks() {
    const books = getFromLocalStorage();
    if (!books || books.length === 0) {
        listaLibros.innerHTML = "";
        numEjemplares.textContent = "0";
        precioTotal.textContent = "0,00 €";
        msgError.textContent = "No hay libros guardados";
        return;
    }

    msgError.textContent = ""; 
    listaLibros.innerHTML = ""; 
    books.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = `
            <li>
             <strong class="titulo"> TÍTULO: ${book.titulo}</strong>
             <span class="autor"> Autor: ${book.autor}</span>
             <span class="isbn">ISBN: ${book.id}</span>
             <span class="year">Año: ${book.year}</span>
             <span class="precio"> Precio: <b> ${book.precio.toFixed(2)} € </b></span>
             <span class="igic"> IGIC (7%): ${book.igic.toFixed(2)} €</span>
            </li>
        `;
        listaLibros.appendChild(li);
    });
    numEjemplares.textContent = calculaTotalEjemplares();
    precioTotal.textContent = calculaPrecioTotal().toFixed(2) + " €";
}

// Apartado D-1 y D-2
function calculaTotalEjemplares() {
    const books = getFromLocalStorage();
    return books ? books.length : 0;
}

function calculaPrecioTotal() {
    const books = getFromLocalStorage();
    if (!books) return 0;
    return books.reduce((total, book) => total + book.precio, 0);
}

// Apartado E 
function onLimpiarClick() {
    listaLibros.innerHTML = "";
    localStorage.removeItem("libros");
    numEjemplares.textContent = "0";
    precioTotal.textContent = "0.00 €";
    msgError.textContent = "No hay libros guardados";
}

// Apartado A
async function init() {
    const books = getFromLocalStorage();
    if (books) {
        renderBooks();
    } else {
        msgError.textContent = "No hay libros guardados";
    }
    btnCargar.addEventListener("click", () => getBooksFromURL(URL_BOOKS));
    btnLimpiar.addEventListener("click", onLimpiarClick);
}

document.addEventListener("DOMContentLoaded", init);
