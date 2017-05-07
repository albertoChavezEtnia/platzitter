/* Core Imports */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
/* Declaración de Servicio Injectable para Inyección de Dependencias */
@Injectable()

/* Clase Exportable */
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

}
