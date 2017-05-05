import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'fav',
	templateUrl:'fav.html'
})



//En las clases de los componentes las variables y funciones/metodos no se les agrega prefijo de "qué es lo que se declara"
export class Fav {
	@Input() id:number;
	@Output() onFav = new EventEmitter<string>();

	test = '';
	icon = 'ios-heart-outline';

	alerta(){
		if(this.test == ''){
			this.test = 'primary';
			this.icon = 'ios-heart';			
			this.onFav.emit('Gracias por hacer fav');
		}else{
			this.test = '';
			this.icon = 'ios-heart-outline';			
		}
		
		//alert(this.id);
	}

}