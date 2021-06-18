import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  h1 = 'Hola soy H1';
  nombre = 'Manuel';
  apellido = 'Ponton';
  alumno: any = {
    nombre: 'Juan',
    apellido: 'Perez'
  };
  imagen =
    'https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png';
  nuevoInput = 'Hola soy un Input';
}
