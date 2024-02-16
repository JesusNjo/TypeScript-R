"use strict";
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`${this.protagonistas} está siendo proyectada..`);
    }
}
const peliculaX = new Pelicula("Titanic", ["Jack", "Rose"], ["Leonardo DiCaprio", "Elena Jones"]);
const peliculaXX = new Pelicula("Barbie", ["Barbie", "Ken"], ["Margot Robbie", "Ryan Goslin"]);
peliculaX.proyectarEnCine();
peliculaXX.proyectarEnCine();
