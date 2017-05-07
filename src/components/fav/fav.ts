/* Core Imports */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase  } from 'angularfire2';

/* Declaracion del componente Fav para Html <fav></fav> */

@Component({
	selector:'fav',
	templateUrl:'fav.html'
})

/*
	En las clases exportables declaradas de los componentes,
	as variables y funciones/métodos NO se les agrega prefijo de
	"qué es lo que se declara", sino que se declaran libremente como privadas
	ya que hacen referencia a una variable this.variable
*/
export class Fav {
	@Input() key:string;
	@Input() cantidad:number;
	@Output() onFav = new EventEmitter<string>();

	listado: FirebaseListObservable<any>;
  
	constructor (
		public database: AngularFireDatabase
	) {
		this.listado = this.database.list('/twitts/');
	}

	test = "";
	icon = "ios-heart-outline";

	alerta(){
   	if (this.test == "") {
			//obtener el valor inicial

			let cant:number = (this.cantidad + 1);
        
			this.listado.update(this.key, {
				fav : cant
			});

			this.test = "secondary";
			this.icon = "ios-heart";

			this.onFav.emit("gracias por hacer fav");

		} else {
			//obtener el valor inicial
			let cant:number = (this.cantidad - 1);
        
			this.listado.update(this.key, {
				fav : cant
			});
			this.test = "";
			this.icon = "ios-heart-outline";
		}
	}
}