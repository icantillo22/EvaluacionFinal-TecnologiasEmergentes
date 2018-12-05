import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items = [
    {
      img: 'aguacate.jpg',
      nombre: 'Aguacate',
      precio: 5,
      cantidad: 46
    },
    {
      img: 'ajo.jpg',
      nombre: 'Ajo',
      precio: 2,
      cantidad: 76
    },
    {
      img: 'almendras.jpg',
      nombre: 'Almendras',
      precio: 10,
      cantidad: 120
    },
    {
      img: 'arandanos.jpg',
      nombre: 'Arandanos',
      precio: 12,
      cantidad: 50
    },
    {
      img: 'brocoli.png',
      nombre: 'Brocoli',
      precio: 7,
      cantidad: 46
    },
    {
      img: 'calabaza.jpg',
      nombre: 'Calabaza',
      precio: 9,
      cantidad: 26
    },
    {
      img: 'canela.jpg',
      nombre: 'Canela',
      precio: 12,
      cantidad: 10
    },
    {
      img: 'cebolla.jpg',
      nombre: 'Cebolla',
      precio: 4,
      cantidad: 63
    },
    {
      img: 'fresa.jpg',
      nombre: 'Fresas',
      precio: 7,
      cantidad: 48
    },
    {
      img: 'kiwi.jpg',
      nombre: 'Kiwi',
      precio: 14,
      cantidad: 20
    },
    {
      img: 'limon.jpg',
      nombre: 'Limon',
      precio: 3,
      cantidad: 94
    },
    {
      img: 'maiz.jpg',
      nombre: 'Maiz',
      precio: 6,
      cantidad: 34
    },
    {
      img: 'manzana.jpg',
      nombre: 'Manzana',
      precio: 5,
      cantidad: 101
    },
    {
      img: 'naranja.jpg',
      nombre: 'Naranja',
      precio: 6,
      cantidad: 48
    },
    {
      img: 'papa.jpg',
      nombre: 'Papa',
      precio: 5.5,
      cantidad: 200
    },
    {
      img: 'pasta.jpg',
      nombre: 'Pasta',
      precio: 7.5,
      cantidad: 46
    },
    {
      img: 'pimienta.jpg',
      nombre: 'Pimienta',
      precio: 12.25,
      cantidad: 55
    },
    {
      img: 'repollo.jpg',
      nombre: 'Repollo',
      precio: 10,
      cantidad: 99
    },
    {
      img: 'tomate.jpg',
      nombre: 'Tomate',
      precio: 6,
      cantidad: 50
    },
    {
      img: 'zanahoria.jpg',
      nombre: 'Zanahoria',
      precio: 3,
      cantidad: 46
    },
  ];

  ngOnInit() {
  }

}
