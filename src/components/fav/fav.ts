import { Component, Input } from '@angular/core';

@Component({
	selector:'fav',
	templateUrl:'fav.html'
})



//En las clases de los componentes las variables y funciones/metodos no se les agrega prefijo de "qué es lo que se declara"
export class Fav {
	@Input() id:number;

	test = '';
	icon = 'ios-heart-outline';

	alert(){
		this.test = 'primary';
		this.icon = 'ios-heart';
		alert(this.id);
	}

}